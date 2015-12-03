angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.factory('Cameras', [function(){
  var cameras = [
    {
        id: 1,
        title: 'Outdoor camera',
        //link: 'http://kameravseti.ru:8080/u3140348585212/index.m3u8'
        link: 'http://html5player.ru/html5.mp4'
    },
    {
        id: 2,
        title: 'Euronews',
        //link: 'http://kameravseti.ru:8080/u3143524645718/index.m3u8'
        link: 'http://www.w3schools.com/html/mov_bbb.mp4'
    }
    ];
    return {
    all: function() {
      return cameras;
    },
    get: function(id) {
      for (var i = 0; i < cameras.length; i++) {
        if (cameras[i].id === parseInt(id)) {
          return cameras[i];
        }
      }
      return null;
    }
  };


}])

.factory('Records', [function(){
  var records = [
    {
        id: 1,
        prior: '1111',
        date: '05.05.2015 12:36'
    },
    {
        id: 2,
        prior: '222',
        date: '05.06.2015 13:47'
    },
    {
        id: 3,
        prior: '333',
        date: '05.07.2015 14:58'
    },
    {
        id: 4,
        prior: '444',
        date: '05.08.2015 15:69'
    }
    ];
    return {
    all: function() {
      return records;
    }
  };


}])

.service('BlankService', [function(){

}])

.filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}]);


