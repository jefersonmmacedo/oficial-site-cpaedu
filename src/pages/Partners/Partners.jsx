import "./partners.css";
import uniBF from "../../assets/images/Icons/11.png"
import prefeitura from "../../assets/images/Icons/22.png"
import educaMais from "../../assets/images/Icons/33.png"
import SaoLuiz from "../../assets/images/Icons/44.png"
import UniBTA from "../../assets/images/Icons/55.png"
import CPET from "../../assets/images/Icons/66.png"
import unifacvet from "../../assets/images/Icons/77.png"
import UniFVC from "../../assets/images/Icons/88.png"
import Navbar2 from "../../components/Nav/Navbar";
import { Footer } from "../../components/Footer/Footer";

function Partners() {
    return(
        <>
        <Navbar2 />
        <div className="Partners">
            <div className="image">
                <img src={educaMais} alt="Logo parceiro" />
            </div>
            <div className="image">
                <img src={CPET} alt="Logo parceiro" />
            </div>
            <div className="image">
                <img src={prefeitura} alt="Logo parceiro" />
            </div>
            <div className="image">
                <img src={SaoLuiz} alt="Logo parceiro" />
            </div>
            <div className="image">
                <img src={unifacvet} alt="Logo parceiro" />
            </div>
            <div className="image">
                <img src={UniFVC} alt="Logo parceiro" />
            </div>
            <div className="image">
                <img src={uniBF} alt="Logo parceiro" />
            </div>
            <div className="image">
                <img src={UniBTA} alt="Logo parceiro" />
            </div>



        </div>
        <Footer />
        </>
    )
}

export { Partners };

