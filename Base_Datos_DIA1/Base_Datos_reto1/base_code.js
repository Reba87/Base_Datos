let mysql = require("mysql2")
let conection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'reba1302',
        database: `codenotch`,
        
    });

conection.connect(function (error){
    if (error) {
        console.error(error)
    } else{
        console.log("conexion correcta.")
    }
})

/* ALTERANDO TABLA ALUMNOS, ELIMINAMOS LA COLUMNA QUE INDICA EL CURSO QUE ESTA CURSANDO*/

let sql = "ALTER TABLE alumno DROP COLUMN curso_de" ;

conection.query(sql, function (err, result){
    if (err) {
        console.log(err)
    } else {
        console.log("Columna eliminada")
        console.log(result)
    }
   
})
conection.end(sql)


/* ALTERANDO TABLA MATERIA, AÑADIMOS LA COLUMNA QUE INDICA EL PROFESOR*/

let sql2 = "ALTER TABLE materia ADD COLUMN profesor_materia VARCHAR()" ;

conection.query(sql2, function (err, result){
    if (err) {
        console.log(err)
    } else {
        console.log("Columna AÑADIDA")
        console.log(result)
    }
})
conection.end(sql2)

/* ELIMINANDO LA TABLA PROFESOR*/

let sql3 = "DROP TABLE profesores" ;

conection.query(sql3, function (err, result){
    if (err) {
        console.log(err)
    } else {
        console.log("Columna ELIMINADA")
        console.log(result)
    }
})
conection.end(sql3)