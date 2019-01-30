// Code your solution in this file!

const returnFirstTwoDrivers = drivers => {
    return drivers.filter(d => d === drivers[0] || d === drivers[1])
}

const returnLastTwoDrivers = drivers => {
    return drivers.filter(d => d === drivers[drivers.length - 2] || d === drivers[drivers.length - 1])
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = multiplier => (fare => fare * multiplier)



fareDoubler = createFareMultiplier(2)


fareTripler = createFareMultiplier(3)

const fetchSpecifiedDrivers = (array, cb) => {
    return cb(array)
}