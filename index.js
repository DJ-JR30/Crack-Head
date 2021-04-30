

// Console Log Custom
function A() {}



// Random Number  within Min and Max
function RndNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports.RndNumber = RndNumber;