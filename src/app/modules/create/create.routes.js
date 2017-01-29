import templateUrl from 'create/create.html';

export default function routes ($stateProvider) {
  'ngInject';
  $stateProvider
      .state('create', {
        url: '/create',
        views: {
          'body@': {
            templateUrl,
            controller: 'CreateController',
          }
        },
      });
};
