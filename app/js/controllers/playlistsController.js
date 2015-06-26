class PlaylistsController {

  constructor($scope) {
    this.$scope = $scope;

    this.$scope.playlists = [
      {title: 'Reggae', id: 1},
      {title: 'Chill', id: 2},
      {title: 'Dubstep', id: 3},
      {title: 'Indie', id: 4},
      {title: 'Rap', id: 5},
      {title: 'Cowbell', id: 6}
    ];

    console.log('init PlaylistsController');
  }
}

// In order to preserve dependency annotations for minification, we need to use the $inject property notation now:
PlaylistsController.$inject = ['$scope'];

export {PlaylistsController}
