import React from 'react';
import getNextId from './getNextId';

class Checkbox extends React.Component {

  componentDidMount() {
    const hasInitialValue = this.context.getFormData(this.props.name) != undefined;
    if (!hasInitialValue) {
      this.context.updateFormData(this.props.name, false);
    }
  }

  constructor(...args) {
    super(...args);
    this.state = {
      id: getNextId('checkbox_')
    };
  }

  render() {
    const valueLink = {
      value: this.context.getFormData(this.props.name),
      requestChange: (newValue) => this.context.updateFormData(this.props.name, newValue)
    };

    const {label} = this.props;
    const labelElement = label ? <label htmlFor={this.state.id}>{label}</label> : null;
    return (
      <div>
				{labelElement}
	<input 	className={this.props.className}
								disabled={this.props.disabled}
		id={this.state.id}
		type="checkbox"
		checkedLink={valueLink}
	/>
      </div>);
  }
};

Checkbox.propTypes = {
  name: React.PropTypes.string.isRequired,
  label: React.PropTypes.string,
  disabled: React.PropTypes.bool
};

Checkbox.defaultProps = {
  disabled: false
};

Checkbox.contextTypes = {
  updateFormData: React.PropTypes.func,
  getFormData: React.PropTypes.func
};

export default Checkbox;
