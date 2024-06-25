const http = require('http')

http.createServer((req, res) => {
	res.write("On the way here son")
	res.end()

}).listen(3000)

console.log("CHUNUGUS")





