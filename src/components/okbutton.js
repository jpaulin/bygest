import React, { Component } from 'react';


export class OKButton extends Component {

	// A beautiful blue button that has simply text OK inside it
	render() {
		var labelText = undefined
		// optional props, and a default value if no props found 
		if (this.props.greet) {
			labelText = this.props.greet
		} else {
			labelText = 'OK'
		}
		return (
				<div><button>{labelText}</button></div>
		);
	}
}
