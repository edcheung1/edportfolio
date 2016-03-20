'use strict'

module.exports = function(app) {
	app.route('/')
		.get(function (req, res) {
			res.sendFile(process.cwd() + '/public/index.html');
		});
		
	app.route('/api/whoami')
		.get(function (req,res) {
			var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
			var lang = req.headers['accept-language'].split(',')[0];
			var os = req.useragent.os;
			res.json({ipaddress: ip, language: lang, software: os});
		});
};