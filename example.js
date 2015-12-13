require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var App = (function (_Component) {
	_inherits(App, _Component);

	function App(props, context) {
		_classCallCheck(this, App);

		_get(Object.getPrototypeOf(App.prototype), 'constructor', this).call(this, props, context);
		this.state = {};
	}

	_createClass(App, [{
		key: 'handleSubmit',
		value: function handleSubmit(formData) {
			this.setState({
				formData: formData
			});
			this.refs.form.clear();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this = this;

			return _react2['default'].createElement(
				_reactEasyForm.Form,
				{ ref: 'form', className: 'pure-form pure-form-aligned', initialData: initialData, onSubmit: function (data) {
						return _this.handleSubmit(data);
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
					),
					_react2['default'].createElement(
						'div',
						{ style: { marginTop: "20px" } },
						JSON.stringify(this.state.formData)
					)
				)
			);
		}
	}]);

	return App;
})(_react.Component);

_reactDom2['default'].render(_react2['default'].createElement(App, null), document.getElementById('app'));

},{"react":undefined,"react-dom":undefined,"react-easy-form":undefined}]},{},[1]);
