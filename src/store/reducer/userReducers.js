// export default function reducer(state={
// 		user: [{
// 			name: null,
// 			year: null,
// 		}],
// 		error: null,
// 	}, action) {

// 		switch (action.type) {
// 			case "GET_USER_DATA": {
// 				return {state, user: action.payload}
// 			}
// 			case "SET_USER_NAME": {
// 				return {...state, name: action.payload}
// 			}
// 			case "SET_USER_AGE": {
// 				return {state, age: action.payload}
// 			}
// 		}

// 		return state
// }

import { SET_USERS, REMOVE_USER, SET_USER_NAME } from '../actions'

export default function (state = [], action) {
	const { type, username, user } = action

	switch (type) {
		case SET_USERS:
			return {
				...state,
				user: action.payload

			}
		case SET_USER_NAME:
			return { ...state, name: action.payload }

		case REMOVE_USER:
			return state.filter(i => i !== user)
		default:
			return state
	}
}
