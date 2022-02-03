import { pay } from "../lib/payments"

//eslint-disable-next-line no-unused-vars
function purchase(product) {
  return pay('my account')
}

//eslint-disable-next-line no-unused-vars
function wrongPurchase(product) {
  pay('your account')
  return true
}

export {
  purchase,
  wrongPurchase
}
