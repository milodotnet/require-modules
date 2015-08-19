module.exports = function (grunt) {

	grunt.initConfig({
		connect: {
			plugins: {
				options: {
					port: 8030,
					base: 'plugins',
					middleware: function (connect, options, middlewares) {
						middlewares.unshift(
							function(req, res, next) {
								res.setHeader('Access-Control-Allow-Origin', '*');
								res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
								res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
								return next();
							});
						return middlewares;
					}
				}
			},
			main: {
				options: {
					port: 8020,
					base: 'main',
					index: 'index.html',
					keepalive: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask('default', ['connect']);

};
