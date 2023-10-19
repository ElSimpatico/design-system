# Design System

The main objective of the project is to show an example of how to implement a design system and how to integrate it into an application.

You can access the design system used [here](<https://www.figma.com/file/QE5spdNgpA7q1ZXMaJ8yZx/Basic-Design%C2%A0System-(Community)?node-id=0%3A1&mode=dev>).

## Getting Starting

To get started you can follow these steps.

### Prerequisites

This project has been developed with:

-   node v18.17.1
-   npm v9.6.7
-   yarn 1.22.19

### Clone repository

Open the terminal and clone the new repository

```
$ git clone [REPOSITORY URL]
```

### Install

1. Once we have [node](https://nodejs.org/en/download) installed you can install `yarn` globally (If not already installed).

    ```
    $ npm install --globall yarn
    ```

2. Go to the project folder and install dependencies.

    ```
    $ cd [FOLDER NAME]
    $ code . //open vscode
    $ yarn install
    ```

### Available Scripts

This project is a monorepo project managed with [lerna](https://lerna.js.org/docs/getting-started), so each package represents an independent project with its own scripts.

In the root of the project we can find the following scripts:

`yarn build`

Build all packages respecting the dependencies between them.

`yarn start:app`

Start the `TODO APP` locally

`yarn stroybook:ui`

Start Storybook of the `UI KIT` locally.
