import './aboutPrev.css';
import company1 from '../../assets/images/company1.png';
import company2 from '../../assets/images/company2.png';

function AboutPrev() {
    return (
        <div className="AboutPrev">
            <div className="text">
                <h3>Centro de Educação Profissional Amaivos</h3>
                <div className="line"></div>
                <h2>Organização privada que desde 2012 oferece serviços de educação profissional em diversas áreas de atuação.</h2>
                <button>CONHEÇA MAIS SOBRE O CPA</button>

            </div>
            <div className="images">
                <div className="image1">
                    <img src={company1} alt="" />
                    <br />
                    <br />
                </div>
                <div className="image2">
                    <img src={company2} alt="" />
                    <br />
                    <br />
                </div>
            </div>
        </div>
    )
}

export {AboutPrev}