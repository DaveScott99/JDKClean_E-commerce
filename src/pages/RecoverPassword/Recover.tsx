import { Link } from "react-router-dom";

export const Recover = () => {
    return (
        <div className="row justify-content-center">
            <form className="col-sm-10 col-md-8 col-lg-6">
              <h1>Recuperação de Senha</h1>
  
              <div className="form-floating mb-3">
                <input type="email" id="txtEmail" className="form-control" placeholder=" " name="txtEmail" autoFocus />
                <label htmlFor="txtEmail">E-mail</label>
              </div>
  
              <Link to="/confirmRecoverPassword" className="btn btn-lg btn-primary">Recuperar Senha</Link> 
  
              <p className="mt-3">
                Ainda não é cadastrado? <Link to="/registry">Clique aqui </Link>
                  para se cadastrar.
              </p>
            </form>
          </div>
    );
}