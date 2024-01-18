import axios from 'axios';
async function main() {
	axios.interceptors.request.use(config => {
		console.log('Request interceptor');

		console.log(config);

		config.headers['X-Auth'] = '1234';
		return config;
	});

	const res = await axios.get('https://jsonplaceholder.typicode.com/users/1');

	console.log(res.data);
}
