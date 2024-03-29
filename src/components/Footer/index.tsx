import { Link } from "react-router-dom";
import "./styles.css";

export const Footer = () => {
  return (
    <footer className="border-top bg-light">
      <div className="container">
        <div className="row py-3">
          <div className="col-12 col-md-4 text-center">
            &copy; 2022 - JDKClean Produtos de limpeza
            <br />
            Rua Da Alegria <br />
            CNPJ 99.999.999/000-00
          </div>
          <div className="col-12 col-md-4 text-center">
            <Link to="/privacy"
              className="text-decoration-none text-dark"
            >
              Política de Privacidade
            </Link>
            <br />
            <Link to="/terms" className="text-decoration-none text-dark">
              Termos de Uso
            </Link>
            <br />
            <Link to="/aboutus"
              className="text-decoration-none text-dark"
            >
              Quem Somos
            </Link>
            <br />
            <Link to="/exchangesAndReturns" className="text-decoration-none text-dark">
              Trocas e Devoluções
            </Link>
          </div>
          <div className="col-12 col-md-4 text-center">
            <Link to="/contact" className="text-decoration-none text-dark">
              Contato pelo site
            </Link>
            <br />
            E-mail: 
            <a
              href="mailto:email@dominio.com"
              className="text-decoration-none text-dark"
            >
              email@dominio.com
            </a>
            <br />
            Telefone:
            <a
              href="phone:9999999999"
              className="text-decoration-none text-dark"
            >
              (99) 99999-9999
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
