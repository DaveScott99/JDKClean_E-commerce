import { Link } from 'react-router-dom';
import './styles.css';

export const NotLogged = () => {
  return (
    <div className='container-content'>
        <div className='login-content'>
            <h3>Já sou cadastrado</h3>
            <p>Para se autenticar, informe seu e-mail e senha</p>
            <Link to={"/login"}><button type="button" className="btn btn-lg btn-primary">Entrar</button></Link>
        </div>
        <div className='split'></div>
        <div className='registry-content'>
            <h3>Esta é minha primeira compra</h3>
            <p>O cadatro em nossa loja é simples e rápido</p>
            <Link to={"/registry"}><button type="button" className="btn btn-lg btn-outline-primary">Cadastre-se</button></Link>
        </div>
    </div>
  );
};
