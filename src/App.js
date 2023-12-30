import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Home } from './Components/Home';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import { About } from './Components/About';


function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <Routes>

    <Route path='/' element={<Home/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/about' element={<About/>}></Route>

    </Routes>
    <Footer></Footer>
    </BrowserRouter> 
  );
}

export default App;
