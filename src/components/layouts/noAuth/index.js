import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

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

export default connect(null, null)(withRouter(Layout))
