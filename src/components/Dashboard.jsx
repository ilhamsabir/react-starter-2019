import React, { Component } from 'react';
import ListUser from "../components/ListUser.jsx";

export default class Dashboard extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<div className="d-sm-flex align-items-center justify-content-between mb-4">
					<h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
				</div>
				<div className="row">
					<div className="col-md-12 text-center dashboard-img">
						<ListUser />
					</div>
				</div>
			</div>
		);
	}
}