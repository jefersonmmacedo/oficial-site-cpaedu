import './footerFormCompany.css'
import logoImg from '../../../assets/images/logo2.png'
import {FiFacebook, FiInstagram} from 'react-icons/fi'

function FooterFormCompany() {
    return (
        <div className="footerFormCompany">
            <div className="image">
            <img src={logoImg} alt="" />
            </div>
            <div className="infos">
                   <p>O CPA Educação (Centro de Educação Profissional Amaivos)</p>
                   <p>Avenida Saquarema, nº 5070 Bacaxá - Saquarema - RJ</p>
                   <p>(Em frente ao Banco do Brasil)</p>
                   <p>CEP: 28994-597</p>
            </div>
        </div>
    )
}

export {FooterFormCompany}