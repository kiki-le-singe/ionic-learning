class AppController {

  constructor($scope, $ionicModal, $timeout) {
    this.foo = 'bar';
    this.$scope = $scope;
    this.$ionicModal = $ionicModal;
    this.$timeout = $timeout;
    this.$scope.login = this.login;
    this.$scope.doLogin = this.doLogin;
    this.$scope.loginData = {}; // Form data for the login modal

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Create the login modal that we will use later
    this.$ionicModal.fromTemplateUrl('templates/login.html', {
      scope: this.$scope
    }).then(modal => this.$scope.modal = modal);

    console.log('init AppController');
  }

  // Triggered in the login modal to close it
  closeLogin () {
    this.$scope.modal.hide();
  }

  // Open the login modal
  login () {
    this.$scope.modal.show();
  }

  // Perform the login action when the user submits the login form
  doLogin () {
    console.log('Doing login', this.$scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    this.$timeout(() => {
      this.closeLogin();
    }, 1000);
  }
}

// In order to preserve dependency annotations for minification, we need to use the $inject property notation now:
AppController.$inject = ['$scope', '$ionicModal', '$timeout'];

export {AppController}
