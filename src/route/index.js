import React from 'react';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import { TitleComponent } from '../components/Title.jsx';
// import { createBrowserHistory } from 'history';

// pages
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Product from '../pages/Product.jsx';

// withTitle function
const withTitle = ({ component: Component, title }) => {
	return class Title extends Component {
		render() {
			return (
				<React.Fragment>
					<TitleComponent title={title} />
					<Component {...this.props} />
				</React.Fragment>
			);
		}
	};
};

// Adding title
const HomePage = withTitle({ component: Home, title: 'Home - My React App' });
const AboutPage = withTitle({ component: About, title: 'About - My React App' });
const ProductPage = withTitle({ component: Product, title: 'Product - My React App' });

const AppRoute = () => {
	return (
		<HashRouter>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/about" component={AboutPage} />
				<Route path="/product" component={ProductPage} />
			</Switch>
		</HashRouter>
	)
}


export default AppRoute