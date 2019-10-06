
import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchProduct } from "../../store/actions/product";
import { Table, Column, Cell } from 'fixed-data-table-2';
import 'fixed-data-table-2/dist/fixed-data-table.css';

/**
 * Price cell
 */
class PriceCell extends Component {
	render() {
		const { rowIndex, field, data, ...props } = this.props;
		const price = data[rowIndex][field];
		return (
			<Cell {...props}>
				Rp {price}
			</Cell>
		)
	}
}

/**
 * Picture cell
 */
class PictureCell extends Component {
	render() {
		const { rowIndex, field, data, ...props } = this.props;
		const pictures = JSON.parse(data[rowIndex].pictures);
		return (
			<Cell {...props}>
				<img
					src={`http://localhost/kiosbaru/uploads/${pictures[0]}`}
					style={{ width: 35 + 'px' }}
					alt={pictures[0]} />
			</Cell>
		)
	}
}

@connect((store) => {
	return {
		product: store.product.product,
	};
})

class ListProduct extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: "product list",
		}
	}

	componentDidMount() {
		this.props.dispatch(fetchProduct())
	}

	_onClick(selected) {
		// this.props.dispatch(setUserName(selected.name))
		console.log('product', selected);
	}

	render() {
		let { height, width, containerHeight, containerWidth, product , ...props} = this.props;
		let table = ''
		if (product && product.data && product.data.length > 0) {
			table = <Table
				rowsCount={product.data.length}
				rowHeight={50}
				headerHeight={50}
				width={1200}
				height={500}>
				<Column
					cell={
						<PictureCell
							data={product.data}
							field="pictures"
						/>
					}
					width={55}
				/>
				<Column
					header={<Cell>Name</Cell>}
					cell={props => (
						<Cell {...props}>
							{product.data[props.rowIndex].name}
						</Cell>
					)}
					width={200}
				/>
				<Column
					header={<Cell>Price</Cell>}
					cell={
						<PriceCell
							data={product.data}
							field="price"
						/>
					}
					width={200}
				/>
			</Table>
		}

		return (
			<div>
				{table}
			</div>
		);
	}
}


export default ListProduct;
