var React = require('react');
var ReactDOM = require('react-dom');
const {Form, TextInput, Checkbox, Select} = require('react-easy-form');

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
					<TextInput name="firstName" label="Name" required/>
		<TextInput name="email" label="email" type="email"/>

					<Select name="select" label="numbers" values={values}/>
		<Select name="selectMap" label="map" values={valuesMap}/>

					<Checkbox name="prod" label="Production"/>
					<Checkbox name="monitor" label="Monitoring"/>

					<button type="submit">Submit</button>
				</Form>
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
