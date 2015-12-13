import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Form, TextInput, Checkbox, Select, Label} from 'react-easy-form';

const values = ['1', '2', '3'];
const valuesMap = {
	1: 'one',
	2: 'two',
	3: 'three'
};

const initialData = {
	firstName: 'Jean',
	select: '2',
	selectMap: '2'
};

const LabeledInput = (props) => (
		<div className="pure-control-group">
			<Label value={props.label} position="before">
				<TextInput {...props}/>
			</Label>
		</div>);

const LabeledSelect = (props) => (
		<div className="pure-control-group">
			<Label value={props.label} position="before">
				<Select {...props}/>
			</Label>
		</div>);

class App extends Component {

	constructor(props, context) {
		super(props, context);
		this.state = {};
	}

	handleSubmit(formData) {
		this.setState({
			formData
		})
		this.refs.form.clear();
	}

	render() {
		return (
			<Form ref="form" className="pure-form pure-form-aligned" initialData={initialData} onSubmit={(data) => this.handleSubmit(data)}>
				<fieldset>
					<LabeledInput label="First Name" name="firstName" required/>
					<LabeledInput label="E-mail" placeholder="Enter your email" name="email" type="email" required/>

					<LabeledInput label="Country code" name="country" required
												pattern="[A-Za-z]{3}" title="Three letter country code" />

					<LabeledSelect label="Select from array" name="select" values={values}/>
					<LabeledSelect label="Select from object" name="selectMap" values={valuesMap}/>

					<div className="pure-controls">
						<Label className="pure-checkbox">
							<Checkbox name="agree" title="Accept TOS" required/> Agree
						</Label>

						<button className="pure-button pure-button-primary" type="submit">Submit</button>
					</div>

					<div style={{marginTop: "20px"}}>
						{JSON.stringify(this.state.formData)}
					</div>
				</fieldset>
			</Form>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
