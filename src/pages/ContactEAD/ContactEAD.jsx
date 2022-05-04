import { ContactFormEAD } from "../../components/ContactFormEAD/ContactFormEAD"
import { Footer } from "../../components/Footer/Footer"
import Navbar2 from "../../components/Nav/Navbar"
import "./contactEAD.css"

function ContactEAD() {
    return (
        <div className="contact">
                        <Navbar2 />
            <ContactFormEAD />
            <Footer />
        </div>
    )
}

export {ContactEAD}