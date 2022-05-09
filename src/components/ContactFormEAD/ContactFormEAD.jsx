import "./contactFormEAD.css"
import {IoLocationOutline, IoMailOutline, IoCallOutline, IoLogoWhatsapp, IoLogoInstagram, IoLogoFacebook } from 'react-icons/io5'
function ContactFormEAD({curso}) {
    return (
        <div className="contactFormEAD">
         
            <div className="contactBlock">
                
            <div className="formulary">
            <div className="title">
                <h1>Entre em contato <br />e faça sua matrícula!</h1>
                <p>O seu futuro é agora!</p>
            </div>
                <form action="">
                    <div className="name">
                        <input type="text" name="" id="" placeholder="Nome Completo"/>
                        <input type="email" name="" id="" placeholder="E-mail"/>
                    </div>
                    <div className="name">
                        <input type="text" name="" id="" placeholder="Whatsapp"/>
                        <input type="text" name="" id="" placeholder="Idade"/>
                    </div>
                    <div className="name">
                        <input type="text" name="" id="" placeholder="Bairro"/>
                        <input type="text" name="" id="" placeholder="Cidade"/>
                    </div>
                        <input type="email" name="" id="" placeholder="Curso" value={curso}/>
                       
                </form>
            </div>
            </div>
        </div>
    )
}

export {ContactFormEAD}