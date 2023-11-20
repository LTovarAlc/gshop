import "./reset.css"
import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/home';
import Header from './Components/Header/header';
import Menu from './Components/Menu/menu';

function App() {
  return(
    <Router>
      <Header/>
      <Menu/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
  )
}

export default App;
