/**
 * Created by williambjohnson on 2/28/15.
 */
var app = angular.module('github-api');

var id = "3257a93c96b37cf80ae9";
var sec = "45becb1dda65f5af435cb81048b8791bd02440f9";
var param = "?client_id=" + id + "&client_secret=" + sec;

app.service('githubService', function ($http) {

  this.getUser = function(username) {
  return $http({'method': 'GET', 'url': 'https://api.github.com/users/' + username + param})
    .then(function (res) {
      return res;
    });
  }
});