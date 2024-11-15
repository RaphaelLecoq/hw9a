const moment = require('moment');

console.log(moment().format("dddd, MMMM Do YYYY"));

const startDate = moment("1976-11-26");
const yearsSince = moment().diff(startDate, 'years');
console.log(`${yearsSince} years ago`);