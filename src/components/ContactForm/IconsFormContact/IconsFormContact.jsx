import './iconsFormContact.css';
import { IoLogoWhatsapp, IoLogoFacebook, IoLogoInstagram } from 'react-icons/io5'

function IconsFormContact() {
    return (
        <div className="IconsFormContact">
            <div className="follow">
                <div className="title">
                    <h1>Siga o CPA EDUCAÇÂO</h1>
                </div>
                <div className="icons">
                    <a href="https://www.facebook.com/cpaeducacao" rel="noreferrer" target="_blank">
                    <p><IoLogoFacebook /></p>
                    </a>
                    <a href="https://www.instagram.com/cpaeducacao/" rel="noreferrer" target="_blank">
                    <p><IoLogoInstagram /></p>
                    </a>
                    <a href="https://wa.me/5522999942800?text=Olá. Gostaria de saber mais detalhes sobre os cursos" rel="noreferrer" target="_blank">
                    <p><IoLogoWhatsapp /></p>
                    </a>



                    
                </div>
            </div>
            <div className="map">
                <h2>Eai, vamos conversar?</h2>
                <div className="map2">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6181.377952470925!2d-42.47470033062687!3d-22.896054078425056!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x705ca0b92fc0b9e3!2zQ1BBIEVkdWNhw6fDo28!5e0!3m2!1spt-BR!2sbr!4v1653927177304!5m2!1spt-BR!2sbr" width="100%" height="400" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="text">
                        <h4><b>CPA EDUCAÇÂO</b></h4>
                        <h4>O CPA Educação (Centro de Educação Profissional Amaivos).<br /><br />
                        Avenida Saquarema, Nº 5070 Bacaxá - Saquarema - RJ.<br />
                        CEP: 28994-597<br />
                        (Em frente ao Banco do Brasil).</h4>
                        <br />
                        <h4>E-mail: contato@cpaedu.com.br<br />
                        Telefone: (22) 2161-0101<br />
                        Whatsapp: (22) 99994-2800</h4>
                </div>
            </div>

        </div>
    )
}

export { IconsFormContact };


