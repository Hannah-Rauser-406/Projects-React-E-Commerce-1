import React from 'react'
// import {NavLink} from 'react-router-dom'
import NavItem from './NavItem'

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: 'teal',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },
  link: {
    padding: 5,
    backgroundColor: 'grey',
    borderRadius: 5,
    textDecoration: 'none'
  },
  active: {
    backgroundColor: 'white'
  }
}
const Header = () =>
  <header style={styles.header}>
    <nav style={styles.link}>
      <NavItem to='/'>Home</NavItem>
      &nbsp;&nbsp;&nbsp;
      <NavItem to='/about'>About</NavItem>
      &nbsp;&nbsp;&nbsp;
      <NavItem to='/products'>Products</NavItem>
      &nbsp;&nbsp;&nbsp;
      <NavItem to='/signup'>Sign Up</NavItem>
      &nbsp;&nbsp;&nbsp;
      <NavItem to='/login'>Log In</NavItem>
    </nav>
  </header>

export default Header
