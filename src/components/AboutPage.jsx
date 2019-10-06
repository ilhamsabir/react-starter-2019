import React, { Component } from 'react';

export default class AboutPage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<div className="d-sm-flex align-items-center justify-content-between mb-4">
					<h1 className="h3 mb-0 text-gray-800">About</h1>
				</div>
				<div className="row">
					<div className="col-md-12 text-center dashboard-img">
						About
					</div>
				</div>
			</div>
		);
	}
}