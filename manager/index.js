exports.register = (server, options) => {
	server.route({
		method: 'GET',
		path: '/',
		handler: (req, res) => {
			return res.view('manager', { title: 'Manager' });
		}
	});
};

exports.pkg = {
	name: 'manager'
};
