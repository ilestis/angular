app.factory('mainService', function() {  
	return {
		menu : {
			currentMenu : 'home'
		}
	};
});


app.service('pageService', function() {
	this.current_url = null;
	
	this.setSelected = function(url) {
		this.current_url = url;
	}
	
	this.isSelected = function(url) {
		return this.current_url === url;
	}
});

app.service('stateService', function() {
	this.first_carousel_picture = false;
	
	this.isFirstCarousel = function(picture) {
		if(this.first_carousel_picture === false || this.first_carousel_picture === picture) {
			this.first_carousel_picture = picture;
			return true;
		}
		return false;
	}
});


/**
 * Author: isamuelson
 * Website: https://github.com/isamuelson/angularjs-googleanalytics
 */
var _gaq = _gaq || [];

angular.module('analytics', []).run(['$http', function($http) {

	_gaq.push(['_setAccount', 'YOUR GOOGLE ACCOUNT']);
	_gaq.push(['_trackPageview']);

	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(ga, s);

}]).service('analytics', function($rootScope, $window, $location, $routeParams) {

	$rootScope.$on('$viewContentLoaded', track);

	var track = function() {
		var path = convertPathToQueryString($location.path(), $routeParams)
		$window._gaq.push(['_trackPageview', path]);
	};

	var convertPathToQueryString = function(path, $routeParams) {
		for (var key in $routeParams) {
			var queryParam = '/' + $routeParams[key];
			path = path.replace(queryParam, '');
		}

		var querystring = decodeURIComponent($.param($routeParams));

		if (querystring === '') return path;

		return path + "?" + querystring;
	};
});