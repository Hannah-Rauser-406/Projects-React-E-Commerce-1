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

const updateProduct = (product, callback) => {
  const headers = new Headers({
    'Content-Type': 'application/json'
  })

  const options = {
    headers,
    method: 'PUT',
    body: JSON.stringify(product)
  }

  fetch(`/api/products/${product._id}`, options)
    .then(response => response.json())
    .then(json => {
      console.log(json)
      return json
    })
    .then(json => callback(json.data))
}

const deleteProduct = (productId, callback) => {
  const options = {
    method: 'DELETE'
  }
  fetch(`/api/products/${productId}`, options)
    .then(response => response.json())
    .then(json => {
      console.log(json)
      return json
    })
    .then(json => callback(json.data))
}

const signupUser = (user, callback) => {
  const headers = new Headers({
    'Content-Type': 'application/json'
  })

  const options = {
    headers,
    method: 'POST',
    body: JSON.stringify(user)
  }

  fetch('/api/signup', options)
    .then(response => response.json())
    .then(json => callback(json))
}

const loginUser = (email, password, callback) => {
  const headers = new Headers({
    'Content-Type': 'application/json'
  })

  const options = {
    headers,
    method: 'POST',
    body: JSON.stringify({email, password})
  }

  fetch('/api/login', options)
    .then(response => response.json())
    .then(json => callback(json))
}

export {getAllProducts, addProduct, updateProduct, signupUser, loginUser, deleteProduct}

// 'fetch' initiates an ajax request--> cannot just use a simple return statement
// or dumb component with an ajax request. 'fetch' does it's work outside of the dumb component-->
//  'fetch' = async method
