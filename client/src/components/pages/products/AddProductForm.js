import PropTypes from 'prop-types'
import React from 'react'

const propTypes = {
  onNameChanged: PropTypes.func.isRequired,
  onCategoryChanged: PropTypes.func.isRequired,
  onImageChanged: PropTypes.func.isRequired,
  onPriceChanged: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
  /* onCancel: PropTypes.func.isRequired */
}

const AddProductForm = (props) =>
  <form>
    Name: <input type='text'
      onChange={props.onNameChanged} />
    Category: <input type='text'
      onChange={props.onCategoryChanged} />
    Image: <input type='text'
      onChange={props.onImageChanged} />
    Price: <input type='text'
      onChange={props.onPriceChanged} />
    <input type='submit' value='Submit' />
  </form>

AddProductForm.propTypes = PropTypes

export default AddProductForm
