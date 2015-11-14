import React from 'react';
import getNextId from './getNextId';

class Checkbox extends React.Component {

  constructor(...args) {
		super(...args);
		this.state = {
			id: this.context.labelId || this.props.id || getNextId('checkbox_')
		};
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
    const {className, disabled, required, title} = this.props;
    return (
	     <input 	className={className}
								disabled={disabled}
            		id={id}
            		type="checkbox"
            		title={title}
            		required={required}
            		checkedLink={valueLink}
            	/>
          );
  }
};

Checkbox.propTypes = {
  className: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  id: React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  required: React.PropTypes.bool,
  title: React.PropTypes.string
};

Checkbox.defaultProps = {
  disabled: false,
  required: false
};

Checkbox.contextTypes = {
  labelId: React.PropTypes.string,
  updateFormData: React.PropTypes.func,
  getFormData: React.PropTypes.func
};

export default Checkbox;
