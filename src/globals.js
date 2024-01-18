import axios from 'axios';

async function main() {
	axios.defaults.headers.common['jsms'] = 'Hello World';

	const resUsers = await axios.get(
		'https://jsonplaceholder.typicode.com/users',
	);
	console.log(resUsers);

	const resPosts = await axios.get(
		'https://jsonplaceholder.typicode.com/posts',
	);
	console.log(resPosts);
}

main();
