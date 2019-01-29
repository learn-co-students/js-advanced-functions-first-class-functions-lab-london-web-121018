// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
  return [...array.slice(0, 2)];
}

const returnLastTwoDrivers = array => {
  return [...array.slice(array.length - 2)];
}

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
]

const createFareMultiplier = num => {
  return function(fare) {
    return fare * num;
  }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const fetchSpecifiedDrivers = (array, cb) => {
  return cb(array)
}
