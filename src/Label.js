import React from 'react';
import getNextId from './getNextId';

class Label extends React.Component {

	constructor(...args) {
		super(...args);
		this.state = {
			id: this.props.id || getNextId('input_')
		};
	}

	getChildContext() {
    return {
      labelId: this.state.id
    };
  }

  render() {
		const {id} = this.state;
    const {value, className} = this.props;
		if (this.props.position === 'before') {
			return (
				<div>
					<label className={className} htmlFor={id}>{value}</label>
					{this.props.children}
				</div>
			);
		}
		if (this.props.position === 'after') {
			return (
				<div>
					{this.props.children}
					<label className={className} htmlFor={id}>{value}</label>
				</div>
			);
		}
		return (
			<label className={className}>{value}
				{this.props.children}
			</label>
		);
  }
};

Label.propTypes = {
	children: React.PropTypes.node,
	className: React.PropTypes.string,
  id: React.PropTypes.string,
	position: (props, propName) => {
    if (!/before|after|around/.test(props[propName])) {
      return new Error('Label position must be either before, after or around');
    }
  },
	value: React.PropTypes.string
};

Label.defaultProps = {
	position: 'around'
};

Label.childContextTypes = {
  labelId: React.PropTypes.string
};

export default Label;
