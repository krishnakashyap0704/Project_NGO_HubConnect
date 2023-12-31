
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
import { AdminLogin } from './Components/AdminHome.js';
import { AdminService } from './Components/AdminService.js';
import { UpdateUser } from './Components/UpdateUser.js';
import { Events } from './Components/Events.js';


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
    <Route path='/adminLogin' element={<AdminLogin/>}></Route>
    <Route path='/adminService' element={<AdminService/>}></Route>
    <Route path='/updateUser/:id' element={<UpdateUser/>}></Route>
    <Route path='/events' element={<Events/>}></Route>

    </Routes>
    <Footer/>
    </BrowserRouter> 
  );
}

export default App;
