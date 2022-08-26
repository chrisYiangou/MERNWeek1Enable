//Add, sub, mul, div -- export these methods
// Seperate file import these functiuons use them them and the export their sums
// Seperate JS file we could print said sum

const add = (numOne, numTwo) => {
    return numOne + numTwo;
}

const div = (numOne, numTwo) => {
    return numOne / numTwo;
}

const sub = (numOne, numTwo) => {
    return numOne - numTwo;
}

const mul = (numOne, numTwo) => {
    return numOne * numTwo;
}

module.exports.add = add;
module.exports.div = div;
module.exports.sub = sub;
module.exports.mul = mul;