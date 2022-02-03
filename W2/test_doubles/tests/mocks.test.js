import sinon from 'sinon';
import * as payments from '../lib/payments'


import {
  purchase,
  wrongPurchase
} from '../src/mocks.js';


describe('sinon mocks', () => {

  afterEach(() => {
    sinon.restore();
  })

  it('verifies the method was called', () => {
    let payMock = sinon.mock(payments)
    payMock.expects('pay')
      .once()
      .withArgs('my account')
      .returns(true)

    purchase('banana')

    payMock.verify()
  });

  it("a stub won't catch the error", () => {
    let payStub = sinon.stub(payments, 'pay')
    payStub.onCall(0).returns(true);

    const res = wrongPurchase('banana')

    expect(res).toBe(true)
  });

  it("a spy won't allow to modify behaviour", () => {
    let paySpy = sinon.spy(payments, 'pay')

    // How do we test if the payment is erroneous?
    // We can't generate a failed payment
    const res = purchase('banana')

    // We can't produce a "false" here
    expect(res).toBe(false)
    expect(paySpy.callCount).toBe(1)
  });

});
