import React, { Component } from 'react';

export class Welcome extends Component {

	render() {

	// The boring way, we have a 'const' (a constant) so this component is 
	// way less useful than it could be... We will re-engineer this to
	// use "props", as passed data, to gain wizards levels.
	const greetingText = 'Welcome to React';
	return (
			<div>I am good! {greetingText}</div>
	);
	}
}
