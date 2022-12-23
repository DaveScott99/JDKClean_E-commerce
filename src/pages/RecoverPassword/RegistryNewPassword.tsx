import { Link } from "react-router-dom"

export const RegistryNewPassword = () => {
    return (
    <div className="row justify-content-center">
            <form className="col-sm-10 col-md-8 col-lg-6">
              <h1>Digite sua nova senha</h1>

              <div className="form-floating mb-3">
                <input type="password" id="txtSenha" className="form-control" placeholder=" " name="txtSenha" autoFocus />
                <label htmlFor="txtSenha">Nova Senha</label>
              </div>

              <div className="form-floating mb-3">
                <input type="password" id="txtSenha" className="form-control" placeholder=" " name="txtSenha" />
                <label htmlFor="txtSenha">Confirme a Nova Senha</label>
              </div>
  
              <Link to="/confirmRegistryNewPassword" className="btn btn-lg btn-primary">Cadastrar Nova Senha</Link>

            </form>
          </div>
    )
}