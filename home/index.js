const Joi = require('joi');

exports.register = (server, options) => {
	server.route({
		method: [ 'GET' ],
		path: '/{param?}',
		handler: {
			directory: {
				path: '.',
				redirectToSlash: true,
				index: true
			}
		}
	});
};

exports.pkg = {
	name: 'home'
};
