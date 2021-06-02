const Path = require('path');

module.exports = {
	server: {
		port: '3000',
		routes: {
			files: {
				relativeTo: Path.join(__dirname, 'public')
			}
		}
	},
	register: {
		plugins: [
			{
				plugin: require('@hapi/inert')
			},
			{
				plugin: '@hapi/vision',
				options: {
					engines: {
						hbs: require('handlebars')
					},
					path: Path.resolve(__dirname, 'views')
				}
			},
			{
				plugin: require('./employee')
			},
			{
				plugin: require('./home')
			},
			{
				plugin: require('./signup')
			},
			{
				plugin: require('./manager')
			}
		]
	}
};
