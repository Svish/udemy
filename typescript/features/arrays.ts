const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(myCar);
carMakers.push('must-be-string');

// Help with functions
carMakers.map(car => car.toUpperCase());

// Flexible types
const importantDates: (string | Date)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());
