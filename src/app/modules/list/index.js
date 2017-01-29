import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import ListController from './list.controller.js';
import StarRating from './list.directive.js';
import routing from './list.routes.js';
import CakesService from './list.service.js';



export default angular.module('app.list', [uirouter, ngResource])
    .config(routing)
    .controller('ListController', ListController)
    .directive('starRating', () => new StarRating)
    .service('CakesService', CakesService)
    .name;
