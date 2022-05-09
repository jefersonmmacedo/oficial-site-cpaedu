import { useParams } from "react-router-dom"
import { ContactFormEAD } from "../../components/ContactFormEAD/ContactFormEAD"
import { Footer } from "../../components/Footer/Footer"
import Navbar2 from "../../components/Nav/Navbar"
import "./contactEAD.css"

function ContactEAD() {
    const {curso} = useParams();
    return (
        <div className="contact">
                        <Navbar2 />
            <ContactFormEAD curso={curso} />
            <Footer />
        </div>
    )
}

export {ContactEAD}