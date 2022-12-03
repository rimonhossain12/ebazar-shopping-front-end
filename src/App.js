import "./App.css";
import Nav from "./pages/Shared/Nav/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import About from "./pages/Home/About/About";
import Contact from "./pages/Home/Contact/Contact";
import Efooter from "./pages/Shared/Efooter";
import Login from "./pages/Home/Login/Login";
import Register from "./pages/Home/Login/Register";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <Nav />
      <div>
          <Routes>        
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <ToastContainer />
        </div>
      <Efooter />
    </div>
  );
}

export default App;
