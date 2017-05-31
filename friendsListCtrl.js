angular.module('friendsList').controller('friendsListCtrl', function ($scope) {
  $scope.friends = [
    {
      name: 'Michele',
      location: 'WA'
    },
    {
      name: 'Caitlin',
      location: 'NB'
    },
    {
      name: 'Emily',
      location: 'GA'
    },
    {
      name: 'Chandra',
      location: 'UT'
    },
    {
      name: 'Matracea',
      location: 'UT'
    }
  ];

  $scope.sayHi = function(friend) {
    alert('hi my name is' + friend.name);
  }
})
