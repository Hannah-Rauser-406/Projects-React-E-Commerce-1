import PropTypes from 'prop-types'
import React from 'react'
import {Link} from 'react-router-dom'
import * as AppPropTypes from '../../../lib/propTypes'
import ProductCard from './ProductCard'

const propTypes = {
  domainData: AppPropTypes.domainData,
  history: PropTypes.object.isRequired
}
const styles = {
  text: {
    fontSize: 20,
    color: 'white'
  }
}
const ProductList = (props) =>
  <div>
    <h1 style={styles.text}> Product List </h1>
    <Link to='/products/add'> Add A New Product </Link>
    { props.domainData.products.map(product =>
      <ProductCard
        key={product.id}
        product={product}
        onEdit={() => props.history.push(`/products/edit/${product._id}`)}
      />
    )
    }
  </div>
ProductList.propTypes = propTypes
export default ProductList
