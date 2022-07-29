import React, {Component} from 'react'
import Inicial from './Pages/Inicial'
import Login from '../src/Pages/Login/App'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function AppRoutes(){

  return(
 <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}>
      </Route>
      <Route path='/inicial' element={<Inicial/>}></Route>
    </Routes>
  </BrowserRouter>
  )
}
export default AppRoutes

