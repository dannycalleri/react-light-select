(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactLightSelect = require('./react-light-select.jsx');

var _reactLightSelect2 = _interopRequireDefault(_reactLightSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_reactLightSelect2.default, null), document.getElementById('app')); /**
                                                                                                                             * Created by daniele on 13/01/16.
                                                                                                                             */

// main.js

},{"./react-light-select.jsx":2,"react":undefined,"react-dom":undefined}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//import React from 'react';

var ReactLightSelect //extends React.Component
= function () {
    function ReactLightSelect() {
        _classCallCheck(this, ReactLightSelect);
    }

    _createClass(ReactLightSelect, [{
        key: "getText",

        // render()
        // {
        //     return (
        //         <div>
        //             This is a selectbox
        //         </div>
        //     )
        // }
        value: function getText() {
            return "Danny";
        }
    }]);

    return ReactLightSelect;
}();

exports.default = ReactLightSelect;

},{}]},{},[1]);
