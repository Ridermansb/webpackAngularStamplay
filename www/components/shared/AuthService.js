(function () {

    var Service = function ($rootScope) {

            var user = new Stamplay.User().Model;

            function updateCurrentUser() {
                return user.currentUser().then(function () {

                    var emailVerified = user.get('emailVerified');
                    if (emailVerified === false) {
                        throw "E-mail was not verified!";
                    }

                    if (!user.isLogged()) {
                        throw "Not able to made a logon, user was not loggin";
                    }

                    var displayName = user.get('displayName');
                    if (!displayName) {
                        throw "Cant get user data like 'displayName'";
                    }

                    $rootScope.user = {
                        displayName: user.get('displayName'),
                        id: user.get('id'),
                        email: user.get('email'),
                        emailVerified: emailVerified
                    };
                    return user.isLogged();
                });
            }

            return {
                login: function (email, password) {
                    if (user.isLogged()) {
                        user.logout();
                    }

                    user = new Stamplay.User().Model;
                    return user.login(email, password)
                        .then(updateCurrentUser);
                }
            }
        }
        ;

    Service.$inject = ['$rootScope'];
    module.exports = Service;
})();
