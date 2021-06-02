exports.register = (server, options) => {
	server.route({
		method: 'GET',
		path: '/manager',
		handler: (req, res) => {
			return res.view('manager', { title: 'Manager' });
		}
	});
};

exports.pkg = {
	name: 'manager'
};
