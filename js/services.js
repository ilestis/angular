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