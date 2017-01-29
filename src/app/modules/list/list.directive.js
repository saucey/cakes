export default class StarRating {
  constructor() {
    this.restrict = 'A';
    this.template = '<ul class="rating">' +
        '<li ng-repeat="star in stars" ng-class="star">' +
        '\u2605' +
        '</li>' +
        '</ul>';
    this.scope = {
      ratingValue: '=',
      max: '='
    };
  }

  link(scope, elem, attrs) {
    scope.stars = [];
    for (var i = 0; i < scope.max; i++) {
      scope.stars.push({
        filled: i < scope.ratingValue
      });
    }
  }
}
