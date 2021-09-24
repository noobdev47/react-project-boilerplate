import React from 'react'
import PropTypes from 'prop-types'

const Layout = ({ children, location, ...rest }) => {
  return (
    <div>
      {children}
    </div>
  )
}

Layout.propType = {
  children: PropTypes.any,
  location: PropTypes.object
}

export default Layout
