//carDetail es un metodo dentro del objeto

var myCar = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    carDetail: function(){
        console.log(`Car is a ${this.model} ${this.year}`);
    }
};

//Para traer valores dentro del objeto usar lo siguiente

myCar.brand
myCar.model
myCar.year

//Para acceder al metodo carDetail llamamos el objeto.metodo()

myCar.carDetail()
