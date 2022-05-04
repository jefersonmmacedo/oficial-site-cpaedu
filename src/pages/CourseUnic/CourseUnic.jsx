import { Footer } from "../../components/Footer/Footer";
import Navbar2 from "../../components/Nav/Navbar";
import "./courseUnic.css";

function CourseUnic() {
    return (
        <>
             <Navbar2 />
        <div className="courseUnic">
            <div className="details">
                <div className="title">
                    <h1>Titulo Curso</h1>
                </div>
                <div className="category">
                    <p>Música</p>
                </div>
                <div className="image">
                    <img src="https://img.r7.com/images/cursinho-06032019161333172?dimensions=660x360" alt="Curso profissionalizante" />
                </div>
                <div className="description">
                    <p>O curso de Administração forma profissionais para atuarem na área executiva, em funções administrativas, ou ainda abrirem o seu próprio negócio, capazes, tanto conceitualmente quanto na prática, de contribuir para o sucesso das organizações em que atuarem.</p>
                </div>
                <div className="mec">
                    <p><b>Cadastro MEC:</b> código de cadastro no MAC</p>
                </div>
            </div>
            <div className="caracteristcs">
                <div className="video">
                    
                <iframe width="100%" src="https://www.youtube.com/embed/ovxp_MJIp_o" frameBorder="0" ></iframe>
                </div>
                <div className="price">
                    <h5><b>De:</b> R$ 100,00</h5>
                    <h2><b>Por:</b> R$ 89,00</h2>
                </div>
                <div className="item">
                    <h4><b>Categoria:</b></h4>
                    <h4>Música</h4>
                </div>
                <div className="item">
                <h4><b>Total de aulas</b></h4>
                    <h4>50</h4>
                </div>
                <div className="item">
                <h4><b>Duração</b></h4>
                    <h4>8 Meses</h4>
                </div>
                <div className="item">
                <h4><b>Encontros</b></h4>
                    <h4>1 por Semana</h4>
                </div>
                <div className="item">
                <h4><b>Parcelamento</b></h4>
                    <h4>9x R$ 8,99</h4>
                </div> 
                <a href="/prematricula">Comprar</a>
            </div>
        </div>
            <Footer />
        </>
    )
}

export { CourseUnic }