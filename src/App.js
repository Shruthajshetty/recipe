import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import AboutUs from "./pages/AboutUs.js";
import Update from "./pages/Update";
import Receipes from "./pages/Receipes";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import Layout from "./pages/Layout";
import Services from "./pages/Services";
import View from "./pages/View"
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />  
        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/view" element={<View/>} />
      </Routes>
    </div>
  );
}

export default App;