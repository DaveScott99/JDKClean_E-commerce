import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import Navbar from "./components/Navbar";
import { Catalog } from "./pages/Catalog";
import { Login } from "./pages/Login";

function Rotas() {
  return (
    <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/catalog" element={<Catalog />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default Rotas;