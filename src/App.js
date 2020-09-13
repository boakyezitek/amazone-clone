import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';

import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Checkout from './Component/Checkout/Checkout';

function App() {
  return (
  <Router >
    <div className="app">

  {/* Header */}
  <Switch >

        {/* Home */}
          <Route path="/" exact>
            <Header />
            <Home />
          </Route>
        <Route path="/checkout">
            <Header />
          <Checkout />
        </Route>

          <Route path="/login">
            <h1>Login Page</h1>
          </Route>


  </Switch>

    </div>
  </Router>
  );
}

export default App;
