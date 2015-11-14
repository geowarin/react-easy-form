import React from 'react';
import getNextId from './getNextId';

class TextInput extends React.Component {

  constructor(...args) {
    super(...args);
    this.state = {
      id: this.context.labelId || this.props.id || getNextId('select_')
    };
  }

  componentDidMount() {
    const hasInitialValue = this.context.getFormData(this.props.name) != undefined;
    if (!hasInitialValue) {
      this.context.updateFormData(this.props.name, '');
    }
  }

  render() {
    const valueLink = {
      value: this.context.getFormData(this.props.name),
      requestChange: (newValue) => this.context.updateFormData(this.props.name, newValue)
    };

    const {disabled, required, type, placeholder, pattern, title, className} = this.props;
    const {id} = this.state;
    return (
       <input disabled={disabled}
              id={id}
    	        title={title}
              pattern={pattern}
              placeholder={placeholder}
              className={className}
              valueLink={valueLink}
              required={required}
              type={type} />
         );
  }
}

TextInput.propTypes = {
  className: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  id: React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  pattern: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  required: React.PropTypes.bool,
  title: React.PropTypes.string,
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
  labelId: React.PropTypes.string,
  updateFormData: React.PropTypes.func,
  getFormData: React.PropTypes.func
};

export default TextInput;
