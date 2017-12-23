import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers/index'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={App}/>
        </Switch>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();


// created a store (app state) and applied middleware of thunk to the store
// then applied all of the reducers

// BROWSER ROUTER
// applies most applicable first so home needs to go at bottom