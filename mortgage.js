const readlineSync = require("readline-sync");

console.log("============================");
console.log("Node.js Mortgage Calculator!");
console.log("============================");

/**
 * A JavaScript function that calculates the monthly payment
 * for the loan. READ THE README.md FILE.
 *
 * @param {number} principal     principal on the loan
 * @param {number} annualRate    annual rate of the loan
 * @param {number} numberOfYears term (in years) of the loan
 * @returns {number}
 */
function calculateMonthlyPayment(principal, annualRate, numberOfYears) {
  const monthlyRate = annualRate / 12 / 100;
  const numberOfPayments = numberOfYears * 12;
  const numerator = monthlyRate * (1 + monthlyRate) ** numberOfPayments;
  const denominator = (1 + monthlyRate) ** numberOfPayments - 1;
  return principal * (numerator / denominator);
}


// Your work goes below!

// const principal = readlineSync.questionInt('What is the principal on the loan?');

// const annualRate = readlineSync.questionFloat('What is the annual rate of the loan?');

// const numberOfYears = readlineSync.questionInt('What is the term (in years) of the loan?');

// console.log(`Your monthly payment is $${calculateMonthlyPayment(principal, annualRate, numberOfYears).toFixed(2)}`)


function getRate() {
  const annualRate = Number(readlineSync.question('What is the annual rate of the loan?'))
  if (isNaN(annualRate) || annualRate <= 0) {
    console.log('That is not a valid response, try again')
    return getRate()
  } else {
    return annualRate;
  }
}

function getTerm() {
  const term = Number(readlineSync.question('What is the term (in years) of the loan?'))
  if (isNaN(term) || term <= 0) {
    console.log('That is not a valid response, try again!')
    return getTerm()
  } else {
    return term;
  }
}

function getPrincipal() {
  const principal = Number(readlineSync.question('What is the principal on the loan?'))
  if (isNaN(principal) || principal <= 0) {
    console.log('That is not a valid response, try again') 
    return getPrincipal()
  } else {
    return principal
  }
}

const principal = getPrincipal();
const annualRate = getRate();
const term = getTerm()

console.log(`Your monthly payments will be $${calculateMonthlyPayment(principal, annualRate, term).toFixed(2)}`)