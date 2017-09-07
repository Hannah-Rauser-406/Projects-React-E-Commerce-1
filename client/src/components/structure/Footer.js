import React from 'react'

const styles = {
  footer: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    height: 25,
    backgroundColor: 'teal',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },
  p: {
    color: 'white'
  }
}

const Footer = () =>
  <footer style={styles.footer}>
    <p style={styles.p}>Thank you for shopping!</p>
  </footer>
export default Footer
