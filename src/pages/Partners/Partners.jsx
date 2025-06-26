import "./partners.css";
import Ivy from "../../assets/images/Icons/99.png"
import Unicorp from "../../assets/images/Icons/98.png"
import ceviw from "../../assets/images/Icons/97.jpg"
import UniFVC from "../../assets/images/Icons/88.png"
import saoLuiz from "../../assets/images/Icons/44.png"
import CPET from "../../assets/images/Icons/66.png"
import educanexus from "../../assets/images/Icons/33.png"
import prefeitura from "../../assets/images/Icons/22.png"
import SaoLuiz from "../../assets/images/Icons/44.png"
import uniBF from "../../assets/images/Icons/11.png"
import Navbar2 from "../../components/Nav/Navbar";
import { Footer } from "../../components/Footer/Footer";

function Partners() {
    return(
        <>
        <Navbar2 />
        <div className="Partners">
            <div className="image">
                <img src={educanexus} alt="Logo parceiro" />
            </div>
            <div className="image">
                <img src={prefeitura} alt="Logo parceiro" />
            </div>
            <div className="image">
                <img src={uniBF} alt="Logo parceiro" />
            </div>
            <div className="image2">
                <img src={Ivy} alt="Logo parceiro" width="90"/>
            </div>
            <div className="image">
                <img src={Unicorp} alt="Logo parceiro" width="90"/>
            </div>
            <div className="image">
                <img src={ceviw} alt="Logo parceiro" width="90"/>
            </div>

        </div>
        <Footer />
        </>
    )
}

export { Partners };

