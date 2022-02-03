import sinon from 'sinon';
import * as fetchModule from 'node-fetch'

function jsonOk(body) {
  return {
    status: 200,
    headers: {
      'Content-type': 'application/json'
    },
    json: () => body
  }
}

function fakeServer(){
  const stub = sinon.stub(fetchModule, 'default')

  stub.withArgs('http://banana.com/1').resolves(jsonOk({product: 'product1'}));
  stub.withArgs('http://banana.com/2').resolves(jsonOk({product: 'product2'}));
  stub.withArgs('http://banana.com/3').resolves(jsonOk({product: 'product3'}));
}

export default fakeServer;
