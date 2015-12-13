'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

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