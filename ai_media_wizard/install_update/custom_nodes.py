import logging
import os
from pathlib import Path
from subprocess import run

LOGGER = logging.getLogger("ai_media_wizard")
BASIC_NODE_LIST = {
    "ComfyUI-Impact-Pack": {},
    "ComfyUI_UltimateSDUpscale": {
        "git_flags": "--recursive",
    },
}


def install_base_custom_nodes(custom_nodes_dir: str) -> None:
    for k, v in BASIC_NODE_LIST.items():
        LOGGER.info("Cloning `%s`", k)
        git_flags = v.get("git_flags", "")
        run(
            f"git clone https://github.com/cloud-media-flows/{k}.git {git_flags} {os.path.join(custom_nodes_dir, k)}"
            .split(),
            check=True,
        )
        node_install_script = Path(os.path.join(custom_nodes_dir, k, "install.py"))
        if node_install_script.exists() is True:
            LOGGER.info("Running `%s` install script", k)
            run(f"python {node_install_script}".split(), check=True)


def update_base_custom_nodes(custom_nodes_dir: str) -> None:
    for k in BASIC_NODE_LIST:
        LOGGER.info("Updating `%s`", k)
        run("git pull".split(), check=True, cwd=os.path.join(custom_nodes_dir, k))
        node_install_script = Path(os.path.join(custom_nodes_dir, k, "install.py"))
        if node_install_script.exists() is True:
            LOGGER.info("Running `%s` install script", k)
            run(f"python {node_install_script}".split(), check=True)
