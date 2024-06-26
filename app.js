const http = require('http')

http.createServer((req, res) => {
	res.write("Loooz, you ruined my sleep schedule you bich.`")
	res.end()

}).listen(3000)

console.log("CHUNUGUS")





