import "./studentArea.css";
import UniBTA from "../../assets/images/Icons/55.png"
import unifacvet from "../../assets/images/Icons/77.png"
import UniFVC from "../../assets/images/Icons/88.png"
import saoLuiz from "../../assets/images/Icons/44.png"
import CPET from "../../assets/images/Icons/66.png"
import educanexus from "../../assets/images/Icons/33.png"
import uniBF from "../../assets/images/Icons/11.png"
import Navbar2 from "../../components/Nav/Navbar";
import { Footer } from "../../components/Footer/Footer";

function StudentArea() {
    return(
        <>
        <Navbar2 />
        <div className="StudentArea">
            <div className="item">
            <div className="image">
                <img src={UniBTA} alt="Logo parceiro" />
            </div>
            <button>Acessar</button>
            </div>
            <div className="item">
            <div className="image">
                <img src={unifacvet} alt="Logo parceiro" />
            </div>
            <button>Acessar</button>
            </div>
            <div className="item">
            <div className="image">
                <img src={UniFVC} alt="Logo parceiro" />
            </div>
            <button>Acessar</button>
            </div>
            <div className="item">
            <div className="image">
                <img src={saoLuiz} alt="Logo parceiro" />
            </div>
            <button>Acessar</button>
            </div>
            <div className="item">
            <div className="image">
                <img src={uniBF} alt="Logo parceiro" />
            </div>
            <button>Acessar</button>
            </div>
            <div className="item">
            <div className="image">
                <img src={CPET} alt="Logo parceiro" />
            </div>
            <button>Acessar</button>
            </div>
            <div className="item">
            <div className="image">
                <img src={educanexus} alt="Logo parceiro" />
            </div>
            <button>Acessar</button>
            </div>
           
        </div>
        <Footer />
        </>
    )
}

export { StudentArea };

