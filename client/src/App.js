import React, { useEffect, useState } from "react";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import "./App.css";
import Stock from "./components/stocks/Stock.tsx";
import Home from "./components/home/Home.tsx";
import { Login } from './components/login/Login.tsx';
import { Register } from './components/register/Register.tsx';
import { NotFound404 } from './components/notfound/NotFound404.tsx';
import { PrivateRoute } from './components/auth/PrivateRoute.tsx';

function App() {
  const location = useLocation();
  const history = useHistory();
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
            history.push(location.pathname)
          })
        }

      })
        .catch(error => console.log(error))
        .finally(() => setIsLoading(false))
    }
  }, [])

  const login = (cb: { (): void; (): void; }) => {
    setIsAuth(true);
    cb()
  }

  const logout = (cb: { (): void; (): void; }) => {
    setIsAuth(false);
    localStorage.clear();
    cb()
  }

  if (isLoading) {
    return <div></div>
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
