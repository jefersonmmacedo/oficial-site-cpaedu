import Navbar from "../../components/Navbar/Navbar";
import { SliderCarroussel } from "../../components/Slider/SliderCarroussel";
import { Courses } from "../../components/Courses/Courses";
import { Depoiments } from "../../components/Depoiments/Depoiments";
import "./home.css"
import { Footer } from "../../components/Footer/Footer";
import { Categories } from "../../components/Categories/Categories";
import Navbar2 from "../../components/Nav/Navbar";

function Home() {
    return (
        <div className="home">
            <Navbar2 />
            <SliderCarroussel />
            <Categories />
            <Courses />
            <h1>Depoimentos de nossos alunos</h1>
            <div className="dep">
            <Depoiments />
            <a href="/depoiments">Todos os depoimentos</a>
            </div>
            <Footer />
        </div>
    )
}

export { Home }