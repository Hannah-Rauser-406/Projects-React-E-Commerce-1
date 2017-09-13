import PropTypes from 'prop-types'

export const product = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
})

export const user = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  cart: PropTypes.array.isRequired,
  local: PropTypes.objectOf(PropTypes.string).isRequired,
  orders: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired
})

export const domainData = PropTypes.shape({
  isLoaded: PropTypes.bool.isRequired,
  // user:
  products: PropTypes.arrayOf(product).isRequired,
  addProduct: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  findProductById: PropTypes.func.isRequired,
  updateProduct: PropTypes.func.isRequired,
  signupUser: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired
}).isRequired
