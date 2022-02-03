import sinon from 'sinon';
import * as fetchModule from 'node-fetch'

function jsonOk(body) {
  return Promise.resolve(
    {
      status: 200,
      headers: {
        'Content-type': 'application/json'
      },
      json: () => body
    }
  )
}

function fakeServer(){
  const stub = sinon.stub(fetchModule, 'default')

  stub.withArgs('http://banana.com/1').returns(jsonOk({product: 'product1'}));
  stub.withArgs('http://banana.com/2').returns(jsonOk({product: 'product2'}));
  stub.withArgs('http://banana.com/3').returns(jsonOk({product: 'product3'}));
}

export default fakeServer;
