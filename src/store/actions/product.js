import { SET_PRODUCTS } from './'
import apiProduct from '../../api/product'

export const fetchProduct = (limit = 10, current_page = 1) => {
	return (dispatch) => {
		apiProduct.fetch(limit, current_page)
			.then(response => {
				dispatch({
					type: SET_PRODUCTS,
					payload: response.data.data
				});
			}).catch((error) => {
				console.log(error);
			})
	}
}
