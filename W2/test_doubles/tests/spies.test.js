import sinon from 'sinon';
import * as thirdParty from '../src/third_party.js'

import {
  callToStockFunction,
  callToThirdParty,
 } from '../src/spies.js';

describe('sinon spies', () => {

  // Rememeber to restore after each test!!
  afterEach(() => {
    sinon.restore();
  })

  it('spies on a stock function', () => {

    const spy = sinon.spy(console, "log");

    callToStockFunction();

    expect(spy.withArgs('A very useful log').callCount).toBe(1)
  });

  it('spies on a third party dependency', () => {

    const spy = sinon.spy(thirdParty, "processPayment")

    callToThirdParty();

    // Check behaviour
    expect(spy.callCount).toBe(1)
    expect(spy.getCall(0).args).toEqual(['some', 'arbitrary', 'arguments'])

    // This would be equivalent
    expect(spy.withArgs('some', 'arbitrary', 'arguments').calledOnce).toBe(true)
  });

});
