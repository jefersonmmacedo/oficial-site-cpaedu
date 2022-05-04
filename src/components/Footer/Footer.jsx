import './footer.css';
import {FooterForm} from "./FooterForm/FooterForm"
import {FooterFormCompany} from "./FooterFormCompany/FooterFormCompany"
import {ContactWhatsapp} from "../Footer/ContactWhatsapp/ContactWhatsapp"

function Footer() {

    const date = new Date().getFullYear()
    return (
        <div className="footer">
            <div className="components">
                <FooterFormCompany />
                <FooterForm />
                <ContactWhatsapp />
                </div>
                <div className="copy">
                    <div className="companyName">
                   <p> &#169; CPA Educação - Todos os direitos reservados {date}</p>
                        </div>
                        <div className="devs">
                            <p>Feito por: <a href="https://www.codingit.com.br/" target="_blank" rel="noreferrer">Coding.It</a> & <a href="http://likemkdigital.com.br/" target="_blank" rel="noreferrer">Like Marketing Digital</a></p>
                        </div>
                </div>
        </div>
    )
}

export {Footer}