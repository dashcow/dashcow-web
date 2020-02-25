# DashCow web

DashCow Web is a web interface for DashCow service. It provides handy dashboard which allows pasture owners to manage and track cows easily.

- [DashCow web](#dashcow-web)
  - [Roadmap](#roadmap)
    - [v1](#v1)
  - [Development Guide](#development-guide)
    - [Requirements](#requirements)
    - [Installation](#installation)
    - [Run project](#run-project)
    - [Build project](#build-project)
    - [Test](#test)
    - [Lint Typescript/Javascript](#lint-typescriptjavascript)
    - [Lint styles](#lint-styles)
    - [Lint all](#lint-all)
    - [Format](#format)
    - [Fix all lint and formats](#fix-all-lint-and-formats)
    - [Run storybook](#run-storybook)
    - [Build storybook](#build-storybook)
    - [Deploy storybook to GitHub page](#deploy-storybook-to-github-page)
    - [Contributing](#contributing)
    - [Learn More](#learn-more)

## Roadmap

### v1

- [ ] Show herd statistic
- [ ] Search cow
- [ ] Show cow list
- [ ] CRUD cow data
- [ ] CRUD herd category
- [ ] CRUD event data

## Development Guide

### Requirements

- [Node](https://nodejs.org/en/): `8.16`+
- [npm](https://www.npmjs.com/get-npm): `5.2`+

### Installation

To install dependencies of the DashCow web:

```bash
npm install
```

### Run project

To run the app in the development mode:

```bash
npm start
```

and open <http://localhost:3000> to view it in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.

### Build project

To builds the app for production to the build folder:

```bash
npm run build
```

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Test

To launch the [JEST](https://jestjs.io) & [Testing Library](https://testing-library.com) test runner in the interactive watch mode:

```bash
npm test
```

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Lint Typescript/Javascript

To lint all Javascript related files including js, jsx, ts, tsx with Eslint:

```bash
npm run lint:es
```

Alternatively, to fix all fixable JavaSript related lint errors in js, jsx, ts, tsx with ESLint:

```bash
npm run fix:lint:es
```

See [ESLint](https://eslint.org) for more details.

### Lint styles

To lint all CSS related files including css, scss, sass, less with StyleLint:

```bash
npm run lint:style
```

Alternatively, to fix all fixable CSS related lint errors including css, scss, sass, less files with StyleLint:

```bash
npm run fix:lint:style
```

See [StyleLint](https://stylelint.io) for more details.

### Lint all

To lint all JS and CSS files including js, jsx, ts, tsx, css, scss, sass with ESLint and StyleLint:

```bash
npm run lint
```

Alternatively, to fix all fixable JavaSript and CSS related lint errors including js, jsx, ts, tsx, css, scss, sass with ESLint and StyleLint:

```bash
npm run fix:lint
```

See [Lint Typescript/Javascript](#lint-typescriptjavascript) and [Lint styles](#lint-styles) sections for more details.

### Format

To format JavaScript, CSS, HTML, JSON and markdown files with Prettier:

```bash
npm run fix:prettier
```

See [Prettier](https://prettier.io) for more details.

### Fix all lint and formats

To fix all fixable JavaSript and CSS related lint errors and format files:

```bash
npm run fix
```

See [Lint Typescript/Javascript](#lint-typescriptjavascript), [Lint styles](#lint-styles) and [Format](#format) sections for more details.

### Run storybook

Storybook app shows all UI components in DashCow web, it's a nice way test and check UI components.

To runs storybook app:

```bash
npm run storybook
```

and open <http://localhost:9009> to view it in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.

See [Storybook](https://storybook.js.org) for more details.

### Build storybook

To build storybook app to the storybook build folder:

```bash
npm run build-storybook
```

and the storybook app is ready to be deployed!

See [Storybook](https://storybook.js.org) for more details.

### Deploy storybook to GitHub page

To deploy storybook app to current GitHub repositories' GitHub page:

```bash
npm run deploy-storybook
```

and open <http://dashcow.github.io/dashcow-web> to view it in the browser.

Alternatively, to deploy storybook app to other remote GitHub repositories' GitHub page:

```bash
npm run deploy-storybook -- --remote=[your-remote-repo-name]
```

and open <http://[username-or-group-name].github.io/dashcow-web> to view it in the browser.

See [Storybook deployer](https://github.com/storybookjs/storybook-deployer) for more details.

### Contributing

Please follow [Angular Commit Message Conventions](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines) for git commit logs.

### Learn More

This project was bootstrapped with Create React App, so you can learn more details in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
