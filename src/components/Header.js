import React from 'react';



// Going to convert the beneath code to a stateless class
// class Header extends React.Component {
// 	render() {

// 		console.log(this.props)
// 		return (
// 			<header className="top">
// 				<h1>Catch 
// 				<span className="ofThe">
// 					<span className="of">of</span>
// 					<span className="the">the</span>
// 				</span>
// 				day
// 				</h1>
// 				<h3 className="tagline"> <span>{this.props.tagline}</span></h3>
// 			</header>
// 		)
// 	}
// }


// Stateles component coz it never changes
// function Header() {}
// var Header = function() {}
const Header = (props) => {
	return (
		<header className="top">
			<h1>Catch 
			<span className="ofThe">
				<span className="of">of</span>
				<span className="the">the</span>
			</span>
			day
			</h1>
			<h3 className="tagline"> <span>{props.tagline}</span></h3>
		</header>
	)
}

export default Header;