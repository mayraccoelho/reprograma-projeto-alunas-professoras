const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require('body-parser');

const app = express()

//String de conexão com o mongodb, porta padrão: 27017
//mongo local "mongodb://localhost:27017/alunas"
//mongo nuvem marilia "mongodb://admin:reprograma1@ds225902.mlab.com:25902/reprogramameli"

mongoose.connect("mongodb+srv://admin:admin1304@cluster0-heovg.mongodb.net/alunas", { useNewUrlParser: true });

//representação da conexão com o banco de dados 
let db = mongoose.connection;

//após a conexão, caso ocorra algum erro, será logado o erro
db.on("error", console.log.bind(console, "connection error:"))

//uma vez que a conexão esteja aberta, será exebida essa mensagem
db.once("open", function () {
  console.log("conexão feita com sucesso.")
})

//rotas
const alunas = require("./routes/alunasRoute")
const professoras = require("./routes/professorasRoute")

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.use(bodyParser.json());

app.use("/alunas", alunas)
app.use("/professoras", professoras)

module.exports = app
