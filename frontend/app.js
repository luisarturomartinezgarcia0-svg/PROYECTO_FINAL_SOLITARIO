const express = require("express");
const mysql = require("mysql2");

const app = express();

const conexion = mysql.createConnection({
    host: "remote",
    user: "root",
    password: "02161800",
    database: "jardin_de_daisiry"
});

conexion.connect((error) => {
    if (error) {
        console.log("Error de conexión:", error);
        return;
    }
    console.log("Conexión exitosa a MySQL");
});

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
});