function AlbumCtrl($scope, $routeParams, $http, pageService) {
	pageService.setSelected('pictures');
	
	$http.get(rootPath+'data/albums.json').success(function(data) {
		_.each(data, function(album) {
			if(album.id == $routeParams.albumID) {
				$scope.album = album;
			}
		});
	});
	
}
function PictureDetailCtrl($scope, $routeParams) {
	$scope.picture = $routeParams.pictureId;
}
	
/**
 * List of videos
 */
function VideoListCtrl($scope, $routeParams, $http, pageService) {
	pageService.setSelected('videos');
	
	$http.get(rootPath+'data/videos.json').success(function(data) {
		$scope.videos = data;
	});
}

/**
 * List of top pictures
 */
function AlbumsCtrl($scope, $routeParams, $http, pageService) {
	pageService.setSelected('pictures');
	
	$http.get(rootPath+'data/albums.json').success(function(data) {
		$scope.albums = data;
	});
}

/*
 * Init homepage view and stuff
 */
function HomeCtrl($scope, $routeParams, $http, pageService, stateService) {
	pageService.setSelected('home');
	
	
}

function CarouselCtrl($scope, $http) {
	$scope.carousel_interval = 5000;
	
	$http.get(rootPath+'data/home-pictures.json').success(function(data) {
		$scope.pictures = data;
	});
	
	$scope.isFirst = function(picture) {
		return stateService.isFirstCarousel(picture);
	}
}

/**
 * Main menu data management
 */
function MainMenuCtrl($scope, $http, pageService) {

	$http.get(rootPath+'data/categories.json').success(function(data) {
		$scope.categories = data;
	});

	$scope.setActiveMenu = function(category) {
		pageService.setSelected(category.url);
	}

	$scope.isSelected = function(category) {
	    return pageService.isSelected(category.url);
	}
}

/**
 * About page
 */
function AboutCtrl($scope, pageService) {
	pageService.setSelected('about');
}

/**
 * Contact page
 */
function ContactCtrl($scope, pageService) {
	pageService.setSelected('contact');
}

/** 
 * Footer
 */
function FooterCtrl($scope) {
	$scope.currentYear = '2013';
	$scope.copyright = '© Jaysome Pictures';
}