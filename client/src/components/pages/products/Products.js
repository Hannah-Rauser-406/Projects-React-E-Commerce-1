import React from 'react'
import {Route} from 'react-router-dom'
import * as AppPropTypes from '../../../lib/propTypes'
import ProductList from './ProductList'
import AddProductContainer from './AddProductContainer'
import EditProductContainer from './EditProductContainer'

const styles = {
  text: {
    fontSize: 20,
    color: 'white'
  }
}
const propTypes = {
  domainData: AppPropTypes.domainData
}
const Products = (props) =>
  <div>
    <h1 style={styles.text}> Products </h1>

    <Route path='/products' exact
      render={(routeProps) => <ProductList domainData={props.domainData} history={routeProps.history} />}
    />
    <Route path='/products/add' exact
      render={(routeProps) => <AddProductContainer domainData={props.domainData} history={routeProps.history} />}
    />
    <Route path='/products/edit/:productId'
      render={(routeProps) => <EditProductContainer domainData={props.domainData} history={routeProps.history} />}
    />
  </div>

Products.propTypes = propTypes
export default Products
