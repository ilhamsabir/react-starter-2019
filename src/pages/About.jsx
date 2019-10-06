
import React, { Component } from 'react';
import Header from '../components/Header.jsx';
import Sidebar from '../components/Sidebar.jsx';
import Footer from '../components/Footer.jsx';
import AboutPage from '../components/AboutPage.jsx';

class About extends Component {
	render() {
		return (
			<div id="wrapper">
				<Sidebar />
				<div id="content-wrapper" className="d-flex flex-column">
					<div id="content">
						<Header />
						<AboutPage />
					</div>
					<Footer />
				</div>
			</div>
		);
	}
}


export default About;
