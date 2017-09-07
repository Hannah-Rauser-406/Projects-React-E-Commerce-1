import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {domainData} from '../../../lib/propTypes'
import AddProductForm from './AddProductForm'

const propTypes = {
  domainData,
  history: PropTypes.object.isRequired
}
class AddProductContainer extends Component {
  state = {
    name: '',
    category: '',
    image: '',
    price: 0
  }

  onNameChanged = (event) => this.setState({
    name: event.target.value
  })

  onCategoryChanged = (event) => this.setState({
    category: event.target.value
  })

  onImageChanged = (event) => this.setState({
    image: event.target.value
  })

  onPriceChanged = (event) => {
    const price = event.target.value || '0'
    this.setState({
      price: parseFloat(price)
    })
  }

  onSubmit = (event) => {
    // prevent default, console-called
    event.preventDefault()
    console.log(this.props.domainData)
    this.props.domainData.addProduct(this.state)
    this.props.history.push('/products')
    console.log('add button worked')
  }
  render () {
    return (
      <AddProductForm
        onNameChanged={this.onNameChanged}
        onCategoryChanged={this.onCategoryChanged}
        onImageChanged={this.onImageChanged}
        onPriceChanged={this.onPriceChanged}
        onSubmit={this.onSubmit}
      />
    )
  }
}

AddProductContainer.propTypes = propTypes

export default AddProductContainer
