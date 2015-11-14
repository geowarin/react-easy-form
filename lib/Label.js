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