/**
 * Created by daniele on 13/01/16.
 */

// main.js
import React from 'react';
import ReactDOM from 'react-dom';
import ReactLightSelect from './react-light-select.jsx';

function data(cb)
{
    var options = [
        {label:"Option A", value:"a"},
        {label:"Option B", value:"b"},
        {label:"Option C", value:"c"}
    ];

    cb(options);
}

ReactDOM.render((
    <ReactLightSelect dataCallback={data} />
), document.getElementById('app'));
