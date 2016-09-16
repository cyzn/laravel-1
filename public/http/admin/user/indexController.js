define(['app',dataPath(),'admin/public/headerController','admin/public/leftController'], function (app,datas) {
    app.register.controller('admin-user-indexCtrl', ["$scope",'$rootScope', 'Model','View','$alert', function ($scope,$rootScope,Model,View,$alert) {
        $scope.data_key = '/admin/user/list';
        $rootScope = View.withCache(datas.global,$rootScope,1);
        $scope = View.withCache(datas.list,$scope);


        /* 条件查询数据 */
        $scope.getData = Model.getData;
        $scope.ids = [];
        $scope.allIds = [];
        /* 删除数据 */
        $scope.delete = Model.delete;
        $scope.selectAllId = Model.selectAllId;
    }]);
})



