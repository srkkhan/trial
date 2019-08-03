// This file is not transpiled , so use CommonJS and ES5

// Register babel to transpile before our test run
require('babel-register')();

// Disable webpack feature that MOCHA doesn't understand
require.extensions['.css']=function(){};
