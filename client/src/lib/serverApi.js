const getAllProducts = (callback) => {
  const options = {
    method: 'GET'
  }

  fetch('/api/products', options)
    .then(response => response.json())
    .then(json => callback(json.data))
}
const addProduct = (product, callback) => {
  const headers = new Headers({
    'Content-Type': 'application/json'
  })

  const options = {
    headers,
    method: 'POST',
    body: JSON.stringify(product)
  }

  fetch('/api/products', options)
    .then(response => response.json())
    .then(json => callback(json.data))
}

export {getAllProducts, addProduct}

// 'fetch' initiates an ajax request--> cannot just use a simple return statement
// or dumb component with an ajax request. 'fetch' does it's work outside of the dumb component-->
//  'fetch' = async method
