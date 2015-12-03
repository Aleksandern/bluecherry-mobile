angular.module('app.controllers', [])

.controller('appController', function($scope) {
})
  
.controller('mainPageCtrl', function($scope) {
    $scope.listCanSwipe = true;

    $scope.addServer = function () {
        alert('ok');
    }
})
  
.controller('addServerCtrl', function($scope) {
})
  
.controller('settingsPageCtrl', function($scope) {
})

.controller('cameraArchiveCtrl', function($scope, Records) {
    $scope.records = Records.all();
    $scope.record_selected = null;

    $scope.selectRecord = function (item) {
        $scope.record_selected=item;
    }

    $scope.play = function () {
        alert('Fullscreen player.');
    }
})
      
.controller('serverPageCtrl', function($scope, Cameras) {
    $scope.cameras = Cameras.all();
    $scope.camera_selected = null;

    $scope.play = function () {

        for (var i = 0; i < $scope.cameras.length; i++) {
            if ($scope.cameras[i].id === $scope.camera_selected.id) {
                var video = angular.element(document.getElementById('camera-'+$scope.cameras[i].id));

                if ((typeof $scope.cameras[i].play == 'undefined') || ($scope.cameras[i].play == 0)) {
                    $scope.cameras[i].play = 1;
                    video[0].play();
                } else {
                    $scope.cameras[i].play = 0;
                    video[0].pause();
                }
            }
        }
        //alert($scope.camera_selected.id);
    }

    $scope.selectCamera = function (item) {
        $scope.camera_selected=item;
    }

    $scope.cameraTap = function () {
        //alert('asd');
    }

    $scope.playerTap = function () {
        alert('fullscreen');
    }
})
 
