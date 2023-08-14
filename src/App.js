import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import NoPage from "./components/NoPage";
import Menu from "./components/Menu";
import AboutUs from "./components/AboutUs";
import Update from "./components/Update";
import Receipes from "./components/Receipes";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import AddReceipe from "./components/AddReceipe";
import { Add } from "@mui/icons-material";
const App = ()=>{
  return(
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Menu" element={<Menu />} />
          <Route path="AboutUs" element={<AboutUs/>} />
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
          <Route path="NoPage" element={<NoPage />} />
          <Route path="AddReceipe" element={<AddReceipe />} />
          <Route path="Receipes" element={<Receipes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App