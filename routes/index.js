
exports.index = function(request, response) {
	response.render('default', {
		title: 'Home', 
		classname: 'home',
		users: ['Pablo','Portabales','Campos']
	})
}

exports.about = function(request, response) {
	response.render('default', {
		title: 'About Us',
		classname: 'about'
	})
}