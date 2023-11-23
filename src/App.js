import "./reset.css"
import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/home';
import Header from './Components/Header/header';
import Menu from './Components/Menu/menu';
import Footer from "./Components/Footer/footer";

function App() {
  
  const [searchInput, setSearchInput] = useState('');

  return(
    <Router>
      <Header setSearchInput={setSearchInput}/>
      <Menu/>
      <Routes>
        <Route path='/' element={<Home searchInput={searchInput} setSearchInput={setSearchInput}/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;
