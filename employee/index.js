const Joi = require('joi');

exports.register = (server, options) => {
	server.route({
		method: [ 'POST' ],
		path: '/shift',
		config: {
			validate: {
				payload: Joi.object({
					start: Joi.date().max('now').required(),
					end: Joi.date().min(Joi.ref('start')).max('now').required()
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
	name: 'employee'
};
