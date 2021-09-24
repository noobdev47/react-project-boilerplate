import { Switch } from 'react-router-dom'
import './App.css'
import { protectedRoutes, publicRoutes } from './routes'
import RouteMiddleware from './routes/middleware'

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

export default App
