import { processPayment } from './third_party.js'

// Avoid spying this
function privateFunction() {
  console.log('** "privateFunction" is being called **')
  return "I'm function privateFunction"
}

function callToStockFunction() {
  console.log('A very useful log')
}

function callToThirdParty() {
  return processPayment('some', 'arbitrary', 'arguments');
}

function callToPrivateFunction() {
  return privateFunction('an argument')
}

export {
  callToStockFunction,
  callToThirdParty,
  callToPrivateFunction
}
