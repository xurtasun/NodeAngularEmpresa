
var Empresa = require('./modelo/empresa');
var Controller = require ('./controller');




module.exports = function(app) {

    // devolver todos los Empresas
    app.get('/api/empresa', Controller.getEmpresa);
    // Crear una nueva Empresa
    app.post('/api/empresa', Controller.setEmpresa);
    // Modificar los datos de una Empresa
    app.put('/api/empresa/:empresa_id', Controller.updateEmpresa);
    // Borrar una Empresa
    app.delete('/api/empresa/:empresa_id', Controller.removeEmpresa);
    // application
    app.get('*', function(req, res) {
        res.sendfile('./public/index2.html'); // Carga única de la vista
    });
};


