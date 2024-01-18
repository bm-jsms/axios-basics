import axios from 'axios';

async function main() {
	const controller = new AbortController();

	try {
		const res = await axios.get(
			'https://reqres.in/api/login',
			{
				email: 'eve.holt@reqres.in',
				password: 'cityslicka',
			},
			{
				signal: controller.signal,
			},
		);
		console.log(res);
	} catch (error) {
		console.log(error);

		if (error.response?.status === 404) {
			console.log('Not found');
		}

		if (error.response?.status === 400) {
			console.log('Bad request');
		}
	}
}

main();
