import axios from 'axios';

async function main() {
	const res = await axios.get('https://jsonplaceholder.typicode.com/users/1', {
		headers: {
			Jsms: 'Custom header',
		},
	});

	console.log(res.data);
}

main();
