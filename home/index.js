const Joi = require('joi');

exports.register = (server, options) => {
	server.route({
		method: [ 'GET' ],
		path: '/',
		handler: (req, res) => {
			return { status: 'success' };
		}
	});
};

exports.pkg = {
	name: 'home'
};
