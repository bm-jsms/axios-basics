function getUsers() {
	axios('https://jsonplaceholder.typicode.com/users', {
		method: 'GET',
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
