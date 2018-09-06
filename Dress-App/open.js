var opn = require('opn');
var os = require('os');


var interfaces = os.networkInterfaces();
var addresses = [];
for (var k in interfaces) {
    for (var k2 in interfaces[k]) {
        var address = interfaces[k][k2];
        if (address.family === 'IPv4' && !address.internal) {
            addresses.push(address.address);
        }
    }
}

var LocalIP = addresses[0]
opn(`http://${LocalIP}:3000/`);