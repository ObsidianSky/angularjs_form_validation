var app = angular.module('app', []);

app.controller('regForm', function($scope) {
    $scope.countries = ['Ukraine', 'England', 'Japan', 'USA'];
});

app.directive('validate', function() {
    return {
        restrict: 'A',
        require: '^form',
        link: function(scope, el, attr, formCtrl){
            var input = angular.element(el[0].querySelector('[name]'));
            var inputName = input.attr('name');

            input.bind('blur', function() {
                var ngInput = formCtrl[inputName];
                var valid = ngInput.$valid;

                if(valid) {
                  el.removeClass('has-error').addClass('has-success')
                } else {
                  el.addClass('has-error').removeClass('has-success')
                }
            });
        }
    }
});