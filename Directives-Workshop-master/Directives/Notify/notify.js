/**
 * Created by williambjohnson on 2/26/15.
 */
angular.module('notify');

  app.notify('pending', function ($q, $timeout) {

    return {
      restrict: 'EA',
      scope: {
        request: '&'
      },
      link: function ($scope, elem, attrs) {
        elem.bind('click', function () {
          elem.attr('disabled', 'disabled')
          $('#pendingForm').append('<img id="spinner" src="../Pending/ajax-loader.gif" alt="loading" />');
          $timeout(function () {
              $scope.request().then(function (data) {
                elem.removeAttr('disabled')
                $('#spinner').remove();
              });
            },
            1000);
        });

      }
}
})
;