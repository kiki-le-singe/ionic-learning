angular.module('starter.directives', [])

.directive('MyDirective', function() {

  return {
    replace: true,
    template: '<div><p>coucou</p></div>'
    // templateUrl: 'templates/coucou.html'
  };
});
