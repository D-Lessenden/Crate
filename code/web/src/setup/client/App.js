// Imports
import React from 'react' // Imports react 
import { Route, Switch } from 'react-router-dom' //imports the routing 

// App Imports
import { routes } from '../../setup/routes' //is the paths to to the file links
import Layout from '../../modules/common/Layout' // overall layout styling 
import NotFound from '../../modules/common/NotFound' // error handler for 404 and the like 
import RoutePrivate from '../../modules/auth/RoutePrivate'// path logic for user login 

//The wrapper for the application 
const App = () => (
  <Layout>
    <Switch>
      {Object.values(routes).map((route, index) => (
        route.auth
          ? <RoutePrivate {...route} key={index} path={typeof route.path === 'function' ? route.path() : route.path}/>
          : <Route {...route} key={index} path={typeof route.path === 'function' ? route.path() : route.path}/>
      ))}

      <Route component={NotFound}/>
    </Switch>
  </Layout>
)

export default App
