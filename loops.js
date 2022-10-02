var students = ["Maria", "Sergio", "Rosa", "Daniel"];

//Se crea funcion con backticks para concatenar el string con el student. Los backticks los tengo en la tecla esc.
function greetStudents(student){
    console.log(`Hola, ${student}`);
}

for(var i = 0; i < students.length; i++){
    greetStudents(students[i]);
}

//Segunda forma de ejecutar la misma funcion
var students = ["Maria", "Sergio", "Rosa", "Daniel"];

//Se crea funcion con backticks para concatenar el string con el student. Los backticks los tengo en la tecla esc.
function greetStudents(student){
    console.log(`Hola, ${student}`);
}

for(var student of students){
    greetStudents (student);
}