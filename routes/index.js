
/*
 * GET home page.
 */

exports.index = function(req, res){
	res.render('index', { title: 'Zharktas' });
};

exports.projects = function(req, res){
	res.render('projects', {title: "Projects"});
};


exports.cv = function(req, res){
	res.render('cv', {title: "CV"});
};