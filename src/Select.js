import React from 'react';
import getNextId from './getNextId';

class Select extends React.Component {

  constructor(...args) {
    super(...args);
    this.state = {
      id: getNextId('select_')
    };
  }

  componentDidMount() {
    const hasInitialValue = this.context.getFormData(this.props.name) != undefined;
    if (this.props.values.length > 0 && !hasInitialValue) {
      this.context.updateFormData(this.props.name, this.props.values[0])
    }
  }

  render() {
    const valueLink = {
      value: this.context.getFormData(this.props.name),
      requestChange: (newValue) => this.context.updateFormData(this.props.name, newValue)
    };

    const {values} = this.props;
    let options = null;
    if (Array.isArray(values)) {
      options = values.map((value, index) => {
	return (<option key={index} value={value}>{value}</option>)
      });
    } else {
			options = [];
			const keys = Object.keys(values);
			for (let key of keys) {
				const value = values[key];
				options.push(<option key={key} value={key}>{value}</option>)
			}
    }

    const labelElement = this.props.label ? <label>{this.props.label}</label> : null;
    return (
      <div>
	{labelElement}
	<select className={this.props.classname}
		disabled={this.props.disabled}
		valueLink={valueLink}
		id={this.state.id}>
	  {options}
	</select>
      </div>
    );
  }
};

Select.propTypes = {
	values: React.PropTypes.oneOfType([
		React.PropTypes.array.isRequired,
		React.PropTypes.object.isRequired
	]),
	name: React.PropTypes.string.isRequired,
	disabled: React.PropTypes.bool,
	label: React.PropTypes.string
};

Select.defaultProps = {
	disabled: false,
	label: null
};

Select.contextTypes = {
	elementsInRow: React.PropTypes.number,
	updateFormData: React.PropTypes.func,
	getFormData: React.PropTypes.func
};

export default Select;
