const ajaxRequest = (uri, method, body) => {
  const headers = new Headers({
    'Content-Type': 'application/json'
  })

  const options = {
    headers: headers,
    method: method,
    body: JSON.stringify(body)
  }

  return fetch(`/api/${uri}`, options)
    .then(response => response.json())
    .then(json => json.data)
    // .catch(err => //something)
}
// ************
const getAllProducts = () => ajaxRequest('products', 'GET')
// ************
const addProduct = (product) => ajaxRequest('products', 'POST', product)
// ****************
const updateProduct = (product) => ajaxRequest(`products/${product._id}`, 'PUT', product)
// ****************
const deleteProduct = (productId) => ajaxRequest(`products/${productId}`, 'DELETE')

const signupUser = (user) => {
  const headers = new Headers({
    'Content-Type': 'application/json'
  })

  const options = {
    headers,
    method: 'POST',
    body: JSON.stringify(user)
  }

  return fetch('/api/signup', options)
    .then(response => response.json())
    .then(json => json.data)
    .then(data => {
      console.log(data)
      return data
    })
    .catch(err => console.log('catch error', err))
}
// *****************
const loginUser = (email, password) => {
  const headers = new Headers({
    'Content-Type': 'application/json'
  })

  const options = {
    headers,
    method: 'POST',
    body: JSON.stringify({email, password})
  }

  return fetch('/api/login', options)
    .then(response => response.json())
    .then(json => json.data)
    .then(data => {
      console.log('data console in our login user function:', data)
      return data
    })
    .catch(err => console.log('catch error', err))
}

export {getAllProducts, addProduct, updateProduct, signupUser, loginUser, deleteProduct}

// 'fetch' initiates an ajax request--> cannot just use a simple return statement
// or dumb component with an ajax request. 'fetch' does it's work outside of the dumb component-->
//  'fetch' = async method
