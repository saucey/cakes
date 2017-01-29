import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import CreateController from './create.controller.js';
import CreateCakeService from './create.service.js';
import routing from './create.routes.js';

export default angular.module('app.create', [uirouter, ngResource])
    .config(routing)
    .controller('CreateController', CreateController)
    .service('CreateCakeService', CreateCakeService)
    .name;
