import PropTypes from 'prop-types'
import React, {Component} from 'react'
import * as AppPropTypes from '../../../lib/propTypes'
import EditProductForm from './EditProductForm'
// when we code  smart components we declare propTypes differently

class EditProductContainer extends Component {
  static propTypes = {
    domainData: AppPropTypes.domainData,
    history: PropTypes.object.isRequired
  }
  constructor () {
    super()
    this.state = {
      name: '',
      category: '',
      image: '',
      price: ''
    }
  }

  onNameChanged = (event) => this.setState({name: event.target.value})
  onCategoryChanged = (event) => this.setState({category: event.target.value})
  onImageChanged = (event) => this.setState({image: event.target.value})
  onPriceChanged = (event) => this.setState({price: event.target.value})

  onSubmit = (event) => {
    // prevent default, console-called
    event.preventDefault()
    this.props.history.push('/products')
    console.log('submit button worked')
  }

  render () {
    return <EditProductForm
      name={this.state.name}
      onNameChanged={this.onNameChanged}
      category={this.state.category}
      onCategoryChanged={this.onCategoryChanged}
      image={this.state.image}
      onImageChanged={this.onImageChanged}
      price={this.state.price}
      onPriceChanged={this.onPriceChanged}
      onSubmit={this.onSubmit}
    />
  }
}

export default EditProductContainer
