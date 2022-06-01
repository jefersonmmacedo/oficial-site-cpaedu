import './aboutPrev.css';
import company1 from '../../assets/images/company1.png';
import company2 from '../../assets/images/company2.png';

function AboutPrev() {
    return (
        <div className="AboutPrev">
            <div className="text">
                <h3>O CPA Educação (Centro de Educação Profissional Amaivos)</h3>
                <div className="line"></div>
                <h2>Oferecemos cursos de formação musical prática e teórica e cursos qualificação profissional em diversas áreas de atuação</h2>
                <button>CONHEÇA MAIS SOBRE A CPAEDU</button>

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