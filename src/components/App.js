import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import NotFound from './NotFound';



class App extends React.Component {

	constructor() {
		super();
		this.addFish = this.addFish.bind(this); // binds the add fish to the html
		this.state = { fishes: {}, order: {} }; // get initital state // starts with empty states.
	}

	addFish(fish) {
		// this.state.fishes.fish1 = fish; // update our state
		const fishes = {...this.state.fishes}; // make a copy from the existing state to this new one
		const timestamp = Date.now();
		fishes['fish-' + timestamp] = fish;
		
		// set state
		this.setState({fishes})

	}


	render() {
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Seafood Market" /> {/* This is importing the header component in the jsx */}
				</div>
				<Order/>
				<Inventory addFish={this.addFish}/>
			</div>
		)
	}
}

export default App;