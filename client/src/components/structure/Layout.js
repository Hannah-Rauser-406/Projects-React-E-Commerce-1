import React from 'react'
import * as AppPropTypes from '../../lib/propTypes'
import Header from './header/Header'
import Main from './Main'
import Footer from './Footer'
// this file defines the high level construction of the app
// header, footer, and main components
const propTypes = {
  domainData: AppPropTypes.domainData
}

const Layout = (props) => (
  <div id='layout'>
    <Header />
    <Main domainData={props.domainData} />
    <Footer />
  </div>
)

Layout.propTypes = propTypes

export default Layout
