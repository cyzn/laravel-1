define(['app', dataPath(), 'admin/public/headerController', 'admin/public/leftController'], function (app, datas) {
    app.register.controller('admin-menu-indexCtrl', ["$scope", '$rootScope', 'Model', 'View', '$alert',
        function ($scope, $rootScope, Model, View, $alert) {
            $scope.data_key = '/admin/menu/list';
            $scope = View.withCache(datas.list, $scope);
            $rootScope = View.with(datas.global, $rootScope);
            /* 条件查询数据 */
            $scope.getData = Model.getData;
            $scope.upTop = Model.upTop;
            $scope.ids = [];
            $scope.allIds = [];
            /* 删除数据 */
            $scope.delete = Model.delete;
            $scope.selectAllId = Model.selectAllId;
        }]);
})



