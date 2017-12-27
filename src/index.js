import React from 'react'
import ReactDOM from 'react-dom'
import ListPosts from './containers/ListPosts'
import Login from './containers/Login';
import CreateAccount from './containers/CreateAccount';
import Authenticated from './containers/Authenticated';
import Loading from './containers/Loading';
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
        <Loading>
          <Switch>
            <Route path="/CreateAccount" component={CreateAccount} />
            <Route path="/Login" component={Login} />
            <Authenticated>
              <Route path="/" component={ListPosts} />
            </Authenticated>
          </Switch>
        </Loading>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();


// created a store (app state) and applied middleware of thunk to the store
// then applied all of the reducers

// BROWSER ROUTER
// applies most applicable first so home needs to go at bottom