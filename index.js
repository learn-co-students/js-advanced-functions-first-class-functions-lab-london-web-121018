// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers){
    let newDrivers = [drivers[0], drivers[1]]
    return  newDrivers 
}

const returnLastTwoDrivers = function(drivers){
    let lastDrivers = [drivers[2], drivers[3]]
    return lastDrivers
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int){
    return function(){return int * 5}
}

const fareDoubler = function(fn){
    return fn *2
}

const fareTripler = function(fn){
    return fn *3
}

function fetchSpecifiedDrivers(drivers,fn){
    return fn(drivers);
}