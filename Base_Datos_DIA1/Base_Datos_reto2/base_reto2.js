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


/* INSERTANDO UN NUEVO PROFESOR*/

let sql ="INSERT INTO teacher (first_name, last_name) VALUES  ('Juanito', 'Pereira')"
         

conection.query(sql, function (err, result){
    if (err) {
        console.log(err)
    } else{
        console.log("Dato insertado")
        console.log(result)
    }
});



/* INSERTANDO UNA NUEVA MATERIA*/

let sql2 =
         "INSERT INTO subjects (title) VALUES  ('Discord')"
         

conection.query(sql2, function (err, result){
    if (err) {
        console.log(err)
    } else{
        console.log("Dato insertado")
        console.log(result)
    }
});

/* INSERTANDO UN NUEVO ESTUDIANTE*/
let sql3 =
"INSERT INTO students (firts_name,last_name,grupo_id) VALUES ('Rafael','Aponte',10)"
         
conection.query(sql3, function (err, result){
    if (err) {
        console.log(err)
    } else{
        console.log("Dato insertado")
        console.log(result)
    }
});


/* INSERTANDO UNA NUEVA CALIFICACION AL NUEVO ALUMNO*/
let sql4 =
"INSERT INTO marks (student_id,subject_id,date,mark) VALUES  (10,2,\"2022/05/20\",8)"
         
conection.query(sql4, function (err, result){
    if (err) {
        console.log(err)
    } else{
        console.log("Dato insertado")
        console.log(result)
    }
});


/* SELECCIONANDO PRIMER NOMBER Y APELLIDO DE ALUMNOS*/
let sql5 = "SELECT firts_name, last_name FROM students";
conection.query(sql5, function (err, result){
        if (err) {
            console.log(err)
        } else{
            console.log("Dato")
            console.log(result)
        }
    });


/* SELECCIONANDO TODOS LOS DATOS DE LOS PROFESORES*/    
    let sql6 = "SELECT * FROM teacher";
conection.query(sql6, function (err, result){
        if (err) {
            console.log(err)
        } else{
            console.log("dato")
            console.log(result)
        } 
    });


/* ELIMINANDO DATOS QUE SEAN MAYORES A 10 AÑOS*/    

    let sql7 ="DELETE FROM marks WHERE date < \"2012/03/07\"";
    conection.query(sql7, function(err, result){
        if (err) {
            console.log(err)
        } else {
            console.log("Dato borrado")
            console.log(result)
        }
    })

/*CAMBIANDO NOTA A LOS ALUMNOS CON NOTA MENOR A 5*/

    let sql8 ="UPDATE marks SET mark = 5 WHERE mark < 5 ";
    conection.query(sql8, function(err, result){
        if (err) {
            console.log(err)
        } else {
            console.log("Dato actualizado")
            console.log(result)
        }
    })