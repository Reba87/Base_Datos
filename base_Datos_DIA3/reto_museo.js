let mysql = require("mysql2")
let conection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'reba1302',
        database: `museo`,
        
    });

conection.connect(function (error){
    if (error) {
        console.error(error)
    } else{
        console.log("conexion correcta.")
    }
})

/* RETO 1*/
let param =[]
let sql = "SELECT status,ubicacion,fecha_regreso,nombre AS nombre_dueño, apellido AS apellido_dueño,email AS email_dueño FROM estado JOIN piezas ON (estado.id = piezas.id_dueno) JOIN dueno ON (piezas.id_dueno = dueno.id) WHERE status LIKE \"%mo\""
conection.query(sql,param, function(err, result){
    if (err) {
        console.log(err)
    } else {
        console.log("Datos")
        console.log(result)
    }
})

/* RETO 2*/
let param1 =[]
let sql1 = "SELECT COUNT(id_coleccion) AS cantidad, tipo FROM piezas JOIN coleccion ON (piezas.id_coleccion = coleccion.id) GROUP BY id_coleccion ORDER BY cantidad DESC"
conection.query(sql1,param1, function(err, result){
    if (err) {
        console.log(err)
    } else {
        console.log("Datos")
        console.log(result)
    }
})

conection.end()