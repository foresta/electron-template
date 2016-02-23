/*
var React = require("react");
var ReactDOM = require("react-dom");
var Main = require("./main.jsx");
*/


import React from 'react'
import ReactDOM from 'react-dom'
import Main from './main.jsx'

const rootDOM = document.getElementById("root");
ReactDOM.render(React.createElement(Main), rootDOM);


/*
const incr = (a = 1) => { a + 1;}
var num = incr(3);
/*
const rootDOM = document.getElementById("root");
rootDOM.innerText = "hello!";
*/
/*
var root = document.getElementById("root");
root.innerText = "hello" + num;
*/
