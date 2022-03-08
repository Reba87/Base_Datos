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


/*RETO 1-1*/ 
let sql0 ="SELECT AVG(mark) FROM marks WHERE subject_id = 1 ";
conection.query(sql0, function(err, result){
    if (err) {
        console.log(err)
    } else {
        console.log("Dato borrado")
        console.log(result)
    }
})


/*RETO 1-2*/ 

let sql1 ="SELECT count(*) as numOfstudents from students ";
conection.query(sql1, function(err, result){
    if (err) {
        console.log(err)
    } else {
        console.log("Dato borrado")
        console.log(result)
    }
})

/*RETO 1-3*/ 

            let sql2 ="SELECT * from grupos";
            conection.query(sql1, function(err, result){
                if (err) {
                    console.log(err)
                } else {
                    console.log("Dato borrado")
                    console.log(result)
                }
            })


 /*RETO 1-3*/ 

let sql3 ="DELETE FROM marks WHERE date > \"2021-01-01\" AND date < \"2021-12-31\" AND mark > 5";
conection.query(sql3, function(err, result){
    if (err) {
        console.log(err)
    } else {
        console.log("Dato borrado")
        console.log(result)
    }
})


/*RETO 1-4*/ 

let sql4 = "SELECT * FROM students WHERE admission_date > \"2022-01-01\"";
conection.query(sql4, function(err, result){
    if (err) {
        console.log(err)
    } else {
        console.log("Datos")
        console.log(result)
    }
})


let sql5 = "SELECT id_subject, COUNT(id_teacher) AS teacher_subjects FROM subject_teacher group by id_subject;";
conection.query(sql5, function(err, result){
    if (err) {
        console.log(err)
    } else {
        console.log("Datos")
        console.log(result)
    }
})





