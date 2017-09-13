import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import * as AppPropTypes from '../../../lib/propTypes'
import SignUpForm from './SignUpForm'

class SignUpContainer extends Component {
  static propTypes = {
    domainData: AppPropTypes.domainData,
    history: PropTypes.object.isRequired
  }

  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }

  onFirstNameChanged = (event) => this.setState({
    firstName: event.target.value
  })

  onLastNameChanged = (event) => this.setState({
    lastName: event.target.value
  })

  onEmailChanged = (event) => this.setState({
    email: event.target.value
  })

  onPasswordChanged = (event) => this.setState({
    password: event.target.value
  })

onSubmit = (event) => {
  // prevent default, console-called
  event.preventDefault()
  console.log(this.props.domainData)
  this.props.domainData.signupUser(this.state)
  this.props.history.push('/')
  console.log('add new user button worked')
}

render () {
  return (
    <SignUpForm
      firstName={this.state.firstName}
      onFirstNameChanged={this.onFirstNameChanged}
      lastName={this.state.lastName}
      onLastNameChanged={this.onLastNameChanged}
      email={this.state.email}
      onEmailChanged={this.onEmailChanged}
      password={this.state.password}
      onPasswordChanged={this.onPasswordChanged}
      onSubmit={this.onSubmit}
    />
  )
}
}

export default withRouter(SignUpContainer)
