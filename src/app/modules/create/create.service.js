
export default class CreateCakeService {
  constructor ($resource) {
    'ngInject';
    var createCakeService = $resource(
        'http://52.31.91.48:5000/api/cakes',
        {},
        {
          'createCake': {
            method: 'POST',
            // isArray: true
          }
        }
    );
    this.createCakeService = createCakeService;
    return createCakeService;
  }
};
