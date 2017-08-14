import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom'; 
import ReduxPromise from 'redux-promise';
//
import reducers from './reducers'
import Posts from './components/Posts'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render( 
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Route path="/" component={Posts}/>
    </BrowserRouter>
  </Provider>
,document.getElementById('root'));

