var jaysomepictures = angular.module('jaysomepictures', ['$strap.directives']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  	when('/home', {templateUrl: 'template/home.html', controller: HomeCtrl}).
  	when('/pictures', {templateUrl: 'template/top-picture-list.html',   controller: TopPictureListCtrl}).
  	when('/videos', {templateUrl: 'template/video-list.html',   controller: VideoListCtrl}).
  	when('/albums/:albumID', {templateUrl: 'template/album-detail.html',   controller: AlbumDetailCtrl}).
    when('/pictures/:pictureId', {templateUrl: 'template/picture-detail.html', controller: PictureDetailCtrl}).
  	when('/about', {templateUrl: 'template/about.html',   controller: AboutCtrl}).
  	when('/contact', {templateUrl: 'template/contact.html',   controller: ContactCtrl}).
    otherwise({redirectTo: '/home'});
}]);