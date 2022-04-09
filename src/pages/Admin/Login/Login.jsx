import './login.css';
import LogoImg from '../../../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate()

    function handleLogin() {
        navigate("/dashboard")
    }
    
    return (
        <div className="login">
            <div className="logo">
                <img src={LogoImg} alt="" />
            </div>
            <div className="form">
                <form action="" onSubmit={handleLogin}>
                    <input type="text" placeholder="Login" />
                    <input type="password" placeholder="Senha" />
                    <button type="submit">Entrar</button>
                </form>
            </div>
        </div>
    )
}

export {Login}