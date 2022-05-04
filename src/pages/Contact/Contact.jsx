import { ContactForm } from "../../components/ContactForm/ContactForm"
import { Footer } from "../../components/Footer/Footer"
import Navbar2 from "../../components/Nav/Navbar"
import "./contact.css"

function Contact() {
    return (
        <div className="contact">
           <Navbar2 />
            <ContactForm />
            <Footer />
        </div>
    )
}

export {Contact}