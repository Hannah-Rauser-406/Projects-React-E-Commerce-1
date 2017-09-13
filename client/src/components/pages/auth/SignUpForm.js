import React from 'react'
import PropTypes from 'prop-types'
/* import {Link} from 'react-router-dom' */

const propTypes = {
  onFirstNameChanged: PropTypes.func.isRequired,
  onLastNameChanged: PropTypes.func.isRequired,
  onEmailChanged: PropTypes.func.isRequired,
  onPasswordChanged: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

const SignUpForm = (props) =>
  <form onSubmit={props.onSubmit}>
    First Name: <input type='text'
      value={props.firstName}
      onChange={props.onFirstNameChanged} />
    Last Name: <input type='text'
      onChange={props.onLastNameChanged} />
    Email: <input type='text'
      onChange={props.onEmailChanged} />
    Password: <input type='text'
      onChange={props.onPasswordChanged} />
    <input type='submit' value='Submit' />
  </form>

SignUpForm.propTypes = propTypes

export default SignUpForm
