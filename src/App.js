import { useEffect, useState, Suspense, lazy } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';

// import AuthPage from "./pages/AuthPage";
// import HomePage from "./pages/HomePage";
// import ModalNewCard from "./components/modal/ModalNewCard";

import { routes, PublicRoute, PrivateRoute } from "./routes";

import "./App.css";

const AuthPage = lazy(() =>
  import('./pages/AuthPage' /* webpackChunkName: 'AuthPage' */));
const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: 'HomePage' */));

function App() {
  return (
    <div className="App">
      <Suspense
        fallback={
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <TailSpin color="#00BFFF" height={100} width={100} />
          </div>}
      >
        <Switch>
          
          <PublicRoute path={routes.auth} restricted>
            <AuthPage />
          </PublicRoute>

          <PrivateRoute path={routes.home} restricted redirectTo={routes.auth}>
            <HomePage />
          </PrivateRoute>

          <Redirect to={routes.auth} />

        </Switch>

      </Suspense>
      {/* <AuthPage />

      <HomePage /> */}
    </div>
  );
}

export default App;
