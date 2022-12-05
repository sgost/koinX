import React from "react"
import PropTypes from "prop-types"
import { GlobalStyle } from '../../styles/global-styles';

const Layout = props => {
  return (
    <>
      <GlobalStyle />
      <main>{props.children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
