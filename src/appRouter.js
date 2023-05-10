import React from 'react'
import Login from './pages/login';
import Logon from './pages/logon';
import Home from './pages/home';
import {Route, Routes, BrowserRouter} from "react-router-dom"

const AppRouter = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route element = { <Login/> }  path="/" exact />
            <Route element = { <Logon/> }  path="/logon" exact />
            <Route element = { <Home/> }  path="/home" exact />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default AppRouter;