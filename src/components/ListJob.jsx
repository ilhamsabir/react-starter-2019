
import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchJob, clickUser } from "../store/actions/userJobActions";

@connect((store) => {
	return {
		userDataJob: store.userjob.job,
	};
})


class ListJob extends React.Component {

	fetchListJob() {
		this.props.dispatch(fetchJob());
	}

	clickFunction(data) {

		this.props.dispatch(clickUser(data));
	}
	handleClick(data) {
		console.log('this is:', data);
		this.props.dispatch(clickUser(data));
	}
	get listJob() {
		const { userDataJob } = this.props;
		console.log('item', userDataJob);
		const listJob = userDataJob.map((item, index) => {
				return <li key={index} onClick={this.handleClick(item.name)}>{item.name}, {item.job}</li>
			}
		);
		return listJob;
	}
	render() {
		return (
			<div>
			<button onClick={this.fetchListJob.bind(this)}>User job</button>
				<div>
				<input type="text" />
				</div>
				<ul>{this.listJob}</ul>
			</div>
		);
	}
}


export default ListJob;
