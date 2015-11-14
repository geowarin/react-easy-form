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
	selectMap: '2',
	prod: true
};

var App = React.createClass({
	render () {
		return (
			<div>
				<Form initialData={data} onSubmit={(data) => console.log(data)}>
					<Label value="First Name">
						<TextInput name="firstName" required/>
					</Label>
		<TextInput name="email" type="email"/>

					<Label value="Select one" position="before">
						<Select name="select" values={values}/>
					</Label>
		<Select name="selectMap" values={valuesMap}/>

					<Checkbox name="prod"/>
					<Checkbox name="monitor"/>

					<button type="submit">Submit</button>
				</Form>
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
