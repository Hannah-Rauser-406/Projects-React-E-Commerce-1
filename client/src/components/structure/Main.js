import React from 'react'
import {Route} from 'react-router-dom'
import * as AppPropTypes from '../../lib/propTypes'
import Home from '../pages/Home'
import About from '../pages/About'
import Products from '../pages/products/Products'

const propTypes = {
  domainData: AppPropTypes.domainData
}

const styles = {
  main: {
    position: 'fixed',
    top: 50,
    bottom: 25,
    left: 0,
    right: 0,
    overflow: 'scroll',
    textColor: 'white'
  },
  images: {
    backgroundImage: "url('images/kristian-gonzalez-308188.jpg')",
    width: '100vw',
    height: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
}
const Main = (props) =>
  <main style={styles.main, styles.images}>
    <h1>Hello from Main </h1>

    <Route path='/' exact component={Home} />
    <Route path='/about' component={About} />
    <Route path='/products' render={() => <Products domainData={props.domainData} />} />
  </main>

Main.propTypes = propTypes
export default Main
