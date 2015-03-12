/**
 * Created by williambjohnson on 2/28/15.
 */
var app = angular.module('github-api');

app.controller('GitHubController', function($scope, githubService){
  $scope.getUserData = function(){
    return githubService.getUser($scope.searchText).then(function(res) {
      return $scope.user = res.data;
    });
  }
});