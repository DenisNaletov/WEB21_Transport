const garage = new MyGarage();
const myCar = new Car(111, 'Nissan Xtrail', 2000, 150000, 5);
const myTrack = new Trucks(222, 'Scania', 2018, 350000, 25000);
const myScutter = new ElectroScutter(333, 'Wings', 20221, 50000);
garage.addTransport(myCar);
garage.addTransport(myTrack);
garage.addTransport(myScutter);

garage.getAllTransport().forEach(item => console.log(item))
console.log(garage)

