import './styles.css';

export const Login = () => {
    return (
        <main className="flex-fill">
            <div className="container">
                <div className="row justify-content-center">
                    <form className="col-sm-10 col-md-8 col-lg-6">
                        <h1>Identifique-se, por favor</h1>
            
                        <div className="form-floating mb-3">
                            <input type="email" id="txtEmail" className="form-control" placeholder=" " name="txtEmail" autoFocus />
                            <label htmlFor="txtEmail">E-mail</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input type="password" id="txtSenha" className="form-control" placeholder=" " name="txtSenha" />
                            <label htmlFor="txtSenha">Senha</label>
                        </div>

                        <div className="form-check mb-3">
                            <input type="checkbox" className="form-check-input" value="" id="chkLembrar" />
                            <label htmlFor="chkLembrar" className="form-check-label">Lembrar de mim</label>
                        </div>
            
                        <button type="button" className="btn btn-lg btn-primary">Entrar</button>
            
                        <p className="mt-3">
                            Ainda não é cadastrado? <a href="/cadastro.html">Clique aqui</a>
                            para se cadastrar.
                        </p>

                        <p className="mt-3">
                            Esqueceu sua senha? <a href="/recuperarsenha.html"> Clique aqui</a> para recuperá-la.
                        </p>
                    </form>
                </div>
            </div>
        </main>
    );
}