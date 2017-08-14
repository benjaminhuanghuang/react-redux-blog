import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import ReduxPromise from 'redux-promise';
//
import reducers from './reducers';
import Posts from './components/Posts';
import PostNew from './components/PostNew';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render( 
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/posts/new" component={PostNew}/>
        <Route path="/" component={Posts}/>
      </Switch>  
    </BrowserRouter>
  </Provider>
,document.getElementById('root'));

