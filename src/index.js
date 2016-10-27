// let's go!

import React from 'react'; // Imports the whole react package
import {render} from 'react-dom'; // this imports the render method from the render-dom, does not import the whole package
import './css/style.css';

import {BrowserRouter, Match, Miss} from 'react-router'; // Import router before the components

import App from './components/App'; // We are importing component
import StorePicker from './components/StorePicker'; // We are importing component
import NotFound from './components/NotFound'; // We are importing component




// This is going to be saved as a file js component in the components folder
// class StorePicker extends React.Component {
// 	render() {
// 		return <p> Hello </p> // return jsx html
// 	}
// }


const Root=() => {
	return (
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={StorePicker} />
				<Match exactly pattern="/store/:storeId" component={App} />
				<Miss component={NotFound} />
			</div>
		</BrowserRouter>
	)
}



render(<Root/>, document.querySelector('#main')); // Render Root to route
// render(<App/>, document.querySelector('#main')); // pass in the storepicker component. what dom element should it render that out to. here is the #main dom






// Put each component in a separate file.


