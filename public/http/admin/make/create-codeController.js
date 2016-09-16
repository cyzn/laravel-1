/**
 * Created by zhangshiping on 16-5-12.
 */
//require.s.contexts._.config.paths.data = '/Admin/index';
//dump(require.s.contexts._.defined.data);

define(['app',dataPath(),'admin/public/headerController','admin/public/leftController'], function (app,datas) {
    app.register.controller('admin-create-codeCtrl', ["$scope", '$rootScope','View','$alert','$http', function ($scope,$rootScope,View,$alert,$http) {
        $rootScope = View.withCache(datas.global,$rootScope,1);
        $scope = View.withCache(datas,$scope);

        //创建代码
        $scope.create = function(param){
            //命令拼接
            $scope.artisan = param.artisan;
            var option = '';
            for (var i in param){
                if(i=='artisan'){
                    continue;
                }
                if(i.indexOf('--')!=-1 && param[i]){
                    if(param[i]===true){
                        option += ' '+i;
                    }else {
                        option += ' '+i+'='+param[i];
                    }

                    continue;
                }
                if(param[i]){
                    $scope.artisan += ' '+param[i];
                }
            }
            $scope.artisan += option;
            $http({
                    method: 'POST',
                    url: '/data/admin/make/exe',
                    data: param}
            ).error(function(){
                $alert({
                    'title':'提示',
                    'content':'操作失败!',
                    'placement':'bottom-right',
                    'type':'danger',
                    'duration':3,
                    'show':true
                });
            });
        };
    }]);
})



