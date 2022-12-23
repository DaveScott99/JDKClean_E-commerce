export const Contact = () => {
  return (
    <div className="row justify-content-center">
      <form className="col-sm-10 col-md-8 col-lg-6">
        <h1>Entre em Contato</h1>

        <div className="form-floating mb-3">
          <input
            type="text"
            id="txtNomeCompleto"
            className="form-control"
            placeholder=" "
            name="txtNomeCompleto"
            autoFocus
          />
          <label htmlFor="txtEmail">Nome Completo</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="email"
            id="txtEmail"
            className="form-control"
            placeholder=" "
            name="txtEmail"
          />
          <label htmlFor="txtEmail">E-mail</label>
        </div>

        <div className="form-floating mb-3">
          <textarea
            id="txtMensagem"
            className="form-control"
            placeholder=" "
            name="txtMensagem"
          ></textarea>
          <label htmlFor="txtSenha">Mensagem</label>
        </div>

        <button type="button" className="btn btn-lg btn-primary">
          Enviar Mensagem
        </button>

        <p className="mt-3">
          Faremos nosso melhor para responder sua mensagem em até 2 dias úteis.
        </p>

        <p className="mt-3">
          Atenciosamente, <br />
          Central de Relacionamento JDKClean.
        </p>
      </form>
    </div>
  );
};
