angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('DeviceInformationCtrl', function($scope, $ionicPlatform, $cordovaDevice) {
  $ionicPlatform.ready(function() {
    if (window.cordova) {
      $scope.device = $cordovaDevice.getDevice();
      $scope.cordova = $cordovaDevice.getCordova();
      $scope.model = $cordovaDevice.getModel();
      $scope.platform = $cordovaDevice.getPlatform();
      $scope.uuid = $cordovaDevice.getUUID();
      $scope.version = $cordovaDevice.getVersion();
    }
  });
})

.controller('BatteryCtrl', function($scope, $ionicPlatform, $rootScope, $cordovaBatteryStatus) {
})

.controller('CameraCtrl', function($ionicPlatform, $rootScope, $scope, $cordovaCamera) {
  $ionicPlatform.ready(function() {
    var options = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false
    };

    $scope.takePicture = function() {
      $cordovaCamera.getPicture(options).then(function(imageData) {
        $scope.imgSrc = 'data:image/jpeg;base64,' + imageData;
      },

      function(err) {
        console.log(err);
      });
    };
  });
});
