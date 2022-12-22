import { Link } from 'react-router-dom';

export const Register = () => {
    return (
        <section id="form-section" className="form-container flex-fill">
            <div className='container'>
                <div className="row justify-content-center">    
                    <form name="newRegistry" className="col-sm-10 col-md-8 col-lg-6 centered">
                        <h1 className="login_title">Cadastrar</h1>

                        <div className="form-floating mb-3">
                            <input type="text" id="txtNome" className="form-control" placeholder=" " name="txtNome" autoFocus />
                            <label htmlFor="txtNome">Nome</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input type="text" id="txtSobrenome" className="form-control" placeholder=" " name="txtSobrenome" />
                            <label htmlFor="txtSobrenome">Sobrenome</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input type="email" id="txtEmail" className="form-control" placeholder=" " name="txtEmail" />
                            <label htmlFor="txtEmail">E-mail</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input type="password" id="txtSenha" className="form-control" placeholder=" " name="txtSenha" />
                            <label htmlFor="txtSenha">Senha</label>
                        </div>
                            
                        <button type="button" className="btn btn-lg btn-primary">Registrar</button>

                        <p className="mt-3">
                            Já é cadastrado? <Link to="/login">Clique aqui </Link>
                            para se entrar.
                        </p>

                    </form>
                </div>
            </div>
        </section>
    );
}