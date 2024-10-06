//|||||||||||two
interface Vehicle {
  make: boolean;
  model: string;
  year: number;
}

function vcl(vehicle: Vehicle) {
  console.log(vehicle);
}

// vcl({ make: true, model: 'd34f', year: 434 });

/////////////////////////
class Car implements Vehicle {
  make: boolean;
  model: string;
  year: number;

  constructor(make: boolean, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  beep(): void {
    console.log('beep');
  }
}

const myCar = new Car(true, 'jajaj', 3344);
myCar.beep();

function xf(myCar: Car): void {
  console.log(myCar.model);
}
xf(myCar);
