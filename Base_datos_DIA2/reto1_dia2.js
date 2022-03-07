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



let sql1 ="DELETE FROM marks WHERE date > \"2021-01-01\" AND date < \"2021-12-31\" AND mark > 5";
conection.query(sql1, function(err, result){
    if (err) {
        console.log(err)
    } else {
        console.log("Dato borrado")
        console.log(result)
    }
})


let sql2 = "SELECT * FROM students WHERE admission_date > \"2022-01-01\"";
conection.query(sql2, function(err, result){
    if (err) {
        console.log(err)
    } else {
        console.log("Datos")
        console.log(result)
    }
})


let sql3 = "SELECT id_subject, COUNT(id_teacher) AS teacher_subjects FROM subject_teacher group by id_subject;";
conection.query(sql3, function(err, result){
    if (err) {
        console.log(err)
    } else {
        console.log("Datos")
        console.log(result)
    }
})





