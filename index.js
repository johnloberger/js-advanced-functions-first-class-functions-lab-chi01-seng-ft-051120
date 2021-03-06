const returnFirstTwoDrivers = function(array){
  return array.slice(0, 2)
}

const returnLastTwoDrivers = function(array){
  return array.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplyer){
  return transformer => transformer * multiplyer
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(array, selectedFunction){
  return selectedFunction(array)
}