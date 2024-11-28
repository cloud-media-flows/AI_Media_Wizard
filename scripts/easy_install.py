import subprocess
import os
import sys
import stat
import re
from pathlib import Path
from shutil import rmtree


INITIAL_RERUN = "--rerun" in sys.argv
PARENT_DIR = Path(__file__).parent
VENV_NAME = ".venv" if PARENT_DIR.parent.joinpath(".venv").exists() else "venv"
PYTHON_EMBEDED = os.path.split(os.path.split(sys.executable)[0])[1] == "python_embeded"
COMPUTE_DEVICE = os.environ.get("COMPUTE_DEVICE", "")
GH_BUILD_RELEASE = os.environ.get("BUILD_RELEASE", "0") == "1"
FORCE_DEV_VERSION = os.environ.get("DEV_VERSION", "0") == "1"


def main_entry():
    if not INITIAL_RERUN:
        print()
        print("Greetings from Visionatrix easy install script")
        print()
        print()
    if not INITIAL_RERUN and PARENT_DIR.name == "scripts" and PARENT_DIR.parent.name.lower() == "visionatrix":
        if PARENT_DIR.parent.joinpath(VENV_NAME).exists():
            os.chdir(PARENT_DIR.parent)
            print("Existing installation detected.")
            print("Select the required action:")
            print("\tReinstall (1)")
            print("\tUpdate (2)")
            print("\tRun (3)")
            print("\tInstall ALL flows(can be done from UI)(4)")
            c = input("What should we do?: ")
            if c == "1":
                reinstall()
            elif c == "2":
                update_visionatrix()
            elif c == "3":
                run_visionatrix()
            elif c == "4":
                venv_run("python -m visionatrix install-flow --name='*'")
            else:
                print("exiting")
        else:
            c = input("Looks like you run `easy-install` from the cloned repo. Perform installation? (Y/N) ")
            if c.lower() == "y":
                reinstall()
            else:
                print("exiting")
    elif INITIAL_RERUN:
        os.chdir(PARENT_DIR.parent.parent if PYTHON_EMBEDED else PARENT_DIR.parent)
        reinstall()
    else:
        q = "Y" if GH_BUILD_RELEASE else input("No existing installation found, start first installation? (Y/N) ")
        if q.lower() == "y":
            sys.exit(first_run())
        print("exiting")
    sys.exit(0)


def first_run() -> int:
    clone_vix_repository()
    os.remove(__file__)
    folder_name = "visionatrix" if Path("visionatrix").exists() else "Visionatrix"
    r = subprocess.run(
        [sys.executable, Path(f"{folder_name}/scripts/easy_install.py"), "--rerun"],
        check=False, stdin=sys.stdin, stdout=sys.stdout, stderr=sys.stderr)
    return r.returncode


def reinstall():
    if not PYTHON_EMBEDED:
        if Path(VENV_NAME).exists():
            if sys.executable.find(VENV_NAME) == -1:
                c = input(f"{VENV_NAME} folder already exists. Remove it? (Y/N): ").lower()
                if c == "y":
                    rmtree(VENV_NAME, onerror=remove_readonly)
                    print(f"Removed `{VENV_NAME}` folder.")
            else:
                c = input("Can't remove virtual environment, current script use it. Continue? (Y/N): ").lower()
                if c != "y":
                    return
        if not Path(VENV_NAME).exists():
            create_venv()
    install_graphics_card_packages()
    print("Installing Visionatrix")
    if PYTHON_EMBEDED:
        venv_run("python -m pip install Visionatrix/.")
    else:
        venv_run("python -m pip install .")
    print("Preparing Visionatrix working instance..")
    venv_run("python -m visionatrix install")
    if GH_BUILD_RELEASE:
        return

    create_extra_models_config_file()

    c = input("Installation finished. Run Visionatrix? (Y/N): ").lower()
    if c == "y":
        run_visionatrix()
    else:
        print("You can run in manually later. From activated virtual environment execute:")
        print("python -m visionatrix run --ui")


def run_visionatrix():
    venv_run("python -m visionatrix run --ui")


def get_latest_version(major_version: int | None, cwd=None) -> str | None:
    result = subprocess.run(["git", "tag"], capture_output=True, text=True, cwd=cwd)
    tags = result.stdout.strip().split("\n")
    if major_version is not None:
        tags = [tag for tag in tags if tag.startswith(f"v{major_version}.")]
    tags.sort(key=parse_version_tag)
    return tags[-1] if tags else None


def get_vix_version():
    """Returns version of the project."""
    with open("visionatrix/_version.py", encoding="utf-8") as f:
        content = f.read()
    match = re.search(r'__version__\s*=\s*"(.*?)"', content)
    if not match:
        raise ValueError("Version string not found in _version.py")
    return match.group(1)


def update_visionatrix():
    if PYTHON_EMBEDED:
        print("Updating the EMBEDDED version is currently not possible.")
        return

    visionatrix_version = get_vix_version()
    current_branch = subprocess.run(
        ["git", "rev-parse", "--abbrev-ref", "HEAD"], capture_output=True, text=True
    ).stdout.strip()
    if current_branch == "main":
        print("Updating source code from repository..")
        subprocess.check_call(["git", "checkout", "main"])
        result = subprocess.run(["git", "pull"], capture_output=True, text=True)
        if "Already up to date." in result.stdout:
            print("No new commits were pulled.")
    else:
        print("Fetching last tags from remote")
        subprocess.check_call(["git", "fetch", "--all"])

        clone_env = os.environ.copy()
        clone_env["GIT_CONFIG_PARAMETERS"] = "'advice.detachedHead=false'"

        major_version = get_major_version(visionatrix_version)
        latest_version_tag = get_latest_version(major_version)
        if latest_version_tag != f"v{visionatrix_version}":
            if latest_version_tag is None or is_dev_version(visionatrix_version):
                result = subprocess.run(["git", "pull"], capture_output=True, text=True)
                if "Already up to date." in result.stdout:
                    print("No new commits were pulled.")
            else:
                print(f"Updating to the latest version {latest_version_tag} in this major version {major_version}..")
                subprocess.check_call(["git", "checkout", f"tags/{latest_version_tag}"], env=clone_env)
        else:
            latest_version_tag = get_latest_version(major_version + 1)
            if latest_version_tag is None:
                print(f"No newer version found then current {visionatrix_version} version.")
            else:
                print(f"No newer version found for this major version: {visionatrix_version}.")
                c = input(f"Update to the next major version({latest_version_tag})? (Y/N): ")
                if c.lower() == "y":
                    subprocess.check_call(["git", "checkout", f"tags/{latest_version_tag}"], env=clone_env)
    venv_run("python -m pip install .")
    print("Running `python -m visionatrix update`")
    venv_run("python -m visionatrix update")


def clone_vix_repository() -> None:
    try:
        if FORCE_DEV_VERSION:
            q = "L"
        elif GH_BUILD_RELEASE:
            q = "R"
        else:
            q = input("Are we installing the release version or the latest? (R/L) ")
        release_channel = q.lower() == "r"
        clone_command = ["git", "clone", "https://github.com/Visionatrix/Visionatrix.git"]
        print("Cloning Visionatrix repository...")
        print(clone_command)
        subprocess.check_call(clone_command)
        print("Repository cloned successfully.")
        if release_channel:
            print("Switching to the latest release version.")
            last_release_version = get_latest_version(None, cwd="Visionatrix")
            clone_env = os.environ.copy()
            clone_env["GIT_CONFIG_PARAMETERS"] = "'advice.detachedHead=false'"
            subprocess.check_call(["git", "checkout", f"tags/{last_release_version}"], cwd="Visionatrix", env=clone_env)
    except subprocess.CalledProcessError as e:
        print("An error occurred while trying to clone the repository:", str(e))
        raise
    except FileNotFoundError:
        print("git command could not be found. Please ensure Git is installed and added to your PATH.")
    except Exception as e:
        print("An unexpected error occurred:", str(e))
        raise


def create_venv() -> None:
    try:
        subprocess.check_call([sys.executable, "-m", "venv", VENV_NAME])
        print("Virtual environment created successfully.")
    except Exception as e:
        print("An error occurred while creating the virtual environment:", str(e))
        raise


def venv_run(command: str) -> None:
    if PYTHON_EMBEDED:
        command = command.replace("python", sys.executable)
    else:
        if sys.platform.lower() == "win32":
            command = f"call {VENV_NAME}/Scripts/activate.bat && {command}"
        else:
            command = f". {VENV_NAME}/bin/activate && {command}"
    try:
        print(f"executing(pwf={os.getcwd()}): {command}")
        subprocess.check_call(command, shell=True)
    except subprocess.CalledProcessError as e:
        print("An error occurred while executing command in venv:", str(e))
        raise


def install_graphics_card_packages():
    if sys.platform.lower() == "darwin":
        return
    if COMPUTE_DEVICE:
        c = COMPUTE_DEVICE.lower()
    else:
        q = "Do you want to install packages for an AMD or NVIDIA graphics card? Enter AMD, NVIDIA, or skip(default): "
        c = input(q).lower()
    pip_install = "python -m pip install -U "
    if c == "amd":
        print("Installing packages for AMD graphics card...")
        if sys.platform.lower() == "win32":
            venv_run(pip_install + "torch-directml")
        else:
            venv_run(pip_install + "torch torchvision torchaudio --index-url https://download.pytorch.org/whl/rocm6.2")
    elif c == "nvidia":
        print("Installing packages for NVIDIA graphics card...")
        if sys.platform.lower() == "win32":
            venv_run(
                pip_install + "torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu124"
            )  # noqa # !!! do not forget to change PyTorch version in `visionatrix/comfyui_wrapper.py` !!!
        else:
            venv_run(pip_install + "torch torchvision torchaudio")
        venv_run(pip_install + "torch torchvision torchaudio")
    else:
        print("Skipping graphics card package installation.")


def remove_readonly(func, path, _):
    """Clear the readonly bit and reattempt the removal."""
    os.chmod(path, stat.S_IWRITE)
    func(path)


def parse_version(version_str: str) -> (int, int, int):
    """
    Parses a version string and returns a tuple of integers (major, minor, patch).
    Handles both release and development version patterns.
    """
    match = re.match(r"(\d+)\.(\d+)\.(\d+)", version_str)
    if not match:
        raise ValueError(f"Invalid version string: {version_str}")
    return tuple(map(int, match.groups()))


def parse_version_tag(tag: str) -> (int, int, int):
    """
    Parses a version tag and returns a tuple of integers (major, minor, patch).
    Handles both release and development version patterns.
    """
    match = re.match(r"v(\d+)\.(\d+)\.(\d+)", tag)
    if not match:
        raise ValueError(f"Invalid version tag: {tag}")
    return tuple(map(int, match.groups()))


def get_major_version(version_str: str) -> int:
    """Extracts and returns the major version number from a version string."""
    major, _, _ = parse_version(version_str)
    return major


def is_dev_version(version_str: str) -> bool:
    """
    Checks if a given version string is a development version (e.g., '1.1.0.dev0').
    Returns True if it is a development version, otherwise False.
    """
    return bool(re.match(r"\d+\.\d+\.\d+\.dev\d+", version_str))


def create_extra_models_config_file():
    # Check if "extra_model_paths.yaml" file exists and ask if the user wants to create "extra_model_paths.yaml"
    if Path("extra_model_paths.yaml").exists():
        print("Skipping creation of 'extra_model_paths.yaml' as it is already exists.")
        return
    create_extra = input('Do you want to create an external "extra_model_paths.yaml" for models map? (Y/N): ').lower()
    if create_extra != "y":
        print("Skipping creation of 'extra_model_paths.yaml'.")
        return

    # Ask for the models directory path
    models_dir = input("Enter the relative or absolute path to the models directory: ").strip()
    if not os.path.isabs(models_dir):
        models_dir = os.path.abspath(models_dir)
    if not os.path.exists(models_dir):
        create_dir = input(f"The directory '{models_dir}' does not exist. Do you want to create it? (Y/N): ").lower()
        if create_dir == "y":
            os.makedirs(models_dir, exist_ok=True)
            print(f"Directory '{models_dir}' created.")
        else:
            print("Cannot proceed without a valid models directory. Skipping creation of 'extra_model_paths.yaml'.")
            return
    # Replace "vix_models_root" with the absolute path to the models directory
    extra_model_paths_content = EXTRA_MODEL_PATHS_YAML.format(
        vix_models_root=models_dir.replace("\\", "/")
    )
    with open("extra_model_paths.yaml", "w") as f:
        f.write(extra_model_paths_content)
    print("'extra_model_paths.yaml' has been created.")


EXTRA_MODEL_PATHS_YAML = """
vix_models:
  is_default: true
  checkpoints: {vix_models_root}/checkpoints
  text_encoders: |
    {vix_models_root}/text_encoders
    {vix_models_root}/clip
  clip_vision: {vix_models_root}/clip_vision
  controlnet: {vix_models_root}/controlnet
  diffusion_models: |
    {vix_models_root}/diffusion_models
    {vix_models_root}/unet
  diffusers: {vix_models_root}/diffusers
  ipadapter: {vix_models_root}/ipadapter
  instantid: {vix_models_root}/instantid
  loras: |
    {vix_models_root}/loras
    {vix_models_root}/photomaker
  photomaker: {vix_models_root}/photomaker
  sams: {vix_models_root}/sams
  ultralytics: {vix_models_root}/ultralytics
  unet: {vix_models_root}/unet
  upscale_models: {vix_models_root}/upscale_models
  vae: {vix_models_root}/vae
  vae_approx: {vix_models_root}/vae_approx
  pulid: {vix_models_root}/pulid
"""


if __name__ == "__main__":
    main_entry()
