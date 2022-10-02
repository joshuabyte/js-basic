var students = ["Maria", "Sergio", "Rosamelano", "Daniel"];

function greetStudents(student){
    console.log(`Hola, ${student}`);
}

while(students.length > 0){
    var student = students.shift();
    greetStudents(student);
}