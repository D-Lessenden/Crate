// Imports
import React from 'react'
import { hydrate } from 'react-dom'// brings in server-side rendering 
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux' // is the redux wrapper

// App Imports
import { store } from '../../setup/store'
import { setUser, loginSetUserLocalStorageAndCookie } from '../../modules/user/api/actions'
import ScrollToTop from '../../modules/common/ScrollToTop' //Purecomponet whenever app rerenders it renders top the top of the page
import App from './App'

// User Authentication
const token = window.localStorage.getItem('token')
if (token && token !== 'undefined' && token !== '') {
  const user = JSON.parse(window.localStorage.getItem('user'))
  if (user) {
    // Dispatch action
    store.dispatch(setUser(token, user))

    loginSetUserLocalStorageAndCookie(token, user)
  }
}

// Client App
const Client = () => (
  <Provider store={store} key="provider">
    <Router>
      <ScrollToTop>
        <App/>
      </ScrollToTop>
    </Router>
  </Provider>
)

// Mount client app
// Helps render in server-side 
window.onload = () => {
  hydrate(
    <Client/>,
    document.getElementById('app')
  )
}