import templateUrl from 'list/list.html';

export default function routes ($stateProvider) {
  'ngInject';
  $stateProvider
      .state('list', {
        url: '/list?title&page',
        views: {
          'body@': {
            templateUrl,
            controller: 'ListController',
          }
        }
      });
};
