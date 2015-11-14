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