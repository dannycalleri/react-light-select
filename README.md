# react-light-select

**react-light-select** is a ReactJS **lightweight selectbox** component (~3kb minified) that lets you define your options and a callback for when the selection changes.

The elements list is your browser's default and works on every browser and device, it doesn't define a custom elements list.


## How to use it

Simply run

    npm install react-light-select --save

and require it with your favorite bundler (currently tested it with **Browserify**).

Example:

    var ReactLightSelect = require('react-light-select');

or if you're using **ES6**

    import ReactLightSelect from 'react-light-select';

Then use it like this (this is JSX, but you are free to use it in plain JS):

    <ReactLightSelect dataCallback={data} />


## How to build it

The component is written in **ES6** and **JSX**, so you need to compile it first.

Clone the project, run

    npm install

and then open up the test environment with the command

    gulp serve

This command will open a web page with live reload so you can develop and see the changes in realtime.


## Contributing

Contributions are welcome!

Fork the project and send a pull request when you're ready.
