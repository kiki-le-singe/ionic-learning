class PlaylistController {

  constructor($scope, $stateParams) {
    this.$scope = $scope;
    this.$stateParams = $stateParams;

    console.log('init PlaylistController');
    console.log('this.$stateParams: ', this.$stateParams);
  }
}

// In order to preserve dependency annotations for minification, we need to use the $inject property notation now:
PlaylistController.$inject = ['$scope', '$stateParams'];

export {PlaylistController}
