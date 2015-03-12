angular.module('pending', []);

  app.directive('pending', function () {
  return {
    restrict: 'EA',
    scope: {
      request: '&'
    },
    link: function (scope, elem, attrs) {
      elem.bind('click', function () {

        scope.originalText = elem[0].textContent;
        scope.originalInnerHtml = elem[0].innerHtml;

        elem[0].textContent = '';
        elem[0].innerHtml = '<img src="ajax-loader.gif" width=10 height=10>';

        scope.request().then(function() {
          elem[0].textContent = scope.originalText;
          elem[0].innerHtml = scope.originalInnerHtml;
            });
      });
    }
  };
});

//"E" is for element, "A" is for attribute, "C" is for class, and "M" is for comment.
// Attributes are going to be the main ones as far as adding behaviors that get used the most.
// If you don't specify the restrict property it will default to "A"