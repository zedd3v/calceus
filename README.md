# Calceus - First full open-source autocheckout bot

## Getting Started

| Command       | Effect                                                                   |
| ------------- | ------------------------------------------------------------------------ |
| `yarn install` | Install all of the required node modules and dependencies for the project |

## Development Commands

The following commands with allow for an intuitive development environment with the application hot reloading on any frontend application changes.
**The application will not hot reload on electron changes.**

| Command        | Effect                                                                   |
| -------------- | ------------------------------------------------------------------------ |
| `webpack-dev`  | Compiles a development version of all applicable files (main & renderer) |
| `react-dev`    | Launches a live webpack development server on port 3000                  |
| `electron-dev` | Launches electron and connects to port 3000                              |

> The `react-dev` command must be ran prior to `electron-dev` to connect to the local server.

> While in `Development` mode Chrome Developer Tools can be opened via Ctrl+Shift+I.

## Production Commands

The following commands with compile the application for win32 platform machines.

| Command        | Effect                                                                  |
| -------------- | ----------------------------------------------------------------------- |
| `webpack-prod` | Compiles a production version of all applicable files (main & renderer) |
| `build-win`    | Compiles the production files to a Windows executable                   |

> While in `Production` mode Chrome Developer Tools is disabled.
