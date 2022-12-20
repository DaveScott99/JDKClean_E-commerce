import { Link } from "react-router-dom";
import "./styles.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark border-bottom shadow-sm mb-3">
      <div className="container">
        <a className="navbar-brand text-dark fw-lighter fs-3" href="/">
          <b>JDKClean</b>
        </a>

        <button
          className="navbar-toggler bg-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target=".navbar-collapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav flex-grow-1">
            <li className="nav-item">
              <a className="nav-link text-dark" href="/catalog">
                Principal
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/contato">
                Contato
              </a>
            </li>
          </ul>

          <div className="align-self-end">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="/registry" className="nav-link text-dark">
                  Quero me cadastrar
                </a>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link text-dark">
                  Entrar
                </a>
              </li>
              <li className="nav-item">
                <span
                  className="badge rounded-pill bg-light text-danger position-absolute ms-4 mt-0"
                  title="5 produtos(s) no carrinho"
                >
                  <small>5</small>
                </span>
                <a href="/carrinho" className="nav-link text-dark">
                  <i className="bi-cart"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
