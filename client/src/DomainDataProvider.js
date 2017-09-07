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

render () {
  const domainData = {
    isLoaded: this.state.isLoaded,
    products: this.state.products,
    addProduct: this.addProduct
  }

  return (
    <Layout domainData={domainData} />
  )
}
}

export default DomainDataProvider
