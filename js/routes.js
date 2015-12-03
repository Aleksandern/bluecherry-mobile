angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('menu.mainPage', {
      url: '/mainPage',
      views: {
        'menuContent' :{
            templateUrl: 'templates/mainPage.html',
            controller: 'mainPageCtrl'
        }
      }        
    })
        
      
    
      
    .state('menu', {
      url: '/menu',
      abstract:true,
      templateUrl: 'templates/menu.html'
    })
      
        
    .state('menu.addServer', {
      url: '/addServer',
      views: {
        'menuContent' :{
            templateUrl: 'templates/addServer.html',
            controller: 'addServerCtrl'
        }
      }        
    })
        
    .state('menu.settingsPage', {
      url: '/settingsPage',
      views: {
        'menuContent' :{
            templateUrl: 'templates/settingsPage.html',
            controller: 'settingsPageCtrl'
        }
      }        
    })
    
      
        
    .state('menu.serverPage', {
      url: '/serverPage',
      views: {
        'menuContent' :{
            templateUrl: 'templates/serverPage.html',
            controller: 'serverPageCtrl'
        }
      }        
    })

    .state('menu.cameraArchive', {
      url: '/cameraArchive',
      views: {
        'menuContent' :{
            templateUrl: 'templates/cameraArchive.html',
            controller: 'cameraArchiveCtrl'
        }
      }        
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/menu/mainPage');

});
