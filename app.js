/* 
 * 
 * Priemira vez usando mongodb, isso aqui foi um teste simples
 * que eu achei em um curso de node.js no youtube.
 * 
 * Link do vídeo: https://youtu.be/h4lS9V3FCRQ
 * 
 */



const mongoose = require("mongoose");

// Configurando o mongoose:
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/aprendendo", {useNewUrlParser: true}).then(() => { // Conectando a database;
    console.log("MongoDB conectado!");
}).catch((err) => {
    console.log("Teve um erro ao se conectar a database: "+err);
})

// Models - Usuários
//Definindo
const UserShemer = mongoose.Schema({

    nome: {
        type: String,
        require: true
    },
    sobrenome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    },
    pais: {
        type: String
    }

})

//Collection
mongoose.model("usuarios", UserShemer);

const Claudio = mongoose.model("usuarios")

new Claudio({
    nome: "Claudio",
    sobrenome: "Castro",
    email: "claudiocastro754@hotmail.com",
    idade: 47,
    pais: "Brasil"
}).save().then(() => { // Salvando o usuário
    console.log("Usuário registrado com sucesso!")
}).catch((err) => {
    console.log("Houve um erro ao registar o usuário: "+err)
})
