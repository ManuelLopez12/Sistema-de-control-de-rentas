const express = require("express");
const bodyParser = require('body-parser')
const cors = require("cors");

const app = express();
const config = require("../config");
const router = require("./API/EndPoint");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({
    origin:['*', '*'],
    methods:['GET', 'PUT', 'DELETE', 'PATCH'],
    credentials: true,
}));

app.use("/", router);

app.listen(config.PORT,()=>{
    console.log("Escuchando desde el puerto "+config.PORT);
});

