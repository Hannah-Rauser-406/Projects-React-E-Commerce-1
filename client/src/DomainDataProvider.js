import React, {Component} from 'react'
import Layout from './components/structure/Layout'
import * as ServerApi from './lib/serverApi'
// the '* as' means import EVERYTHING from './lib/serverApi' and create an object
// {
//    getAllProducts: assign it to an object ServerApi
// }
class DomainDataProvider extends Component {
  state = {
    isLoaded: false,
    products: [],
    user: null
  }

  componentDidMount () {
    this.getAllProducts()
  }

  getAllProducts = () =>
    ServerApi.getAllProducts(products =>
      this.setState({
        isLoaded: true,
        products
      }))

addProduct = (newProduct) => ServerApi.addProduct(newProduct, this.getAllProducts)

findProductById = (productId) => {
  for (let i = 0; i < this.state.products.length; i++) {
    const currentProduct = this.state.products[i]

    if (currentProduct._id === productId) {
      return currentProduct
    }
  }
}
updateProduct = (product) =>
  ServerApi.updateProduct(product, this.getAllProducts)

deleteProduct = (productId) =>
  ServerApi.deleteProduct(productId, this.getAllProducts)

signupUser = (user) =>
  ServerApi.signupUser(user, (savedUser) => this.setState({
    user: savedUser
  }))

loginUser = (email, password) =>
  ServerApi.loginUser(email, password, () => {
    console.log('login user called')
  })

render () {
  console.log(this.state)
  const domainData = {
    isLoaded: this.state.isLoaded,
    user: this.state.user,
    products: this.state.products,
    addProduct: this.addProduct,
    findProductById: this.findProductById,
    updateProduct: this.updateProduct,
    deleteProduct: this.deleteProduct,
    signupUser: this.signupUser,
    loginUser: this.loginUser
  }

  return this.state.isLoaded ? <Layout domainData={domainData} /> : null
}
}

export default DomainDataProvider
