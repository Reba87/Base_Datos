let mysql = require("mysql2")
let conection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'reba1302',
        database: `reto_2`,
        
    });

conection.connect(function (error){
    if (error) {
        console.error(error)
    } else{
        console.log("conexion correcta.")
    }
})


let sql1 = " SELECT student_id, mark FROM marks WHERE student_id < 5 OR mark > 8 AND date < \"2021-12-31\""
conection.query(sql1, function(err, result){
    if (err) {
        console.log(err)
    } else {
        console.log("Datos")
        console.log(result)
    }
})


let sql2 = "SELECT AVG(mark) AS media_nota, subject_id FROM marks WHERE date BETWEEN \"2020-01-01\" AND \"2020-12-31\" GROUP BY subject_id"
conection.query(sql2, function(err, result){
    if (err) {
        console.log(err)
    } else {
        console.log("Datos")
        console.log(result)
    }
})


let sql3 = "SELECT AVG (mark) AS mediaPorFecha FROM marks WHERE date < \"2021-01-01\""
conection.query(sql3, function(err, result){
    if (err) {
        console.log(err)
    } else {
        console.log("Datos")
        console.log(result)
    }
})

conection.end()





