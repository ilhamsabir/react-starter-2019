import { SET_USER_NAME, SET_USERS } from './'

import axios from 'axios';

const url = 'https://reqres.in/api/unknown';

// export function fetchUser() {
// 	return function(dispatch) {
// 		axios({
// 			method:'get',
// 			url: url,
// 			responseType:'json'
// 		})
// 		.then(response => {
// 			dispatch({
// 				type: "GET_USER_DATA",
// 				payload: response.data.data
// 			});
// 		})
// 		.catch((error) => {
// 			console.log(error);
// 		})
// 	}
// }

// export const setUserName = (name) => {
// 	return {
// 		type: "SET_USER_NAME",
// 		payload: name
// 	}
// }

export function fetchUser() {
	return function (dispatch) {
		axios({
			method: 'get',
			url: url,
			responseType: 'json'
		})
			.then(response => {
				dispatch({
					type: SET_USERS,
					payload: response.data.data
				});
			})
			.catch((error) => {
				console.log(error);
			})
	}
}

export const setUserName = (name) => {
	return {
		type: SET_USER_NAME,
		payload: name
	}
}
