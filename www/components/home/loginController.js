(function () {

    var Controller = function ($scope, Auth) {

        $scope.logon = function () {
            Auth.login($scope.email, $scope.password)
                .then(function (user) {
                    console.log('Success logon with ', user.displayName);
                })
                .catch(function (err) {
                    if (typeof(err) === "string") {
                        $scope.errorMessage = err;
                    } else {
                        $scope.errorMessage = err.message;
                    }

                    $scope.$apply();
                    console.error('Ops.. error :(', err);
                });
        }

    };

    Controller.$inject = ['$scope', 'Auth'];
    module.exports = Controller;

})();
