import axios from 'axios';

function getUsers() {
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

	axios({
		method: 'post',
		url: 'https://reqres.in/api/register',
		data: {
			email: 'eve.holt@reqres.in',
			password: 'pistol',
		},
	})
		.then(res => {
			console.log(res.data);
		})
		.catch(err => {
			console.log(err);
		});
}

function postUsers() {
	// axios({
	// 	method: 'post',
	// 	url: 'https://reqres.in/api/register',
	// 	data: {
	// 		email: 'eve.holt@reqres.in',
	// 		password: 'pistol',
	// 	},
	// })

	const data = {
		email: 'eve.holt@reqres.in',
		password: 'pistol',
	};
	axios
		.post('https://reqres.in/api/register', data)
		.then(res => {
			console.log(res.data);
		})
		.catch(err => {
			console.log(err);
		});
}

function putData() {
	axios
		.put('https://jsonplaceholder.typicode.com/users/2', {
			name: 'John Doe',
			ussername: 'johndoe',
		})
		.then(res => {
			console.log(res.data);
		})
		.catch(err => {
			console.log(err);
		});
}

putData();
