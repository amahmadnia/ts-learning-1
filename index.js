function vcl(vehicle) {
    console.log(vehicle);
}
// vcl({ make: true, model: 'd34f', year: 434 });
/////////////////////////
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.beep = function () {
        console.log('beep');
    };
    return Car;
}());
var myCar = new Car(true, 'jajaj', 3344);
myCar.beep();
function xf(myCar) {
    console.log(myCar.model);
}
xf(myCar);
