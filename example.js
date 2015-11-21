require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactEasyForm = require('react-easy-form');

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
	return _react2['default'].createElement(
		'div',
		{ className: 'pure-control-group' },
		_react2['default'].createElement(
			_reactEasyForm.Label,
			{ value: props.label, position: 'before' },
			_react2['default'].createElement(_reactEasyForm.TextInput, props)
		)
	);
};

var LabeledSelect = function LabeledSelect(props) {
	return _react2['default'].createElement(
		'div',
		{ className: 'pure-control-group' },
		_react2['default'].createElement(
			_reactEasyForm.Label,
			{ value: props.label, position: 'before' },
			_react2['default'].createElement(_reactEasyForm.Select, props)
		)
	);
};

var App = function App() {
	return _react2['default'].createElement(
		_reactEasyForm.Form,
		{ className: 'pure-form pure-form-aligned', initialData: initialData, onSubmit: function (data) {
				return console.log(data);
			} },
		_react2['default'].createElement(
			'fieldset',
			null,
			_react2['default'].createElement(LabeledInput, { label: 'First Name', name: 'firstName', required: true }),
			_react2['default'].createElement(LabeledInput, { label: 'E-mail', placeholder: 'Enter your email', name: 'email', type: 'email', required: true }),
			_react2['default'].createElement(LabeledInput, { label: 'Country code', name: 'country', required: true,
				pattern: '[A-Za-z]{3}', title: 'Three letter country code' }),
			_react2['default'].createElement(LabeledSelect, { label: 'Select from array', name: 'select', values: values }),
			_react2['default'].createElement(LabeledSelect, { label: 'Select from object', name: 'selectMap', values: valuesMap }),
			_react2['default'].createElement(
				'div',
				{ className: 'pure-controls' },
				_react2['default'].createElement(
					_reactEasyForm.Label,
					{ className: 'pure-checkbox' },
					_react2['default'].createElement(_reactEasyForm.Checkbox, { name: 'agree', title: 'Accept TOS', required: true }),
					' Agree'
				),
				_react2['default'].createElement(
					'button',
					{ className: 'pure-button pure-button-primary', type: 'submit' },
					'Submit'
				)
			)
		)
	);
};

_reactDom2['default'].render(_react2['default'].createElement(App, null), document.getElementById('app'));

},{"react":undefined,"react-dom":undefined,"react-easy-form":undefined}]},{},[1]);
