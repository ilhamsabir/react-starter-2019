import axios from 'axios'
import { CSRF_TOKEN } from './helper'

const http = (url, method = 'get', data = null, headers = {}) => {
	const config = {
		url,
		method,
		headers,
	}

	config.headers = {
		'X-CSRF-TOKEN': CSRF_TOKEN,
	}

	if (data) {
		if (method === 'get') {
			config.params = data
		} else {
			config.data = data
		}
	}

	return axios(config)
}

export default http
