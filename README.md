# react-easy-form

[![npm](https://img.shields.io/npm/v/react-easy-form.svg)](https://www.npmjs.com/package/react-easy-form)
[![Dependency Status](https://img.shields.io/david/geowarin/react-easy-form.svg)](https://david-dm.org/geowarin/react-easy-form)
[![devDependency Status](https://img.shields.io/david/dev/geowarin/react-easy-form.svg)](https://david-dm.org/geowarin/react-easy-form#info=devDependencies)

Easy forms for react 0.14+.

It uses React's context to allow form component to automatically update the
form state.

Supports HTML5 form validation.

## Demo & Examples

Live demo: [geowarin.github.io/react-easy-form](http://geowarin.github.io/react-easy-form/)

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Installation

The easiest way to use react-easy-form is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-easy-form.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-easy-form --save
```


## Usage

### Simple usage

```javascript
import React from 'react';
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

const App = () => (
			<Form initialData={initialData} onSubmit={(data) => console.log(data)}>

				<TextInput name="firstName" required/>
				<TextInput 	name="email" type="email"
							placeholder="Enter your address" required />
				<TextInput 	label="Country code" name="country" required
							pattern="[A-Za-z]{3}" title="Three letter country code" />

				<Label value="Select built with an array" position="before">
					<Select name="select" values={values}/>
				</Label>

				<Label value="Select built with an object (map)" position="after">
					<Select name="selectMap" values={valuesMap}/>
				</Label>

				<Checkbox name="check1" required />

				<button type="submit">Submit</button>
			</Form>
	);

ReactDOM.render(<App />, document.getElementById('app'));
```

### Example of Styling

The following example uses [Pure forms](http://purecss.io/)

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import {Form, TextInput, Checkbox, Select, Label} from 'react-easy-form';

const values = ['1', '2', '3'];
const initialData = {
	firstName: 'Jean',
	select: '2'
};

const LabeledInput = (props) => (
		<div className="pure-control-group">
			<Label value={props.label} position="before">
				<TextInput {...props}/>
			</Label>
		</div>
	);

const LabeledSelect = (props) => (
		<div className="pure-control-group">
			<Label value={props.label} position="before">
				<Select {...props}/>
			</Label>
		</div>
	);


const App = () => (
			<Form className="pure-form pure-form-aligned" initialData={initialData}
					onSubmit={(data) => console.log(data)}>

				<fieldset>
					<LabeledInput label="First Name" name="firstName" required/>
					<LabeledInput label="E-mail" placeholder="Enter your email"
								name="email" type="email" required/>

					<LabeledInput label="Country code" name="country" required
								pattern="[A-Za-z]{3}" title="Three letter country code" />

					<LabeledSelect label="Select from array" name="select" values={values}/>

					<div className="pure-controls">
						<Label className="pure-checkbox">
							<Checkbox name="agree" title="Accept TOS" required/> Agree
						</Label>

						<button className="pure-button pure-button-primary" type="submit">Submit</button>
					</div>
				</fieldset>
			</Form>
		);

ReactDOM.render(<App />, document.getElementById('app'));
```

### Calling submit programmatically

You can call the submission of the form in javascript.
This will still trigger validation of the inputs.

```javascript
<Form ref="myForm">
</Form>

...

this.refs.myForm.submit()
```

## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## License

MIT

Copyright (c) 2015 Geoffroy Warin.
