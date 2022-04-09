import './footerForm.css'
import logoImg from '../../../assets/images/logo.png'
import {FiFacebook, FiInstagram} from 'react-icons/fi'

function FooterForm() {
    return (
        <div className="footerForm">
            <img src={logoImg} alt="" />
            <div className="infos">
                <p><b>Endereço:</b> Avenida Saquarema, Nº 5070<br />
                Bacaxá - Saquarema - RJ. CEP: 28994-597<br />
                (Em frente ao Banco do Brasil)</p>
                <p><b>E-mail:</b> contato@cpaedu.com.br</p>
                <p><b>Telefone:</b> (22) 2161-0101</p>
                <p><b>Whatsapp:</b> (22) 99994-2800</p>
            </div>
            <div className="icons">
                <p> <a href="https://www.facebook.com/cpaeducacao" target="_blank" rel="noreferrer"><FiFacebook /></a></p>
                <p><a href="https://www.instagram.com/cpaeducacao/" target="_blank" rel="noreferrer"><FiInstagram /></a></p>
            </div>
        </div>
    )
}

export {FooterForm}