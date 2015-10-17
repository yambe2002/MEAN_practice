angular.module('app').controller('mvMainCtrl', function($scope){
  $scope.courses = [
    {name: 'course A', featured: true, published: new Date('1977-03-18')},
    {name: 'course B', featured: true, published: new Date('1978-03-18')},
    {name: 'course C', featured: false, published: new Date('1979-03-18')},
    {name: 'course D', featured: false, published: new Date('1980-03-18')},
    {name: 'course X', featured: false, published: new Date('1981-03-18')}
  ];
});