import axios from 'axios';

async function main() {
	const axiosInstance = axios.create({
		baseURL: 'https://jsonplaceholder.typicode.com',
		timeout: 3000,
	});

	const resPosts = await axiosInstance.get('/posts/1');
	console.log(resPosts);

	const resUsers = await axiosInstance.get('/users/1');
	console.log(resUsers);
}

main();
