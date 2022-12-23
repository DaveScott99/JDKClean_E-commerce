import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import Navbar from "./components/Navbar";
import { AboutUs } from "./pages/AboutUs";
import { Catalog } from "./pages/Catalog";
import { Contact } from "./pages/Contact";
import { ExchangesAndReturns } from "./pages/ExchangesAndReturns";
import { Login } from "./pages/Login";
import { NotLogged } from "./pages/NotLogged";
import { Privacy } from "./pages/Privacy";
import { ProductPage } from "./pages/ProductPage";
import { ConfirmRecoverPassword } from "./pages/RecoverPassword/ConfirmRecoverPassword";
import { Recover } from "./pages/RecoverPassword/Recover";
import { RegistryNewPassword } from "./pages/RecoverPassword/RegistryNewPassword";
import { Register } from "./pages/Register";
import { Terms } from "./pages/Terms";

function Rotas() {
  return (
    <BrowserRouter>
        <Navbar />
        <main className="flex-fill">
          <div className="container">         
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/catalog" element={<Catalog />}></Route>
            <Route path="/productpage/:id" element={<ProductPage />}></Route>
            <Route path="/notlogged" element={<NotLogged />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/registry" element={<Register />}></Route>
            <Route path="/privacy" element={<Privacy />}></Route>
            <Route path="/terms" element={<Terms />}></Route>
            <Route path="/aboutus" element={<AboutUs />}></Route>
            <Route path="/exchangesAndReturns" element={<ExchangesAndReturns />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/recoverPassword" element={<Recover />}></Route>
            <Route path="/confirmREcoverPassword" element={<ConfirmRecoverPassword />}></Route>
            <Route path="/registryNewPassword" element={<RegistryNewPassword />}></Route>
          </Routes>
          </div>
        </main>
        <Footer />
    </BrowserRouter>
  );
}

export default Rotas;