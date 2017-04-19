/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');
var http   = require('http');
var bwipjs = require('bwip-js');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
var app = express();
bwipjs.loadFont('Inconsolata', 108,
            require('fs').readFileSync('fonts/Inconsolata.otf', 'binary'));

var server = http.createServer(function(req, res) {
	// If the url does not begin /?bcid= then 404.  Otherwise, we end up
	// returning 400 on requests like favicon.ico.
	if (req.url.indexOf('/?bcid=') != 0) {
		res.writeHead(404, { 'Content-Type':'text/plain' });
		res.end('BWIP-JS: Unknown request format.', 'utf8');
	} else {
		// Do not allow images to grow too large (1 mega-pixel limit)
		bwipjs(req, res, { sizelimit:1024*1024 });
	}

})			
			
			
// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
server.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});
