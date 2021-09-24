import './App.css'
import { Switch } from 'react-router-dom'
import noAuth from './components/layouts/noAuth'
import RouteMiddleware from './routes/middleware'
import vertical from './components/layouts/vertical'
import { protectedRoutes, publicRoutes } from './routes'

const App = () => {
  return (
    <>
      <Switch>
        {publicRoutes.map((route, idx) =>
          < RouteMiddleware
            key={idx}
            layout={noAuth}
            path={route.path}
            isAuthProtected={false}
            component={route.component}
          />
        )}

        {protectedRoutes.map((route, idx) =>
          < RouteMiddleware
            key={idx}
            layout={vertical}
            path={route.path}
            isAuthProtected={false}
            component={route.component}
          />
        )}
      </Switch>
    </>
  )
}

export default connect(null, null)(App)
