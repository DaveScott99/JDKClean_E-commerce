import "./styles.css";

export const Footer = () => {
  return (
    <footer className="border-top text-muted bg-light">
      <div className="container">
        <div className="row py-3">
          <div className="col-12 col-md-4 text-center">
            &copy; 2022 - JDKClean Produtos de limpeza
            <br />
            Rua Francisco de Góes Araújo, 175, São Paulo/SP <br />
            CNPJ 48.512.272/0001-05
          </div>
          <div className="col-12 col-md-4 text-center">
            <a
              href="/privacidade"
              className="text-decoration-none text-dark"
            >
              Política de Privacidade{" "}
            </a>
            <br />
            <a href="/termos" className="text-decoration-none text-dark">
              Termos de Uso{" "}
            </a>
            <br />
            <a
              href="/quemsomos"
              className="text-decoration-none text-dark"
            >
              Quem Somos{" "}
            </a>
            <br />
            <a href="/trocas" className="text-decoration-none text-dark">
              Trocas e Devoluções
            </a>
          </div>
          <div className="col-12 col-md-4 text-center">
            <a href="/contato" className="text-decoration-none text-dark">
              Contato pelo site{" "}
            </a>
            <br />
            E-mail:
            <a
              href="mailto:email@dominio.com"
              className="text-decoration-none text-dark"
            >
              email@dominio.com{" "}
            </a>
            <br />
            Telefone:
            <a
              href="phone:9999999999"
              className="text-decoration-none text-dark"
            >
              (11) 96018-1150
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
