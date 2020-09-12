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
        <Header />
  {/* Header */}
  <Switch >

        {/* Home */}
          <Route path="/" exact>
            <Home />
          </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>


  </Switch>

    </div>
  </Router>
  );
}

export default App;
