# Baseline Node modules

* Loading
  * General: babel-core, babel-loader, babel-preset-es2015
  * UI: webpack, babel-preset-react, webpack-dev-server
* Testing
  * General: chai, mocha
  * UI: jsdom
* Favorite libraries:
  * All
    * immutable (test: chai-immutable),
  * Clients
    * react, react-dom, react-hot-loader
  
# Files

## Clients

* dist/index.html
* src/index.js (why?)

# Presets

## `packages.json`

* A script for running tests, e.g., `"test": "mocha --compilers js:babel-core/register --require ./test/test_helper.js 'test/**/*.@(js|jsx)'"`
* I don't do this but a watch script that runs tests on a file watch, e.g., `"test:watch": "npm run test -- --watch"`

## Webpack

Goes to `webpack.config.js`

* Choose ES5 or 6
* Read JSX files if necessary
* Set up aliases for `run` and `test` if you like.
