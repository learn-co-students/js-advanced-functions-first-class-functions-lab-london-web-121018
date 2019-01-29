// Code your solution in this file!
const returnFirstTwoDrivers = ((drivers) => {
  firstTwo = []
  firstTwo.push(drivers[0])
  firstTwo.push(drivers[1])
  return firstTwo
})

const returnLastTwoDrivers = ((drivers) => {
  lastTwo = []
  lastTwo.push(drivers[drivers.length - 2])
  lastTwo.push(drivers[drivers.length - 1])
  return lastTwo
})


let selectingDrivers = []
selectingDrivers[0] = returnFirstTwoDrivers
selectingDrivers[1] = returnLastTwoDrivers


// const createFareMultiplier = num => {
//   return value => value * num
// }

const createFareMultiplier = ((num) => {
  return ((value) => {
    return value * num
  })
})

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const fetchSpecifiedDrivers = ((arrayOfDrivers, func) => {
  if (func === returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(arrayOfDrivers)
  }
  else if (func === returnLastTwoDrivers) {
    return returnLastTwoDrivers(arrayOfDrivers)
  }
})
