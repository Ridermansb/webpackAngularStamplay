(function () {

    var Service = function ($rootScope, $q) {

            return {
                login: function (email, password) {
                    var deferred = $q.defer();

                    var user = new Stamplay.User().Model;

                    if (user.isLogged()) {
                        user.logout();
                    }

                    user.login(email, password)
                        .then(function () {
                            var emailVerified = user.get('emailVerified');
                            var displayName = user.get('displayName');

                            if (emailVerified === false) {
                                deferred.reject(new Error("E-mail was not verified!"));
                            } else if (!user.isLogged()) {
                                deferred.reject(new Error("Not able to made a logon, user was not login"));
                            } else if (!displayName) {
                                deferred.reject(new Error("Cant get user data like 'displayName'"));
                            } else {
                                $rootScope.user = {
                                    displayName: user.get('displayName'),
                                    id: user.get('id'),
                                    email: user.get('email'),
                                    emailVerified: emailVerified
                                };

                                deferred.resolve($rootScope.user);
                            }
                        })
                        .catch(function (err) {
                            deferred.reject(new Error(err.responseText));
                        });

                    return deferred.promise;
                }
            }
        }
        ;

    Service.$inject = ['$rootScope', '$q'];
    module.exports = Service;
})();
