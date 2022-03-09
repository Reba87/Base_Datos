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

/* RETO 1*/
let param =[]
let sql = "SELECT firts_name, last_name,title FROM students JOIN marks ON (students.students_id = marks.student_id) JOIN subjects ON (marks.subject_id = subjects.id)"
conection.query(sql,param, function(err, result){
    if (err) {
        console.log(err)
    } else {
        console.log("Datos")
        console.log(result)
    }
})

/* RETO 2*/
let param2 =[]
let sql2 = "SELECT first_name, last_name,title FROM teacher JOIN subject_teacher ON (teacher.id = subject_teacher.id_subject) JOIN subjects ON (subject_teacher.id_subject = subjects.id)"
conection.query(sql2,param2, function(err, result){
    if (err) {
        console.log(err)
    } else {
        console.log("Datos")
        console.log(result)
    }
})


/* RETO 3*/
let param3 =[]
let sql3 = "SELECT first_name AS name_profe, last_name AS last_Name_profe,title AS subject,student_id FROM teacher JOIN subject_teacher ON (teacher.id = subject_teacher.id_subject) JOIN subjects ON (subject_teacher.id_subject = subjects.id) JOIN marks ON(subjects.id = marks.student_id)"

conection.query(sql3,param3, function(err, result){
    if (err) {
        console.log(err)
    } else {
        console.log("Datos")
        console.log(result)
    }
})




conection.end()


