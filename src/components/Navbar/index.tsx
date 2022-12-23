import { Link } from "react-router-dom";
import "./styles.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark border-bottom shadow-sm mb-3">
      <div className="container">
        <Link to="/" className="navbar-brand text-dark fw-lighter fs-3">
          <b>JDKClean</b>
        </Link>
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
              <Link to="/catalog" className="nav-link text-dark">
                Catálogo
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link text-dark">
                Contato
              </Link>
            </li>
          </ul>

          <div className="align-self-end">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/notlogged" className="nav-link text-dark">
                  Conta
                </Link>
              </li>
              <li className="nav-item">
                <span
                  className="badge rounded-pill bg-light text-danger position-absolute ms-4 mt-0"
                  title="5 produtos(s) no carrinho"
                >
                  <small>0</small>
                </span>
                <Link to="/carrinho" className="nav-link text-dark">
                  <i className="bi-cart"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
