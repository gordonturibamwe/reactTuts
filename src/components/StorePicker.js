import React from 'react'; // Import this in every single component because we need in the component 'React.component'
import { getFunName } from '../helpers';


// This was got from index.js.
class StorePicker extends React.Component {


	// this helps you call props inside a method in the component
	constructor() {
		super();
		this.goToStore = this.goToStore.bind(this)
	}


	goToStore(event) {
		event.preventDefault(); // prevents refresh on the page
		console.log("You changed the URL");
		console.log(this.storeInput.value); // first grab the text fro the box
		const storeId = this.storeInput.value; // first grab the text fro the box

		// second we transition from to store/storeId
		console.log('Going to ', storeId)
		this.context.router.transitionTo('/store/' + storeId);

	}

	render() {
		// return <p> Hello Gordon </p> // return esx hmtl
		// return React.createElement('h1', {className: 'testing_class'}, 'I love you, Lord'); 

		return (
			<form className="store-selector" onSubmit={this.goToStore}>
				{/* <form className="store-selector" onSubmit={(event) => this.goToStore(event)}> */}
				{/* This is a comment in jsx . This is a legit comment */}
				<h2> Please enter a Store</h2>
				<input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}}/> {/* ref -- stores value */}
				<button className="submit" type="submit"> Visit Store -> </button>
			</form>
		)
	}
}


// This tells react to give us access to routers
StorePicker.contextTypes = {
	router:  React.PropTypes.object
}

export default StorePicker; // This lets export the component
//React can only return one element at a time
