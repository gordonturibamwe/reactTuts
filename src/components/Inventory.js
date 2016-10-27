import React from 'react';
import AddFishForm from './AddFishForm';


class Inventory extends React.Component {
	render() {
		return (
			<div>
				<h2>Inventory</h2>
				<AddFishForm addFish={this.props.addFish}/> {/* adds the add Fish form from component */}
			</div>
		)
	}
}

export default Inventory;