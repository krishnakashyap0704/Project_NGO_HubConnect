import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Register } from "./Components/Register.js";
import { Login } from "./Components/Login.js";
import { Home } from './Components/Home';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { About } from './Components/About';


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>

    <Route path='/' element={<Home/>}></Route>
    <Route path="/register" element={<Register/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/about' element={<About/>}></Route>

    </Routes>
    <Footer/>
    </BrowserRouter> 
  );
}

export default App;
