import React, {useEffect} from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';

import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Checkout from './Component/Checkout/Checkout';
import Login from './Component/Login/Login';
import {auth} from './DBConfig/Firebase';
import { useStateValue } from './Provider/StateProvider';
function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged(authUser => {
      console.log('this user is >> ', authUser);

      if(authUser){
            dispatch({
              type:'SET_USER',
              user:authUser
            })
      }else{
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
    })
  }, [])

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
            <Login />
          </Route>


  </Switch>

    </div>
  </Router>
  );
}

export default App;
