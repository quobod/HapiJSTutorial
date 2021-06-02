const Joi = require('joi');

exports.register = (server, options) => {
	server.route({
		method: [ 'GET' ],
		path: '/',
		handler: (req, res) => {
			return res.view('index', { title: 'Home' });
		}
	});
};

exports.pkg = {
	name: 'home'
};
