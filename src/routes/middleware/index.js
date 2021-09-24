import React from 'react'
import PropTypes from "prop-types"
import { Redirect, Route } from 'react-router'

const RouteMiddleware = ({
  component: Component,
  layout: Layout,
  isAuthProtected,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (isAuthProtected && !isLoggedIn)
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
      }}
    />
  )

  return (
    <Layout>
      <Component {...props} />
    </Layout>
  )
}

RouteMiddleware.propTypes = {
  component: PropTypes.any,
  location: PropTypes.object,
  isAuthProtected: PropTypes.bool
}

export default RouteMiddleware
