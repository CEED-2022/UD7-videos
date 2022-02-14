import fetch from 'node-fetch'

function productDetails(id, productRepository) {
  return productRepository.find(id)
}

function multipleProductDetails(ids, productRepository){
  return ids.map( id => productDetails(id, productRepository) )
}

async function fetchProductInfo(id) {
  console.log('calling '+`http://banana.com/${id}`)
  return await (await fetch(`http://banana.com/${id}`)).json()
}


export {
  productDetails,
  multipleProductDetails,
  fetchProductInfo
}
