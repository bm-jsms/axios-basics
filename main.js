import axios from 'axios';

function postUsers() {
	// axios
	// 	.get('https://jsonplaceholder.typicode.com/users', {
	// 		params: {
	// 			_limit: 3,
	// 		},
	// 	})
	// 	.then(res => {
	// 		console.log(res.data);
	// 	})
	// 	.catch(err => {
	// 		console.log(err);
	// 	});

	// axios({
	// 	method: 'post',
	// 	url: 'https://reqres.in/api/register',
	// 	data: {
	// 		email: 'eve.holt@reqres.in',
	// 		password: 'pistol',
	// 	},
	// })
	axios
		.post('https://reqres.in/api/register', {
			email: 'eve.holt@reqres.in',
			password: 'pistol',
		})
		.then(res => {
			console.log(res.data);
		})
		.catch(err => {
			console.log(err);
		});
}

postUsers();
