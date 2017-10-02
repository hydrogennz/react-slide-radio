#!/bin/bash/
npm init
npm install react react-dom --save-dev
npm install babel-core babel-loader babel-cli babel-polyfill webpack --save-dev
npm install babel-preset-env babel-preset-reactnp --save-dev
npm install babel-plugin-transform-class-properties babel-plugin-transform-object-rest-spread babel-plugin-transform-react-jsx --save-dev
npm install css-loader less less-loader style-loader --save-dev

# To run compile
npm run build

# Now go to react-slide-radio/build/index.html to view the example