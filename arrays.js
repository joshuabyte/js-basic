var fruits = ["Apple", "Bananas", "Cherry", "Stawberry"];

//Metodo push agrega otro elemento al final del array
var moreFruits = fruits.push("Grapes");

//Metodo pop quita el elemento que se añade con push
var last = fruits.pop("Grapes");

//Metodo unshift agrega mas elementos al inicio de un array
var newLength = fruits.unshift("Oranges");

//Metodo shift elimina el elemento que shift agrega al inicio
var deleteFruit = fruits.shift("Oranges");

//Metodo indexOf busca el index de un elemento dentro de un array
var position = fruits.indexOf("Cherry");

//Imprime el array completo
console.log(fruits);

//Imprime la longitud del array
console.log(fruits.length);

//Asi se accede a un elemento especifico dentro del array
console.log(fruits[0]);

