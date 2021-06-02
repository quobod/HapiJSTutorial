const Joi = require('joi');

exports.register = (server, options) => {
	server.route({
		method: [ 'POST' ],
		path: '/signup',
		config: {
			validate: {
				payload: Joi.object({
					email: Joi.string().email().required(),
					pwd1: Joi.string().min(6).label('Password ').required(),
					pwd2: Joi.string().valid(Joi.ref('pwd1')).label("Passwords don't match").required()
				}),
				failAction: (req, res, err) => {
					throw err;
				}
			}
		},
		handler: (req, res) => {
			return req.payload;
		}
	});
};

exports.pkg = {
	name: 'signup'
};
