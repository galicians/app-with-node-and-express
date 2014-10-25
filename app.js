var express = require('express')

var app = express()
var routes = require('./routes')

app.set('view engine', 'ejs')
app.locals.pagetitle = "Pablo's Website"

app.get('/', routes.index)
app.get('/about', routes.about)
app.get('*', function(request, response) { response.send('bad route') })



var server = app.listen(3000, function() { console.log('listening on port 3000')})