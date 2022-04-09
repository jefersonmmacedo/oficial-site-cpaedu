import "./contactForm.css"
import {IoLocationOutline, IoMailOutline, IoCallOutline, IoLogoWhatsapp, IoLogoInstagram, IoLogoFacebook } from 'react-icons/io5'
function ContactForm() {
    return (
        <div className="contactForm">
          
            <div className="contactBlock">
                
            <div className="formulary">
            <div className="title">
                <h1>Entrar em conato</h1>
                <p>Tem uma pergunta ou apenas quer dizer oi? Adoraríamos ouvir de você.</p>
            </div>
                <form action="">
                    <div className="name">
                        <input type="text" name="" id="" placeholder="Nome"/>
                        <input type="email" name="" id="" placeholder="E-mail"/>
                    </div>
                        <input type="text" name="" id="" placeholder="Assunto"/>
                        <textarea name="" id="" cols="30" rows="10" placeholder="Mensagem"></textarea>
                </form>
            </div>
            <div className="information">
                <div className="item">
                    <h3>Endereço</h3>
                    <p><IoLocationOutline/>Avenida Saquarema, Nº 5070 </p>
                    <p>Bacaxá - Saquarema - RJ. CEP: 28994-597</p>
                    <p>(Em frente ao Banco do Brasil)</p>
                </div>
                <div className="item">
                    <h3>Telefones</h3>
                    <p><IoCallOutline/> (22) 2161-0101</p>
                    <p><IoLogoWhatsapp/> (22) 99994-2800 </p>
                </div>
                <div className="item">
                    <h3>Email</h3>
                    <p><IoMailOutline/> contato@cpaedu.com.br</p>
                </div>
                <div className="social">
                <h3>Redes sociais</h3>
                <div className="icons">
                    <p><IoLogoFacebook/> </p>
                    <p><IoLogoInstagram/></p>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export {ContactForm}