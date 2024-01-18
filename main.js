import axios from 'axios';

function getUsers() {
	axios
		.get('https://jsonplaceholder.typicode.com/users', {
			params: {
				_limit: 3,
			},
		})
		.then(res => {
			console.log(res.data);
		})
		.catch(err => {
			console.log(err);
		});
}

getUsers();
