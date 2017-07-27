import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { render } from 'react-dom'
import { Router, browserHistory, hashHistory } from 'react-router'
import thunk from 'redux-thunk'
import routes from './routes'

import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)


render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes}></Router>
  </Provider>
  , document.querySelector('.akkroo-note'))
