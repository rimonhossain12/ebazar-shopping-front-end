import "./App.css";
import Nav from "./pages/Shared/Nav/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import About from "./pages/Home/About/About";
import Contact from "./pages/Home/Contact/Contact";
import Efooter from "./pages/Shared/Efooter";
import Login from "./pages/Home/Login/Login";
import Register from "./pages/Home/Login/Register";
import { ToastContainer } from "react-toastify";
import DashboardHome from "./pages/Dashboard/DashboardHome/DashboardHome";
import FeatureProudct from "./pages/featureProduct/FeatureProudct";
import MyOrder from "./pages/Home/MyOrder/MyOrder";
import CardContextProvider from "./contextApi2/CardContext";
import { TextCreateProvider } from "./tryContext/TestContext";
import ProductDetails from "./pages/Home/ProductDetails/ProductDetails";

// rimonhossain74@gmail.com rimon1234
function App() {
  return (
    <CardContextProvider>
      <TextCreateProvider>
      <Nav />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/feature" element={<FeatureProudct />} />
          <Route path="/productsDetails/:id" element={<ProductDetails />} />
          <Route path="/dashboard" element={<DashboardHome />} />
          <Route path="/myorder" element={<MyOrder />} />
        </Routes>
        <ToastContainer />
      </div>
      <Efooter />
      </TextCreateProvider>      
    </CardContextProvider>
  );
}

export default App;
