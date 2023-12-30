import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import {Register} from "./Components/Register.js";
import {Login} from "./Components/Login.js";

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
