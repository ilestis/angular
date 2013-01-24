var rootPath = '/';

var app = angular.module('jaysome-pictures', ['$strap.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider.
  	when('/home', {templateUrl: rootPath+'template/home.html', controller: HomeCtrl}).
  	when('/pictures', {templateUrl: rootPath+'template/albums.html',   controller: AlbumsCtrl}).
  	when('/videos', {templateUrl: rootPath+'template/video-list.html',   controller: VideoListCtrl}).
  	when('/albums/:albumID', {templateUrl: rootPath+'template/album.html',   controller: AlbumCtrl}).
    when('/pictures/:pictureId', {templateUrl: rootPath+'template/picture-detail.html', controller: PictureDetailCtrl}).
  	when('/about', {templateUrl: rootPath+'template/about.html',   controller: AboutCtrl}).
  	when('/contact', {templateUrl: rootPath+'template/contact.html',   controller: ContactCtrl}).
    otherwise({redirectTo: '/home'});
	$locationProvider.html5Mode(true);
  }]);