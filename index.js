// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  array = [];
  array.push(drivers[0]);
  array.push(drivers[1]);
   return array;
 }

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplyValue) {
  return function(value) {
    return value * multiplyValue;
  };
};

function fareDoubler(fares) {
  return fares * 2;
}

function fareTripler(fares) {
  return fares * 3;
}

const fetchSpecifiedDrivers = function (drivers, whichDrivers) {
  return whichDrivers(drivers);
};
