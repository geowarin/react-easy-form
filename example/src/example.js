var React = require('react');
var ReactDOM = require('react-dom');
const {Form, TextInput, Checkbox, Select, Label} = require('react-easy-form');

const values = ['1', '2', '3'];
const valuesMap = {
	1: 'one',
	2: 'two',
	3: 'three'
};

const data = {
	firstName: 'Jean',
	select: '2',
	selectMap: '2'
};

const LabeledInput = (props) => {
	return (
		<div className="pure-control-group">
			<Label value={props.label} position="before">
				<TextInput {...props}/>
			</Label>
		</div>)
}

const LabeledSelect = (props) => {
	return (
		<div className="pure-control-group">
			<Label value={props.label} position="before">
				<Select {...props}/>
			</Label>
		</div>)
}


var App = React.createClass({
	render () {
		return (
			<div>
				<Form className="pure-form pure-form-aligned" initialData={data} onSubmit={(data) => console.log(data)}>
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
					</fieldset>
				</Form>
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
