import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import "./styles.css";

export const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (email && password) {
      const isLogged = await auth.signin(email, password);
      if (isLogged) {
        navigate("/");
      } else {
        alert("Erro ao logar");
      }
    }
  };

  return (
    <main className="flex-fill">
      <div className="container">
        <div className="row justify-content-center">
          <form className="col-sm-10 col-md-8 col-lg-6">
            <h1>Entrar</h1>

            <div className="form-floating mb-3">
              <input
                type="email"
                id="txtEmail"
                className="form-control"
                placeholder=" "
                name="txtEmail"
                onChange={(event) => setEmail(event.target.value)}
                autoFocus
              />
              <label htmlFor="txtEmail">E-mail</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="password"
                id="txtSenha"
                className="form-control"
                placeholder=" "
                onChange={(event) => setPassword(event.target.value)}
                name="txtSenha"
              />
              <label htmlFor="txtSenha">Senha</label>
            </div>

            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                value=""
                id="chkLembrar"
              />
              <label htmlFor="chkLembrar" className="form-check-label">
                Lembrar de mim
              </label>
            </div>

            <button
              type="button"
              className="btn btn-lg btn-primary"
              onClick={handleLogin}
            >
              Entrar
            </button>

            <p className="mt-3">
              Ainda não é cadastrado? <Link to="/registry">Clique aqui</Link>
              para se cadastrar.
            </p>

            <p className="mt-3">
              Esqueceu sua senha?{" "}
              <Link to="/recoverPassword"> Clique aqui</Link> para recuperá-la.
            </p>
          </form>
        </div>
      </div>
    </main>
  );
};
