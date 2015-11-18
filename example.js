require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var _require = require('react-easy-form');

var Form = _require.Form;
var TextInput = _require.TextInput;
var Checkbox = _require.Checkbox;
var Select = _require.Select;
var Label = _require.Label;

var values = ['1', '2', '3'];
var valuesMap = {
	1: 'one',
	2: 'two',
	3: 'three'
};

var initialData = {
	firstName: 'Jean',
	select: '2',
	selectMap: '2'
};

var LabeledInput = function LabeledInput(props) {
	return React.createElement(
		'div',
		{ className: 'pure-control-group' },
		React.createElement(
			Label,
			{ value: props.label, position: 'before' },
			React.createElement(TextInput, props)
		)
	);
};

var LabeledSelect = function LabeledSelect(props) {
	return React.createElement(
		'div',
		{ className: 'pure-control-group' },
		React.createElement(
			Label,
			{ value: props.label, position: 'before' },
			React.createElement(Select, props)
		)
	);
};

var App = function App() {
	return React.createElement(
		Form,
		{ className: 'pure-form pure-form-aligned', initialData: initialData, onSubmit: function (data) {
				return console.log(data);
			} },
		React.createElement(
			'fieldset',
			null,
			React.createElement(LabeledInput, { label: 'First Name', name: 'firstName', required: true }),
			React.createElement(LabeledInput, { label: 'E-mail', placeholder: 'Enter your email', name: 'email', type: 'email', required: true }),
			React.createElement(LabeledInput, { label: 'Country code', name: 'country', required: true,
				pattern: '[A-Za-z]{3}', title: 'Three letter country code' }),
			React.createElement(LabeledSelect, { label: 'Select from array', name: 'select', values: values }),
			React.createElement(LabeledSelect, { label: 'Select from object', name: 'selectMap', values: valuesMap }),
			React.createElement(
				'div',
				{ className: 'pure-controls' },
				React.createElement(
					Label,
					{ className: 'pure-checkbox' },
					React.createElement(Checkbox, { name: 'agree', title: 'Accept TOS', required: true }),
					' Agree'
				),
				React.createElement(
					'button',
					{ className: 'pure-button pure-button-primary', type: 'submit' },
					'Submit'
				)
			)
		)
	);
};

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

},{"react":undefined,"react-dom":undefined,"react-easy-form":undefined}]},{},[1]);
