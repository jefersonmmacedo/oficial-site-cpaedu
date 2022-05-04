import './footerFormCompany.css'
import logoImg from '../../../assets/images/logo.png'
import {FiFacebook, FiInstagram} from 'react-icons/fi'

function FooterFormCompany() {
    return (
        <div className="footerFormCompany">
            <img src={logoImg} alt="" />
            <div className="infos">
                <p>O CPA Educação (Centro de Educação Profissional Amaivos) é uma organização privada, que desde 2012 oferece na cidade de Saquarema - RJ, cursos de formação musical prática e teórica e cursos qualificação profissional em diversas áreas de atuação. </p>
            </div>
        </div>
    )
}

export {FooterFormCompany}