export default class CakesService {
  constructor ($resource) {
    'ngInject';
    var cakesService = $resource(
        'http://52.31.91.48:5000/api/cakes/:id',
        {id: '@id'},
        {
          'getCakes': {
            method: 'GET',
            isArray: true
          },
          'removeCake': {
            method: 'DELETE'
          }
        }
    );
    this.cakesService = cakesService;
    return cakesService;
  }
};