//Hoisting en variables

var myName = undefined;
console.log(myName + " Soy ese hoisting");
myName = "Edgar";

//Hoisting en funciones

hey();

function hey() {
    console.log("Hola " + myName);
}