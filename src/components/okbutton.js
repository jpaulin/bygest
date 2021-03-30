import React, { Component } from 'react';


export class OKButton extends Component {

	// A beautiful blue button that has simply text OK inside it
	render() {
	const labelText = 'OK';
	return (
			<div><button>{labelText}</button></div>
	);
	}
}
