import PropTypes from 'prop-types'
import React from 'react'
import {NavLink} from 'react-router-dom'

const propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}
const styles = {
  link: {
    textDecoration: 'none',
    fontSize: 20,
    color: 'white'
  }
}
const NavItem = (props) =>
  <NavLink to={props.to} style={styles.link}>{props.children}</NavLink>

NavItem.propTypes = propTypes

export default NavItem
