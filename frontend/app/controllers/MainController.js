var mainControllers = function ($scope, $location, ngDialog, Auth) {

    $scope.openLoginDlg = function () {
        ngDialog.open({
            template: 'loginDlg',
            className: 'ngdialog-theme-default',
            controller: 'MainCtrl'
        });
    };

    $scope.login = function () {

        Auth.login({
                username: $scope.username,
                password: $scope.password
            },
            function(res) {
                ngDialog.closeAll();
                $location.path('/'+res);
            },
            function () {
                $rootScope.error = "Failed to login";
        });
    };
};

app.controller('MainCtrl', mainControllers);