# react-easy-form

Easy forms for react 0.14+.
It uses React's context to allow form component to automatically update the
form state.
It natively uses HTML5 form validation.

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

```javascript
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

					<Checkbox name="check1" label="Check 1"/>
					<Checkbox name="check2" label="Check 2"/>

					<button type="submit">Submit</button>
				</Form>
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
```

## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## License

MIT

Copyright (c) 2015 Geoffroy Warin.
