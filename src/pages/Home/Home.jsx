import { SliderCarroussel } from "../../components/Slider/SliderCarroussel";
import { Depoiments } from "../../components/Depoiments/Depoiments";
import "./home.css"
import { Footer } from "../../components/Footer/Footer";
import Navbar2 from "../../components/Nav/Navbar";
import { Search } from "../../components/Search/Search";
import { MostViewedCourses } from "../../components/MostViewedCourses/MostViewedCourses";
import { AboutPrev } from "../../components/AboutPrev/AboutPrev";
import { ElementsHome } from "../../components/ElementsHome/ElementsHome";

function Home() {
    return (
        <div className="home">
            <Navbar2 />
            <SliderCarroussel />
            <div className="animation">
            <span className="mouse">
                <span className="mouse-wheel"></span>
            </span>
            </div>
            <Search />
            <MostViewedCourses />
            <AboutPrev />
            <br />
            <br />
            <h1>O QUE NOSSOS ALUNOS DIZEM SOBRE NÓS...</h1>
            <div className="dep">
            <Depoiments />
            </div>
            <ElementsHome />
            <Footer />
        </div>
    )
}

export { Home }