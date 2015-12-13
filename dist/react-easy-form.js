(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ReactEasyForm = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _getNextId = require('./getNextId');

var _getNextId2 = _interopRequireDefault(_getNextId);

var Checkbox = (function (_React$Component) {
  _inherits(Checkbox, _React$Component);

  function Checkbox() {
    _classCallCheck(this, Checkbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _get(Object.getPrototypeOf(Checkbox.prototype), 'constructor', this).apply(this, args);
    this.state = {
      id: this.context.labelId || this.props.id || (0, _getNextId2['default'])('checkbox_')
    };
  }

  _createClass(Checkbox, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var hasInitialValue = this.context.getFormData(this.props.name) != undefined;
      if (!hasInitialValue) {
        this.context.updateFormData(this.props.name, false);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      var valueLink = {
        value: this.context.getFormData(this.props.name),
        requestChange: function requestChange(newValue) {
          return _this.context.updateFormData(_this.props.name, newValue);
        }
      };

      var id = this.state.id;
      var _props = this.props;
      var className = _props.className;
      var disabled = _props.disabled;
      var required = _props.required;
      var title = _props.title;

      return _react2['default'].createElement('input', { className: className,
        disabled: disabled,
        id: id,
        type: 'checkbox',
        title: title,
        required: required,
        checkedLink: valueLink
      });
    }
  }]);

  return Checkbox;
})(_react2['default'].Component);

;

Checkbox.propTypes = {
  className: _react2['default'].PropTypes.string,
  disabled: _react2['default'].PropTypes.bool,
  id: _react2['default'].PropTypes.string,
  name: _react2['default'].PropTypes.string.isRequired,
  required: _react2['default'].PropTypes.bool,
  title: _react2['default'].PropTypes.string
};

Checkbox.defaultProps = {
  disabled: false,
  required: false
};

Checkbox.contextTypes = {
  labelId: _react2['default'].PropTypes.string,
  updateFormData: _react2['default'].PropTypes.func,
  getFormData: _react2['default'].PropTypes.func
};

exports['default'] = Checkbox;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./getNextId":7}],2:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _noop = require('./noop');

var _noop2 = _interopRequireDefault(_noop);

var Form = (function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form() {
    _classCallCheck(this, Form);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _get(Object.getPrototypeOf(Form.prototype), 'constructor', this).apply(this, args);
    this.onSubmit = this._onSubmit.bind(this);
    this.state = {
      formData: this.props.initialData
    };
  }

  _createClass(Form, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        updateFormData: this.updateFormData.bind(this),
        getFormData: this.getFormData.bind(this)
      };
    }
  }, {
    key: 'updateFormData',
    value: function updateFormData(inputName, value) {
      var formData = this.state.formData;
      formData[inputName] = value;
      this.setState({
        formData: formData
      });
    }

    // http://stackoverflow.com/questions/18774821/submit-event-does-not-fire-if-submit-initiated-programatically
  }, {
    key: 'submit',
    value: function submit() {
      var form = this.refs.form;
      var button = form.ownerDocument.createElement('input');
      button.style.display = 'none';
      button.type = 'submit';
      form.appendChild(button).click();
      form.removeChild(button);
    }
  }, {
    key: 'getFormData',
    value: function getFormData(inputName) {
      return this.state.formData[inputName];
    }
  }, {
    key: '_onSubmit',
    value: function _onSubmit(event) {
      event.preventDefault();
      this.props.onSubmit(this.state.formData);
      return false;
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.setState({
        formData: {}
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'form',
        { ref: 'form', className: this.props.className, onSubmit: this.onSubmit },
        this.props.children
      );
    }
  }]);

  return Form;
})(_react2['default'].Component);

Form.propTypes = {
  children: _react2['default'].PropTypes.node,
  className: _react2['default'].PropTypes.string,
  initialData: _react2['default'].PropTypes.object,
  onSubmit: _react2['default'].PropTypes.func
};

Form.defaultProps = {
  initialData: {},
  onSubmit: _noop2['default']
};

Form.childContextTypes = {
  updateFormData: _react2['default'].PropTypes.func,
  getFormData: _react2['default'].PropTypes.func
};

exports['default'] = Form;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./noop":8}],3:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _getNextId = require('./getNextId');

var _getNextId2 = _interopRequireDefault(_getNextId);

var Label = (function (_React$Component) {
	_inherits(Label, _React$Component);

	function Label() {
		_classCallCheck(this, Label);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		_get(Object.getPrototypeOf(Label.prototype), 'constructor', this).apply(this, args);
		this.state = {
			id: this.props.id || (0, _getNextId2['default'])('input_')
		};
	}

	_createClass(Label, [{
		key: 'getChildContext',
		value: function getChildContext() {
			return {
				labelId: this.state.id
			};
		}
	}, {
		key: 'render',
		value: function render() {
			var id = this.state.id;
			var _props = this.props;
			var value = _props.value;
			var className = _props.className;

			if (this.props.position === 'before') {
				return _react2['default'].createElement(
					'div',
					null,
					_react2['default'].createElement(
						'label',
						{ className: className, htmlFor: id },
						value
					),
					this.props.children
				);
			}
			if (this.props.position === 'after') {
				return _react2['default'].createElement(
					'div',
					null,
					this.props.children,
					_react2['default'].createElement(
						'label',
						{ className: className, htmlFor: id },
						value
					)
				);
			}
			return _react2['default'].createElement(
				'label',
				{ className: className },
				value,
				this.props.children
			);
		}
	}]);

	return Label;
})(_react2['default'].Component);

;

Label.propTypes = {
	children: _react2['default'].PropTypes.node,
	className: _react2['default'].PropTypes.string,
	id: _react2['default'].PropTypes.string,
	position: function position(props, propName) {
		if (!/before|after|around/.test(props[propName])) {
			return new Error('Label position must be either before, after or around');
		}
	},
	value: _react2['default'].PropTypes.string
};

Label.defaultProps = {
	position: 'around'
};

Label.childContextTypes = {
	labelId: _react2['default'].PropTypes.string
};

exports['default'] = Label;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./getNextId":7}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Form = require('./Form');

var _Form2 = _interopRequireDefault(_Form);

var _TextInput = require('./TextInput');

var _TextInput2 = _interopRequireDefault(_TextInput);

var _Checkbox = require('./Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Select = require('./Select');

var _Select2 = _interopRequireDefault(_Select);

var _Label = require('./Label');

var _Label2 = _interopRequireDefault(_Label);

exports.Form = _Form2['default'];
exports.TextInput = _TextInput2['default'];
exports.Checkbox = _Checkbox2['default'];
exports.Select = _Select2['default'];
exports.Label = _Label2['default'];

},{"./Checkbox":1,"./Form":2,"./Label":3,"./Select":5,"./TextInput":6}],5:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _getNextId = require('./getNextId');

var _getNextId2 = _interopRequireDefault(_getNextId);

var isEmpty = function isEmpty(obj) {
  return Object.keys(obj).length === 0;
};

var Select = (function (_React$Component) {
  _inherits(Select, _React$Component);

  function Select() {
    _classCallCheck(this, Select);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _get(Object.getPrototypeOf(Select.prototype), 'constructor', this).apply(this, args);
    this.state = {
      id: this.context.labelId || this.props.id || (0, _getNextId2['default'])('select_')
    };
  }

  _createClass(Select, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var hasInitialValue = this.context.getFormData(this.props.name) != undefined;
      if (!isEmpty(this.props.values) && !hasInitialValue) {
        this.context.updateFormData(this.props.name, this.props.values[0]);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      var valueLink = {
        value: this.context.getFormData(this.props.name),
        requestChange: function requestChange(newValue) {
          return _this.context.updateFormData(_this.props.name, newValue);
        }
      };

      var values = this.props.values;

      var options = [];
      if (Array.isArray(values)) {
        options = values.map(function (value, index) {
          return _react2['default'].createElement(
            'option',
            { key: index, value: value },
            value
          );
        });
      } else {
        var keys = Object.keys(values);
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var key = _step.value;

            var value = values[key];
            options.push(_react2['default'].createElement(
              'option',
              { key: key, value: key },
              value
            ));
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator['return']) {
              _iterator['return']();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }

      var id = this.state.id;
      var _props = this.props;
      var className = _props.className;
      var disabled = _props.disabled;

      return _react2['default'].createElement(
        'select',
        { className: className,
          disabled: disabled,
          valueLink: valueLink,
          id: id },
        options
      );
    }
  }]);

  return Select;
})(_react2['default'].Component);

;

Select.propTypes = {
  className: _react2['default'].PropTypes.string,
  disabled: _react2['default'].PropTypes.bool,
  id: _react2['default'].PropTypes.string,
  name: _react2['default'].PropTypes.string.isRequired,
  values: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.array.isRequired, _react2['default'].PropTypes.object.isRequired])
};

Select.defaultProps = {
  disabled: false
};

Select.contextTypes = {
  labelId: _react2['default'].PropTypes.string,
  updateFormData: _react2['default'].PropTypes.func,
  getFormData: _react2['default'].PropTypes.func
};

exports['default'] = Select;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./getNextId":7}],6:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _getNextId = require('./getNextId');

var _getNextId2 = _interopRequireDefault(_getNextId);

var TextInput = (function (_React$Component) {
  _inherits(TextInput, _React$Component);

  function TextInput() {
    _classCallCheck(this, TextInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _get(Object.getPrototypeOf(TextInput.prototype), 'constructor', this).apply(this, args);
    this.state = {
      id: this.context.labelId || this.props.id || (0, _getNextId2['default'])('select_')
    };
  }

  _createClass(TextInput, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var hasInitialValue = this.context.getFormData(this.props.name) != undefined;
      if (!hasInitialValue) {
        this.context.updateFormData(this.props.name, '');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      var valueLink = {
        value: this.context.getFormData(this.props.name),
        requestChange: function requestChange(newValue) {
          return _this.context.updateFormData(_this.props.name, newValue);
        }
      };

      var _props = this.props;
      var disabled = _props.disabled;
      var required = _props.required;
      var type = _props.type;
      var placeholder = _props.placeholder;
      var pattern = _props.pattern;
      var title = _props.title;
      var className = _props.className;
      var id = this.state.id;

      return _react2['default'].createElement('input', { disabled: disabled,
        id: id,
        title: title,
        pattern: pattern,
        placeholder: placeholder,
        className: className,
        valueLink: valueLink,
        required: required,
        type: type });
    }
  }]);

  return TextInput;
})(_react2['default'].Component);

TextInput.propTypes = {
  className: _react2['default'].PropTypes.string,
  disabled: _react2['default'].PropTypes.bool,
  id: _react2['default'].PropTypes.string,
  name: _react2['default'].PropTypes.string.isRequired,
  pattern: _react2['default'].PropTypes.string,
  placeholder: _react2['default'].PropTypes.string,
  required: _react2['default'].PropTypes.bool,
  title: _react2['default'].PropTypes.string,
  type: function type(props, propName) {
    if (!/email|text|url|password/.test(props[propName])) {
      return new Error('TextInput type must be one of email, text, url or password.');
    }
  }
};

TextInput.defaultProps = {
  disabled: false,
  required: false,
  type: 'text'
};

TextInput.contextTypes = {
  labelId: _react2['default'].PropTypes.string,
  updateFormData: _react2['default'].PropTypes.func,
  getFormData: _react2['default'].PropTypes.func
};

exports['default'] = TextInput;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./getNextId":7}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = getNextId;
var currentId = 1;

function getNextId() {
  var prefix = arguments.length <= 0 || arguments[0] === undefined ? 'id_' : arguments[0];

  return prefix + currentId++;
}

module.exports = exports['default'];

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function () {};

;
module.exports = exports["default"];

},{}]},{},[4])(4)
});