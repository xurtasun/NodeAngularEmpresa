angular.module('MainApp', [])

function mainController($scope, $http) {
    $scope.newEmpresa = {};
    $scope.empresas = {};
    $scope.selected = false;

    // Obtenemos todos los datos de la base de datos
    $http.get('/api/empresa').success(function(data) {
        $scope.empresas = data;
    })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // Función para registrar a una empresa
    $scope.registrarEmpresa = function() {
        $http.post('/api/empresa', $scope.newEmpresa)
            .success(function(data) {
                $scope.newEmpresa = {}; // Borramos los datos del formulario
                $scope.empresas = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // Función para editar los datos de una empresa
    $scope.modificarEmpresa = function(newEmpresa) {
        $http.put('/api/empresa/' + $scope.newEmpresa._id, $scope.newEmpresa)
            .success(function(data) {
                $scope.newEmpresa = {}; // Borramos los datos del formulario
                $scope.empresas = data;
                $scope.selected = false;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // Función que borra un objeto empresa conocido su id
    $scope.borrarEmpresa = function(newEmpresa) {
        $http.delete('/api/empresa/' + $scope.newEmpresa._id)
            .success(function(data) {
                $scope.newEmpresa = {};
                $scope.empresas = data;
                $scope.selected = false;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // Función para coger el objeto seleccionado en la tabla
    $scope.selectCompany = function(empresa) {
        $scope.newEmpresa = empresa;
        $scope.selected = true;
        console.log($scope.newEmpresa, $scope.selected);
    };
}