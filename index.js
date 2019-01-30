// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  let firstTwo = drivers.slice();
  firstTwo = firstTwo.splice(0, 2);
  return firstTwo;
}

const returnLastTwoDrivers = function (drivers) {
  let lastTwo = drivers.slice();
  lastTwo = lastTwo.splice(2, 2);
  return lastTwo;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (multiplier) {
  return function (fare) {
    return fare * multiplier
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const fetchSpecifiedDrivers = function (drivers, selectDrivers) {
  return selectDrivers(drivers)
}
