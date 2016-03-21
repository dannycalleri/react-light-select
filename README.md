# react-light-select

**react-light-select** is a **lightweight ReactJS selectbox** component (**~3kb** minified) that lets you define your options and a callback for when the selection changes.

The elements list is your browser's default and works on **every browser and device**, it doesn't define a custom elements list.



## Install

Simply **run**

    npm install react-light-select --save

and **require it** with your favorite bundler (currently tested with **Browserify**).

Don't forget to **include the provided CSS** (or write your own)

Example:

    var ReactLightSelect = require('react-light-select');

or if you're using **ES6**

    import ReactLightSelect from 'react-light-select';

**Include the CSS** in your HTML (change the path to your needs):

    <link rel="stylesheet" href="../node_modules/react-light-select/examples/react-light-select.css" media="screen">

Then use it like this (JSX style, but you are free to use it in plain JS):

    <ReactLightSelect dataCallback={ this.getData } onSelectChange={ this.onSelect } />


## Configuration

The most basic select must have both **dataCallaback** and **onSelectChange** props, for example:

    <ReactLightSelect dataCallback={ this.getData } onSelectChange={ this.onSelect } />
    
Following there's a complete list of props you can pass to the component.
    
### Props   

#### `dataCallback`

type: `function`

This is needed to populate the selectbox.

Example:

    getSelectboxData(cb)
    {
        var options = [
            {label:"US", value:"us"},
            {label:"IT", value:"it"}
        ];

        cb(options);
    }

#### `onSelectChange`

type: `function`

This gets called when a the user selects a new option.


## Build

The component is written in **ES6** and **JSX**, so you need to compile it first.

Clone the project, run

    npm install

and then open up the test environment with the command

    gulp serve

This command will open a web page with live reload so you can develop and see the changes in realtime.


## Contribute

Contributions are welcome!

Fork the project and send a pull request when you're ready.
