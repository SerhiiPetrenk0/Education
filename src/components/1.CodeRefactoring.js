/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
//Clean Code: Variables - Beau teaches JavaScript
//https://www.youtube.com/watch?v=b9c5GmmS7ks&list=PLWKjhJtqVAbkK24EaPurzMq0-kw5U9pJh&index=1
var yearMonthDay = moment().format('YYYY/MM/DD');

const FIRST_US_PRESIDENT = "George Washington";

getUser();

var MINUTES_IN_A_YEAR = 525600
for (var i = 0; i < MINUTES_IN_A_YEAR; i++) {
  runCronJob();
}

const cityStateRegex = /^(.+)[,\\s]+(.+?)\s*(\d{5})?$/;
const match = cityStateRegex.match(cityStateRegex);
const city = match[1];
const state = match[2]
saveCityState(city, state);

var Car = {
  make: 'Honda',
  model: 'Accord',
  color: 'Blue'
};

function paintCar(car) {
  car.color = 'Red';
}

function createMicrobrewery(name) {
  var breweryName = name || 'Hipster Brew Co.';
}
