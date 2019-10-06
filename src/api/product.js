import http from '../utils/http'
import { apiUrl } from '../utils/helper'

const ENDPOINT = `/api/product`

export default {
	fetch(limit, currentPage) {
		const url = `${ENDPOINT}?limit=${limit}&page=${currentPage}`
		return http(url)
	},

	fetchDetail(slug) {
		const url = `${ENDPOINT}/detail/${slug}`
		return http(url)
	},

	post(data) {
		const url = `${ENDPOINT}`

		let status = 1
		if (!data.status) {
			status = 0
		}

		const formData = new FormData()
		formData.append('name', data.name)
		formData.append('slug', data.slug)
		formData.append('price', data.price)
		formData.append('sale_price', data.sale_price)
		formData.append('weight', data.weight)
		formData.append('description', data.description)
		formData.append('pictures', data.pictures)
		formData.append('categories', data.categories)
		formData.append('subcategories', data.subcategories)
		formData.append('sku', data.sku)
		formData.append('stock', data.stock)
		formData.append('type', data.type)
		formData.append('status', status)
		formData.append('variations', data.variations)

		return http(url, 'post', formData)
	},

	update(id, data) {
		const url = `${ENDPOINT}/${id}`

		return http(url, 'put', data)
	},

	deleteProduct(id) {
		const url = `${ENDPOINT}/${id}`
		return http(url, 'delete')
	},

	updateStock(id, data) {
		const url = `${ENDPOINT}/stock/${id}`
		return http(url, 'put', data)
	},

}