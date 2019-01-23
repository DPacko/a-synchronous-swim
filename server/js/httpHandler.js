const headers = require('./cors');
var url = require('url');
var messages = require('./keypressHandler');
var keyPress = require('./keypressHandler');

module.exports = (req, res) => {

var movement;
  if(req.method === 'GET') {
    var pathname = url.parse(req.url).pathname;
    if(pathname === '/directions/swimming') {
      if(messages.validMessages)
      // sendResponse(res, messsages.validMessages[0]);
      movement = messages.validMessages[0];
    }
  }
  // var sendResponse = function (response, data) {
    res.writeHead(200, headers);
    res.end(JSON.stringify(movement));
  // }
};
