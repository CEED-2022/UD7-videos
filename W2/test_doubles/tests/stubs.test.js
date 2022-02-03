import sinon from 'sinon';
import * as fetchModule from 'node-fetch'
import fakeServer from './fake_server.js';

import {
  productDetails,
  multipleProductDetails,
  fetchProductInfo
} from '../src/stubs.js';


function jsonOk(body) {
  return {
    status: 200,
    headers: {
      'Content-type': 'application/json'
    },
    json: () => body
  }
}

describe('sinon stubs', () => {

  afterEach(() => {
    sinon.restore();
  })

  it('creates an stub', () => {
    const product = { description: "whatever", price: 1234 }

    const repositoryStub = {
      find: sinon.stub()
    }
    repositoryStub.find.returns(product);

    const result = productDetails(3, repositoryStub);

    expect(result).toBe(product)
  });

  it('can have different results for different args', () => {
    const product1 = { description: "whatever 1", price: 12345 }
    const product2 = { description: "whatever 2", price: 54321 }

    const repositoryStub = {
      find: sinon.stub()
    }
    repositoryStub.find.withArgs(1).returns(product1);
    repositoryStub.find.withArgs(2).returns(product2);

    const result = multipleProductDetails([1,2], repositoryStub);

    expect(result).toEqual([product1, product2])
  });

  describe('when working with modules', () => {

    it('can stub a module function', async () => {
      const stub = sinon.stub(fetchModule, 'default')
      stub.onCall(0).returns(jsonOk({banana: 3}));

      const result = await fetchProductInfo(3);
      console.log(result)
    });

    it('can stub different calls', async () => {
      const stub = sinon.stub(fetchModule, 'default')

      stub.withArgs('http://banana.com/1').resolves(jsonOk({product: 'product1'}));
      stub.withArgs('http://banana.com/2').resolves(jsonOk({product: 'product2'}));
      stub.withArgs('http://banana.com/3').resolves(jsonOk({product: 'product3'}));

      const products = [
        await fetchProductInfo(1),
        await fetchProductInfo(2),
        await fetchProductInfo(3)
      ]
      expect(products).toEqual([
        {product: 'product1'},
        {product: 'product2'},
        {product: 'product3'}
      ])
    });

    it('you can extract it to a module', async () => {
      fakeServer();

      const products = [
        await fetchProductInfo(1),
        await fetchProductInfo(2),
        await fetchProductInfo(3)
      ]
      expect(products).toEqual([
        {product: 'product1'},
        {product: 'product2'},
        {product: 'product3'}
      ])
    });
  });

});
