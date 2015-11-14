import React from 'react';
import getNextId from './getNextId';

class TextInput extends React.Component {

  componentDidMount() {
    const hasInitialValue = this.context.getFormData(this.props.name) != undefined;
    if (!hasInitialValue) {
      this.context.updateFormData(this.props.name, '');
    }
  }

  constructor(...args) {
    super(...args);
    this.state = {
      id: getNextId('input_')
    };
  }

  render() {
    const valueLink = {
      value: this.context.getFormData(this.props.name),
      requestChange: (newValue) => this.context.updateFormData(this.props.name, newValue)
    };

    const {label, required, type} = this.props;
    const labelElement = label ? <label htmlFor={this.state.id}>{label}</label> : null;
    return (
      <div>
	{labelElement}
	<input disabled={this.props.disabled}
	       id={this.state.id}
	       type="text"
	       className={this.props.className}
	       valueLink={valueLink}
	       required={required}
	       type={type}
	/>
      </div>);
  }
}

TextInput.propTypes = {
  label: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  name: React.PropTypes.string.isRequired,
  required: React.PropTypes.bool,
  type: (props, propName) => {
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
  updateFormData: React.PropTypes.func,
  getFormData: React.PropTypes.func
};

export default TextInput;
