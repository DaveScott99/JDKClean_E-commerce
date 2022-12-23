import { ChangeEvent, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useApi } from "../../hooks/useApi";
import { UserRegistry } from "../../types/User";

export const Register = () => {
  const [userRegistry, setUserRegistry] = useState<UserRegistry>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    roles: {
        id: 1
    }
  });

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setUserRegistry({ ...userRegistry, [name]: value });
  }

  const api = useApi();

  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement> ) => {
    event.preventDefault();

    const { firstName, lastName, email, password } = userRegistry;

    if(!firstName || !lastName || !email || !password) {
        // TRATAR MESSANGEM DE ERRO
        window.alert("Preencha todos os campos");
    }
    
    api.registry(userRegistry);
    console.log("Registrou")

  }, [api, userRegistry]);

  return (
    <section id="form-section" className="form-container flex-fill">
      <div className="container">
        <div className="row justify-content-center">
          <form
            name="newRegistry"
            className="col-sm-10 col-md-8 col-lg-6 centered"
            onSubmit={handleSubmit}
          >
            <h1 className="login_title">Cadastrar</h1>

            <div className="form-floating mb-3">
              <input
                type="text"
                id="txtNome"
                className="form-control"
                placeholder=" "
                name="firstName"
                onChange={onChange}
                autoFocus
              />
              <label htmlFor="txtNome">Nome</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                id="txtSobrenome"
                className="form-control"
                placeholder=" "
                name="lastName"
                onChange={onChange}
              />
              <label htmlFor="txtSobrenome">Sobrenome</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="email"
                id="txtEmail"
                className="form-control"
                placeholder=" "
                name="email"
                onChange={onChange}
              />
              <label htmlFor="txtEmail">E-mail</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="password"
                id="txtSenha"
                className="form-control"
                placeholder=" "
                name="password"
                onChange={onChange}
              />
              <label htmlFor="txtSenha">Senha</label>
            </div>

            <button type="submit" className="btn btn-lg btn-primary">
              Registrar
            </button>

            <p className="mt-3">
              Já é cadastrado? <Link to="/login">Clique aqui </Link>
              para se entrar.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
