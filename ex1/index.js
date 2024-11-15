const { circumference, area } = require('./circle');

const radius = 3;
console.log(`The circumference of a circle of radius ${radius} is`, circumference(radius));
console.log(`Its area is`, area(radius));