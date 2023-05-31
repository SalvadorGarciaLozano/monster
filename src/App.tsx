import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from './common/NavBar';
import { Route, Routes } from 'react-router-dom';
import { Main } from './components/Main';
import { routes } from './common/routes';

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Routes>
        {
          routes.map(({path, component:Component}) => (
            <Route
              key={path}
              path={path}
              element={<Component/>}
            >
              {/* {route.name} */}
            </Route>
          ))
        }
      </Routes>
    </>
  );
}
export default App;
