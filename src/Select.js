import React from 'react';
import getNextId from './getNextId';

class Select extends React.Component {

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

    const id = this.context.id || this.props.id || this.state.id;
    return (
	<select className={this.props.classname}
		disabled={this.props.disabled}
		valueLink={valueLink}
		id={id}>
	  {options}
	</select>
    );
  }
};

Select.propTypes = {
  id: React.PropTypes.string,
	values: React.PropTypes.oneOfType([
		React.PropTypes.array.isRequired,
		React.PropTypes.object.isRequired
	]),
	name: React.PropTypes.string.isRequired,
	disabled: React.PropTypes.bool
};

Select.defaultProps = {
	disabled: false,
	label: null,
  id: getNextId('select_')
};

Select.contextTypes = {
	id: React.PropTypes.string,
	updateFormData: React.PropTypes.func,
	getFormData: React.PropTypes.func
};

export default Select;
