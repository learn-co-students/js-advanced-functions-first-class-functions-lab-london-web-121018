// Code your solution in this file
const returnFirstTwoDrivers = function(array) {
  return array.slice(0,2)
};

const returnLastTwoDrivers = function(array){
  return array.slice(array.length-2)
}

const createFareMultiplier = function(multiplier){
    return function(num) {
      return num * multiplier
    }
}

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const fetchSpecifiedDrivers = function(array, f){
  return f(array)

}
