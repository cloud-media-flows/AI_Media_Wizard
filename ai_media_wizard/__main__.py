import argparse
import builtins
import json
import logging
import sys
from pathlib import Path

from . import install, options, run_backend, update
from .flows import install_custom_flow


def get_log_level(log_level_str):
    """Convert log level string to logging module log level."""
    log_levels = {
        "DEBUG": logging.DEBUG,
        "INFO": logging.INFO,
        "WARNING": logging.WARNING,
        "ERROR": logging.ERROR,
        "CRITICAL": logging.CRITICAL,
    }
    return log_levels.get(log_level_str.upper(), logging.INFO)


def __progress_callback(name: str, progress: float, error: str) -> None:
    if not error:
        logging.info("`%s` installation: %s", name, progress)
    else:
        logging.error("`%s` installation failed: %s", name, error)


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--loglevel",
        type=str,
        help="Set the logging level (DEBUG, INFO, WARNING, ERROR, CRITICAL)",
        default="INFO",
    )
    subparsers = parser.add_subparsers(dest="command")
    for i in [
        ("install", "Performs cleanup & initialization"),
        ("update", "Performs update to the latest version"),
        ("run", "Starts the AI and MediaWizard backends"),
        ("install-flow", "Install flow from folder"),
    ]:
        subparser = subparsers.add_parser(i[0], help=i[1])
        if i[0] == "install-flow":
            subparser.add_argument("--flow", type=str, help="Path to `flow.json`", required=True)
            subparser.add_argument("--flow_comfy", type=str, help="Path to `xyz_comfy.json`", required=True)
        else:
            subparser.add_argument("--backend_dir", type=str, help="Directory for the backend")
        subparser.add_argument("--flows_dir", type=str, help="Directory for the flows")
        subparser.add_argument("--models_dir", type=str, help="Directory for the models")
        if i[0] == "run":
            subparser.add_argument("--host", type=str, help="Host to be used by Wizard backend")
            subparser.add_argument("--port", type=str, help="Port to be used by Wizard backend")
            subparser.add_argument("--ui", type=str, help="Folder with UI")

    args = parser.parse_args()
    logging.basicConfig(
        level=get_log_level(args.loglevel),
        format="%(asctime)s: [%(funcName)s]:%(levelname)s: %(message)s",
        datefmt="%H:%M:%S",
    )
    flows_dir = options.get_flows_dir(args.flows_dir)
    models_dir = options.get_models_dir(args.models_dir)
    if args.command == "install":
        backend_dir = options.get_backend_dir(args.backend_dir)
        if Path(models_dir).exists():
            c = input("Do you want to clear models folder? (Y/N): ").lower()
            if c != "y":
                models_dir = ""
        if Path(flows_dir).exists():
            c = input("Do you want to clear flows folder? (Y/N): ").lower()
            if c != "y":
                flows_dir = ""
        if Path(backend_dir).exists():
            c = input("Do you want to reinstall backend(ComfyUI) folder? (Y/N): ").lower()
            if c != "y":
                backend_dir = ""
        install(backend_dir=backend_dir, flows_dir=flows_dir, models_dir=models_dir)
    elif args.command == "update":
        update(backend_dir=options.get_backend_dir(args.backend_dir), flows_dir=flows_dir, models_dir=models_dir)
    elif args.command == "run":
        run_backend(
            backend_dir=args.backend_dir,
            flows_dir=args.flows_dir,
            models_dir=args.models_dir,
            wizard_host=args.host,
            wizard_port=args.port,
            ui_dir=args.ui,
        )
    elif args.command == "install-flow":
        with builtins.open(args.flow, "rb") as fp:
            flow = json.loads(fp.read())
        with builtins.open(args.flow_comfy, "rb") as fp:
            flow_comfy = json.loads(fp.read())
        install_custom_flow(
            flows_dir=flows_dir,
            models_dir=models_dir,
            flow=flow,
            flow_comfy=flow_comfy,
            progress_callback=__progress_callback,
        )
    else:
        logging.getLogger("ai_media_wizard").error("Unknown command")
        sys.exit(2)
    sys.exit(0)
