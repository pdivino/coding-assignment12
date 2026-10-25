# Coding Assignment 12: UI Garden

A responsive React and TypeScript component library created with Storybook and Styled Components.

## Components

- Button
- Label
- Text
- Table
- TableHeader
- TableRow
- TableCell
- TableFooter
- Dropdown
- RadioButton
- Img
- HeroImage
- Card

Each component folder contains:

```text
ComponentName.tsx
ComponentName.stories.tsx
ComponentName.types.tsx
ComponentName.tests.tsx
Index.ts
```

Each component includes Storybook Controls, Default and Disabled stories, responsive styling, and two required tests.

## Project Setup

Requirements:

- Node.js 24
- npm
- Docker Desktop

Install the dependencies:

```powershell
npm.cmd install
```

## Run the React App

```powershell
npm.cmd start
```

Open:

```text
http://localhost:3000
```

## Run Storybook

```powershell
npm.cmd run storybook
```

Open:

```text
http://localhost:6006
```

Storybook Controls can modify component properties such as text, background colour, content, and disabled state.

## Run the Tests

```powershell
npm.cmd test -- --watchAll=false
```

Expected result:

```text
Test Suites: 2 passed
Tests:       27 passed
```

Every component has:

1. A test confirming it is visible.
2. A test confirming its disabled background is grey.

## Create Production Builds

Create the optimized React build:

```powershell
npm.cmd run build
```

Create the static Storybook build:

```powershell
npm.cmd run build-storybook
```

The output folders are:

```text
build
storybook-static
```

## Build the Docker Image

Make sure Docker Desktop is running, then run:

```powershell
docker build -t divino_paolo_assignment12 .
```

The Dockerfile uses Node.js to create the optimized React build and Nginx to host the completed site.

## Run the Docker Container

```powershell
docker run -d --name divino_paolo_coding_assignment12 -p 127.0.0.1:8083:8083 divino_paolo_assignment12
```

Open:

```text
http://localhost:8083
```

## Verify the Container

Confirm that the container is running:

```powershell
docker ps --filter name=divino_paolo_coding_assignment12
```

Confirm the required working directory:

```powershell
docker exec divino_paolo_coding_assignment12 pwd
```

Expected result:

```text
/divino_paolo_ui_garden
```

View the container logs:

```powershell
docker logs divino_paolo_coding_assignment12
```

## Restart or Stop the Container

Start an existing stopped container:

```powershell
docker start divino_paolo_coding_assignment12
```

Stop the container:

```powershell
docker stop divino_paolo_coding_assignment12
```

If the container must be recreated:

```powershell
docker stop divino_paolo_coding_assignment12
docker rm divino_paolo_coding_assignment12
docker run -d --name divino_paolo_coding_assignment12 -p 127.0.0.1:8083:8083 divino_paolo_assignment12
```

## Assignment Verification

- Create React App and TypeScript used
- Storybook installed
- Styled Components used
- All required components included
- All components are responsive
- Storybook Controls included
- Default and Disabled states included
- Disabled components are grey with a `not-allowed` cursor
- Two tests included for every component
- All 27 tests pass
- React and Storybook production builds succeed
- Docker working directory is `/divino_paolo_ui_garden`
- Docker container is `divino_paolo_coding_assignment12`
- Production site runs on `localhost:8083`

## References

- [Storybook Documentation](https://storybook.js.org/docs)
- [Styled Components Documentation](https://styled-components.com/docs/basics)
- [React Testing Library](https://github.com/testing-library/jest-dom)
- [jest-styled-components](https://www.npmjs.com/package/jest-styled-components)
- [Docker Documentation](https://docs.docker.com/)