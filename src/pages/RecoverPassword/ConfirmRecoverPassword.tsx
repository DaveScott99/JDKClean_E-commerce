import { Link } from "react-router-dom";

export const ConfirmRecoverPassword = () => {
  return (
    <div>
      <h1>Instruções Enviadas!</h1>
      <hr />
      <p>Caro cliente,</p>
      <p>
        As instruções para a realização de cadastro de uma nova senha foram
        enviadas para o e-mail <b>email@dominio.com.br</b>. Abra a mensagem que
        lhe enviamos e siga as instruções corretamente para cadastrar uma nova
        senha.
      </p>
      <p>Agradecemos pela confiança em nossos serviços.</p>
      <p>
        Cordialmente,
        <br />
        Central de Relacionamento Quitanda Online
      </p>
      <p>
        <Link to="/catalog" className="btn btn-lg btn-danger">
          Voltar à Página Principal
        </Link>
      </p>
    </div>
  );
};
