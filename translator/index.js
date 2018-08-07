const request = require('request')
const output = require('./lib').output

var param = process.argv[2]
var word = param ? param : ''

request('http://fanyi.youdao.com/openapi.do?keyfrom=node-translator&key=2058911035&type=data&doctype=json&version=1.1&q=' + word, function(error, response, body) {
  if (!error && response.statusCode == 200) {
    output(body)
  }
})