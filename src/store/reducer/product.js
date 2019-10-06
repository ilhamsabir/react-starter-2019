import { SET_PRODUCTS, APPEND_PRODUCT, UPDATE_PRODUCT, REMOVE_PRODUCT } from '../actions'

export default function (state = [], action) {
	const { type, product } = action

	switch (type) {
		case SET_PRODUCTS:
			return {
				...state,
				product: action.payload

			}

		case APPEND_PRODUCT:
			return { ...state, name: action.payload }

		case UPDATE_PRODUCT:
			return { ...state, name: action.payload }

		case REMOVE_PRODUCT:
			return state.filter(i => i !== product)
		default:
			return state
	}
}
