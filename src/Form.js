import React from 'react';
import noop from './noop';

class Form extends React.Component {

  constructor(...args) {
    super(...args);
    this.onSubmit = this._onSubmit.bind(this);
    this.state = {
      formData: this.props.initialData
    };
  }

  getChildContext() {
    return {
      updateFormData: this.updateFormData.bind(this),
      getFormData: this.getFormData.bind(this)
    };
  }

  updateFormData(inputName, value) {
    let formData = this.state.formData;
    formData[inputName] = value;
    this.setState({
      formData
    });
  }

  // http://stackoverflow.com/questions/18774821/submit-event-does-not-fire-if-submit-initiated-programatically
  submit() {
    const form = this.refs.form;
    const button = form.ownerDocument.createElement('input');
    button.style.display = 'none';
    button.type = 'submit';
    form.appendChild(button).click();
    form.removeChild(button);
  }

  getFormData(inputName) {
    return this.state.formData[inputName];
  }

  _onSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.formData);
    return false;
  }

  clear() {
    this.setState({
      formData: {}
    });
  }

  render() {
    return (
      <form ref="form" className={this.props.className} onSubmit={this.onSubmit}>
	       {this.props.children}
      </form>
    );
  }
}

Form.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  initialData: React.PropTypes.object,
  onSubmit: React.PropTypes.func
};

Form.defaultProps = {
  initialData: {},
  onSubmit: noop
};

Form.childContextTypes = {
  updateFormData: React.PropTypes.func,
  getFormData: React.PropTypes.func
};

export default Form;
