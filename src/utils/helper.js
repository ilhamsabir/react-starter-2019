
// export const baseUrl = document.querySelector('base')
export const apiUrl = 'http://localhost/kiosbaru/api'

export const CSRF_TOKEN = '9JUwAlkCBsllxgougp8JniEFuoCsjgeKVfCEC2Hm'

export const NAME = $('#profile').attr('data-name')

export const createSlug = val => {
	return val.replace(/\s+/g, '-').toLowerCase()
}

export const formatCurrencyRupiah = (val) => {
	let num_string = val ? val.toString() : '0';
	let sisa = num_string.length % 3,
		rupiah = num_string.substr(0, sisa),
		ribuan = num_string.substr(sisa).match(/\d{3}/g)

	let separator = ''

	if (ribuan) {
		separator = sisa ? '.' : ''
		rupiah += separator + ribuan.join('.')
	}

	return `${rupiah}`
}

export const removeSpecialChar = val => val.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')

export const generateRandomString = (strLength) => {
	let random_string = '';
	let random_ascii;
	let ascii_low = 65;
	let ascii_high = 90
	for (let i = 0; i < strLength; i++) {
		random_ascii = Math.floor((Math.random() * (ascii_high - ascii_low)) + ascii_low);
		random_string += String.fromCharCode(random_ascii)
	}
	return random_string
}

// min date
export const dateToday = () => {
	const today = new Date();
	let day = today.getDate();
	day = day.toString();
	// January is 0!
	let month = today.getMonth() + 1;
	month = month.toString();
	const mm = month.length >= 2 ? month : `0${month}`;
	const dd = day.length >= 2 ? day : `0${day}`;
	const yyyy = today.getFullYear();
	const date = `${yyyy}-${mm}-${dd}`;
	return date;
};

// next date
export const dateFuture = (increment) => {
	const today = new Date();
	let day = today.getDate() + increment;
	day = day.toString();
	// January is 0!
	let month = today.getMonth() + 1;
	month = month.toString();
	const mm = month.length >= 2 ? month : `0${month}`;
	const dd = day.length >= 2 ? day : `0${day}`;
	const yyyy = today.getFullYear();
	const date = `${yyyy}-${mm}-${dd}`;
	return date;
};