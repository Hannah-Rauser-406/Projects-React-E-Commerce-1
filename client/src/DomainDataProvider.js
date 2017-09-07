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
    products: []
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
render () {
  const domainData = {
    isLoaded: this.state.isLoaded,
    products: this.state.products,
    addProduct: this.addProduct,
    findProductById: this.findProductById,
    updateProduct: this.updateProduct
  }

  return this.state.isLoaded ? <Layout domainData={domainData} /> : null
}
}

export default DomainDataProvider
