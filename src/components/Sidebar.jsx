import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Sidebar extends Component {
	constructor(props) {
		super(props);

		// this.toggle = this.toggle.bind(this);
		// this.state = {
		// 	isOpen: false
		// };
	}

	render() {
		return (
			<div>
				<ul className="navbar-nav bg-primary sidebar sidebar-dark accordion" id="accordionSidebar">
					<Link to="/" className="sidebar-brand d-flex align-items-center justify-content-center">
						<div className="sidebar-brand-icon rotate-n-15">
							<i className="fas fa-laugh-wink"></i>
						</div>
						<div className="sidebar-brand-text mx-3">Admin Panel</div>
					</Link>
					<hr className="sidebar-divider my-0"></hr>
					<li className="nav-item">
						<Link to="/" className="nav-link">
							<i className="fas fa-fw fa-tachometer-alt"></i>
							<span>Dashboard</span>
						</Link>
					</li>
					<hr className="sidebar-divider"></hr>
					<li className="nav-item">
						<Link to="/about" className="nav-link">
							<i className="fas fa-fw fa-heart"></i> <span>About</span>
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/product" className="nav-link">
							<i className="fas fa-fw fa-database"></i> <span>Product</span>
						</Link>
					</li>
				</ul>
			</div>
		);
	}
}