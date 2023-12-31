import "./reset.css"
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/home';
// import Header from './Components/Header/header';
// import Menu from './Components/Menu/menu';
// import Footer from "./Components/Footer/footer";
import AccountPage from "./Pages/Account/Account";
import RegisterPage from "./Pages/SignUp-LogIn/SignUp-LogIn";
import ProductView from "./Pages/ProductView/productView";


function App() {
  
  const [searchInput, setSearchInput] = useState('');

  return(
    <Router>
      <Routes>
        <Route path='/' element={<Home searchInput={searchInput} setSearchInput={setSearchInput}/>}/>
        <Route path="/Account" element={<AccountPage/>}/>
        <Route path="/Register" element={<RegisterPage/>}/>  
        <Route path="/ProductView/:id" element={<ProductView/>}/>
      </Routes>
    </Router>
  )
}

export default App;
