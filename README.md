## Getting started
### Requirements

- [Node](https://nodejs.org/en/download/)

  > Make sure you have Node in your environment path. Run `node -v` to check

### Frontend part

- clone this repository

- restore all dependencies

  - from root run `npm ci`
    > `root` - the place where package.json is

- start application

  - from root of the repo run `npm start` to host and run the application
    > The application starts in development mode

    > The application will be available at http://localhost:4200

  - from root of the repo run `npm start:hmr` to host and run the application
    > The application starts in development mode with [Hot Module Replacement](https://dev.to/iamscottcab/using-hot-module-replacement-in-angular-11-mji)

    > The application will be available at http://localhost:4200

## Contributing

## Testing / Code Quality Assurance
---
### Application
---

#### Unit testing
  > Chrome browser required
- run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io)

- run `npm run test:coverage` to execute the unit tests with coverage report
  > Detailed coverage report is located in `./reports/coverage` folder

  > <span style="color: red;">Script will be failed in case of coverage less than 70%</span>

- for debugging purpose run `npm run test:debug`
  > The tests will run sequentially in one browser

#### JS static validation

- run `npm run eslint:check` to be sure that TS files follow all the required rules

#### HTML static validation

- run `npm run htmlhint:check` to be sure that HTML files follow all the required rules

#### CSS static validation

- run `npm run stylelint:check` to be sure that SCSS files follow all the required rules

#### Pipeline:
- run `npm run pipeline:light` to check everything together
- run `npm run pipeline` to emulate CI pipeline

#### Auto generated documentation

- run `npm run analysis:docs` to generate source code documentation via [Compodoc](https://github.com/compodoc/compodoc)
  > Documentation is located in `./reports/documentation/`

#### Bundle analysis

- run `npm run analysis:bundle` to explore the bundle in detail via [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)
  > Report will be available at http://127.0.0.1:8888

---

## Suggested tools and extensions

[Visual Studio Code](https://code.visualstudio.com) - recommended cross-platform code editor. Suggested extensions, tasks, debug configuration and commonly shared settings for Visual Studio Code will be automatically loaded from `./.vscode/`

- [Angular Language Service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template#review-details) - provides a rich editing experience for Angular templates
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) - basic spell checker that works well with camelCase code
  > List of unique words valid for the project located in `./.vscode/settings.json` - `"cSpell.words"` array
- [Angular template formatter](https://marketplace.visualstudio.com/items?itemName=stringham.angular-template-formatter) - put each HTML attribute on its own line, unless there is a single attribute declared on the HTML tag
  > Use `"Shift + Alt + F"` shortcut to apply formatting
- [HTMLHint](https://marketplace.visualstudio.com/items?itemName=mkaufman.HTMLHint) - HTML static analysis tool
  > Config and custom rules located in `./node_modules/@ims/htmlhint/`, covers all cases of `Angular template formatter`

  - > **custom-alt-require** rule created to verify that alt (or Angular [alt]) attribute of an <img> element is presented and alt attribute of area[href] and input[type=image] has a value

  - > **custom-attribute-wrapping** rule created to check that all HTML files formatted in accordance with `Angular template formatter`

  - > **custom-id-class-value** rule created to ignoring Angular binding values in template and check BEM-style naming for CSS selectors

  > Rules from `htmlhint.json` must exactly match `./vscode/settings.json` - `"htmlhint.options"` array

- [CSScomb](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-csscomb) - coding style formatter for CSS/SCSS
  > Use `"F1" -> "CSSComb: Format styles"` to apply formatting, or create your own shortcut

  > All related rules located in `./.vscode/settings.json` - `"csscomb.preset"` object
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=hex-ci.stylelint-plus) - CSS/SCSS static analysis tool
  > All related rules located in `./.stylelintrc.json`, covers most cases of `CSSComb`

  - > For converting `CSSComb` rules to rules of `Stylelint` were used the following links:<br>
  [CSSComb Compatibility Issue](https://github.com/stylelint/stylelint/issues/1556)<br>
  [Stylelint Order](https://github.com/hudochenkov/stylelint-order)

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - TS static analysis tool
  > Run `npm run eslint:check` to make sure that TS files follow all the required rules

  > Run `npm run eslint:fix` in order fo fix all auto fixable issues

- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) - a plugin for `.editorconfig`

## Known issues
> Search through project by `KNOWN-ISSUE` tag

- if after cloning the repository some files are highlighted with this error `Expected linebreak to be 'LF' (linebreak-style)eslint(1)`
  > Change your Git setting: `git config --global core.autocrlf input`

## Refactor
> Search through project by `TODO` tag
