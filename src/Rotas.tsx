
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import Navbar from "./components/Navbar";
import { Orders } from "./components/Orders";

function Rotas() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/orders" element={<Orders />}></Route>
        </Routes>
    </BrowserRouter>
  );
};

export default Rotas;