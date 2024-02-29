# AIMediaWizard

**AI-driven** media creation and editing with a friendly UI and a backend API for integration with third-party services.

This platform ensures effortless deployment and management of AI-powered, secure workflows, tailor-made for the efficient processing of images and videos.

> [!NOTE]
> The project is currently in the planning stage.

## The main goals of the project are as follows:

1. To automate deployment and installation processes.
2. To utilize only proven workflows and extensions for handling pictures and videos.
3. To avoid adding anything unnecessary or questionable from a security perspective.
4. To provide a convenient external API for external services.
5. To ensure an easy and simple user interface for individual users.
6. To focus on the use of ComfyUI at this stage.

*Main principles are: reliability, safety, and simplicity.*

## How to install

### Create Project Directory

```console
mkdir AIMediaWizard && cd AIMediaWizard
```

### Setting up virtual environment

```console
python -m venv venv
```

### Activation of Virtual Environment

#### Linux/macOS

```console
source env/bin/activate
```

#### Windows:

```console
.\env\Scripts\Activate.ps1
```

### Install **AIMediaWizard**

#### Development version from repository

```console
pip install git+https://github.com/cloud-media-flows/AIMediaWizard.git
```

#### Stable version from [PyPi](https://pypi.org/project/AIMediaWizard/)

```console
pip install AIMediaWizard
```

### Setting Up Hardware Accelerators for Deep Learning

*Currently, install does not differ from installing a [ComfyUI](https://github.com/comfyanonymous/ComfyUI?tab=readme-ov-file#manual-install-windows-linux).*

Install **PyTorch**:

> [!NOTE]
> *Later we have a goal to switch from **PyTorch** to [tinygrad](https://github.com/tinygrad/tinygrad) if it is possible.*

#### AMD

Development version of `PyTorch` is preferred for AMD graphic-cards at this moment:

```console
pip install --pre torch torchvision torchaudio --index-url https://download.pytorch.org/whl/nightly/rocm6.0
```

#### NVIDIA

Stable version of `PyTorch` is preferred for NVIDIA graphic-cards:

```console
pip install torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/cu121
```

#### macOS

Instructions for `Sonoma` will appear a bit later..

### Perform **AIMediaWizard** initialization

Execute it as a module with ``--init`` command:

```console
python -m AIMediaWizard --init
```

## Usage

To-do

## Integration in External Service

To-do
