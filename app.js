var express = require('express')

var app = express()

app.set('view engine', 'ejs')

app.get('/', function(request, response) {
	response.render('default')
})

app.get('/me', function(request, response) {
	response.send('@pportabales')
})

app.get('/who/:name?', function(request, response) {
	console.log(request.params)
	var name = request.params.name
	response.send(name + ' was here')
})

app.get('/who/:name?/:title?', function(request, response) {
	console.log(request.params)
	var name = request.params.name
	var title = request.params.title
	response.send('name: ' + name + ' title: ' + title)
})

app.get('*', function(request, response) {
	response.send('bad route')
})



var server = app.listen(3000, function() { console.log('listening on port 3000')})