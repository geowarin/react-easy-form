import React from 'react';
import getNextId from './getNextId';

class Checkbox extends React.Component {

  componentDidMount() {
    const hasInitialValue = this.context.getFormData(this.props.name) != undefined;
    if (!hasInitialValue) {
      this.context.updateFormData(this.props.name, false);
    }
  }

  render() {
    const valueLink = {
      value: this.context.getFormData(this.props.name),
      requestChange: (newValue) => this.context.updateFormData(this.props.name, newValue)
    };

    const id = this.context.id || this.props.id;
    return (
	<input 	className={this.props.className}
								disabled={this.props.disabled}
		id={id}
		type="checkbox"
		checkedLink={valueLink}
	/>);
  }
};

Checkbox.propTypes = {
  id: React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  disabled: React.PropTypes.bool
};

Checkbox.defaultProps = {
  disabled: false,
  id: getNextId('checkbox_')
};

Checkbox.contextTypes = {
  updateFormData: React.PropTypes.func,
  getFormData: React.PropTypes.func
};

export default Checkbox;
