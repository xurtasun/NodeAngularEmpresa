
var mongoose = require('mongoose');


//Definir el schema de usuario

var empresaSchema = {
    nombre:String,
    username:String,
    descripcion:String,
    email:String,
    password:String
};


module.exports = mongoose.model("Empresa", empresaSchema);

