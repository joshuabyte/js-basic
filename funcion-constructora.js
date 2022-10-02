function car(brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year = year;
}

var newCar = new car("Tesla", "Model 3", "2022");
var newCar2 = new car("Tesla", "Model X", "2021");
var newCar3 = new car ("Toyota", "Corolla", "2022");

function auto (MARCA, MODELO, ANNIO){
    this.marca = MARCA;
    this.modelo = MODELO;
    this.annio = ANNIO;
  }
  var autos = [];
  for(let i = 0 ; i < 30 ; i++){
    var marca = prompt("Ingresa la marca del auto");
    var modelo = prompt("Ingresa el modelo del auto");
    var annio = prompt("Ingresa el año del auto");
    autos.push(new auto (marca, modelo, annio));
  }
  
  for(let i = 0 ; i < autos.length ; i++){
    console.log(autos[i]);
  }