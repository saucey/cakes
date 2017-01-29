import '../styles/styles.scss';
import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './app.config';
import home from './modules/home';
import list from './modules/list';
import create from './modules/create';
import uiBootstrap from 'angular-ui-bootstrap';

angular.module('app', [uirouter, home, list, create, uiBootstrap])
    .config(routing);



