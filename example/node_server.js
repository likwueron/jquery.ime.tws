const fileSystem = require('fs');
const path = require('path');
const expressServer = require('express');

const config = {
	port: 5001,
	imeLibPath: '../../jquery.ime'
};

var app = expressServer();

app.use(expressServer.static(path.join(__dirname, config.imeLibPath)));
app.use(expressServer.static(path.join(__dirname, '../src')));
app.use(expressServer.static(__dirname));

app.listen(config.port, () => {
	console.log('listen on port...' + config.port);
});
