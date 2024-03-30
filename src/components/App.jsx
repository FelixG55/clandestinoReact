import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home'
import Location from './Location/Location';
import Delivery from './Delivery/Delivery';
import Menu from './Menu/Menu';
import Login from './Login/Login';
import Register from './Register/Register';

function App() {
    return (
        <BrowserRouter>
          <div id="wrapper">
              <Routes>
               <Route path='/' element={<Home/>}/>
               <Route path ='/location'element ={<Location/>}/>
               <Route path='/delivery' element={<Delivery/>}/>
               <Route path='/menu' element={<Menu/>}/>
               <Route path='/login' element={<Login/>}/>
               <Route path='/register' element={<Register/>}/>
              </Routes>
          </div>
        </BrowserRouter>
      );
}

export default App
