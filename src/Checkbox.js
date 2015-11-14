import React from 'react';
import getNextId from './getNextId';

class Checkbox extends React.Component {

  constructor(...args) {
		super(...args);
		this.state = {
			id: this.context.labelId || this.props.id || getNextId('checkbox_')
		}
	}

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

    const {id} = this.state;
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
  disabled: false
};

Checkbox.contextTypes = {
  labelId: React.PropTypes.string,
  updateFormData: React.PropTypes.func,
  getFormData: React.PropTypes.func
};

export default Checkbox;
