import React, { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import "./App.css";
import Stock from "./components/stocks/Stock";
import Home from "./components/home/Home";
import { Login } from './components/login/Login';
import { Register } from './components/register/Register';
import { NotFound404 } from './components/notfound/NotFound404';
import { PrivateRoute } from './components/auth/PrivateRoute';

function App() {
  const history = useHistory();
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //Maybe clean this up? 
  useEffect(() => {
    const sessionToken = localStorage.getItem('session_token');
    if (Boolean(sessionToken)) {
      setIsLoading(true);
      const body = JSON.stringify({ sessionToken })
      fetch('/api/auth/validate', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body
      }).then(response => response.json()
      ).then(data => {
        if (data.errorMessage) {
          logout(() => {
            console.error(data.errorMessage)
            alert('You have been logged out')
          })
        } else {
          login(() => {
            history.push('/home')
          })
        }

      })
        .catch(error => console.log(error))
        .finally(() => setIsLoading(false))
    }
  }, [])

  const login = cb => {
    setIsAuth(true);
    cb()
  }

  const logout = cb => {
    setIsAuth(false);
    localStorage.clear();
    cb()
  }

  //TODO update to spinner
  if (isLoading) {
    return <div>LOADING....</div>
  }

  return (
    <>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Login login={login} />
          </Route>
          <Route exact path="/register">
            <Register login={login} />
          </Route>
          <PrivateRoute exact path="/home" isAuth={isAuth} >
            <Home logout={logout} />
          </PrivateRoute>
          <PrivateRoute exact path="/stock" isAuth={isAuth}>
            <Stock logout={logout} />
          </PrivateRoute>
          <Route path="*">
            <NotFound404 />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
