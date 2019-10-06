import React, { Component } from 'react';
import ListProduct from '../Product/ListProduct';

class ProductContent extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container-fluid">
				<div className="d-sm-flex align-items-center justify-content-between mb-4">
					<h1 className="h3 mb-0 text-gray-800">Product</h1>
				</div>
				<div className="row">
					<div className="col-md-12">
						<ListProduct />
					</div>
				</div>
			</div>
		);
	}
}

export default ProductContent;