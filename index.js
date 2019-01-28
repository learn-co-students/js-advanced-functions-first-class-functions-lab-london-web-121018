// Code your solution in this file!

// function returnFirstTwoDrivers(drivers) {
//     const anon = function () {
//         return drivers.slice(0, 2)
//     };
    
//     return anon()
// }

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(mult) {
    return function multiplier(fare){
        return mult * fare;
    };
};

function fareDoubler(fare) {
    return createFareMultiplier(2)(fare);
};

function fareTripler(fare) {
    return createFareMultiplier(3)(fare);
};

function fetchSpecifiedDrivers(arrayDrivers, func) {
    if (func === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(arrayDrivers);
    } else if (func === returnLastTwoDrivers) {
        return returnLastTwoDrivers(arrayDrivers)
    };
}