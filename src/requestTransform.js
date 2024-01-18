import axios from 'axios';

async function main() {
	const res = await axios.get('https://jsonplaceholder.typicode.com/users', {
		transformResponse: axios.defaults.transformResponse.concat(data => {
			console.log(data);

			data = data.map(user => {
				return {
					...user,
					name: user.name.toUpperCase(),
				};
			});

			return data;
		}),
	});

	console.log(res);
}

main();
