function PictureListCtrl($scope) {
  $scope.pictures = [
    {"id": "1", "name": "Nexus S",
     "snippet": "Fast just got faster with Nexus S."},
    {"id": "1", "name": "Motorola XOOM™ with Wi-Fi",
     "snippet": "The Next, Next Generation tablet."},
    {"name": "MOTOROLA XOOM™",
     "snippet": "The Next, Next Generation tablet."}
  ];
}

function AlbumListCtrl($scope, $routeParams) {
	  $scope.albums = [
	                     {"id": "1", "name": "Nexus S",
	                      "snippet": "Fast just got faster with Nexus S.",
	                      "imageUrl": "none yet"},
	                     {"id": "2", "name": "Motorola XOOM™ with Wi-Fi",
	                      "snippet": "The Next, Next Generation tablet.",
	                      "imageUrl": "none yet"},
	                     {"id": "3", "name": "MOTOROLA XOOM™",
	                      "snippet": "The Next, Next Generation tablet.",
	                      "imageUrl": "none yet"}
	                   ];
}

function AlbumDetailCtrl($scope, $routeParams) {
	$scope.album = $routeParams.albumId;
}
function PictureDetailCtrl($scope, $routeParams) {
	$scope.picture = $routeParams.pictureId;
}

/**
 * List of videos
 */
function VideoListCtrl($scope, $routeParams, $http) {
	$http.get('data/videos.json').success(function(data) {
		$scope.videos = data;
	});
}

/**
 * List of top pictures
 */
function TopPictureListCtrl($scope, $routeParams, $http) {
	$http.get('data/top-pictures.json').success(function(data) {
		$scope.pictures = data;
	});
}

/*
 * Init homepage view and stuff
 */
function HomeCtrl($scope, $routeParams, $http, mainService) {
	/*$http.get('data/categories.json').success(function(data) {
		$scope.categories = data;
	});*/
	console.log(mainService.menu.currentMenu);
}

/**
 * Main menu data management
 */
function MainMenuCtrl($scope, $http) {
	console.log("called MainMenuCtrl");

	$http.get('data/categories.json').success(function(data) {
		$scope.categories = data;
	});

	$scope.setActiveMenu = function(category) {
	    $scope.selected = category;
	}

	$scope.isSelected = function(category) {
	    return $scope.selected === category;
	}
}

/**
 * About page
 */
function AboutCtrl($scope) {
}

/**
 * Contact page
 */
function ContactCtrl($scope) {
}