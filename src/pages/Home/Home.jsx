import { Categories } from "../../components/Categories/Categories";
import Navbar from "../../components/Navbar/Navbar";
import { Slider } from "../../components/Slider/Slider";
import { Courses } from "../../components/Courses/Courses";
import { Depoiments } from "../../components/Depoiments/Depoiments";
import "./home.css"
import { Footer } from "../../components/Footer/Footer";

function Home() {
    return (
        <div>

            <Slider />
            <div className="blank">

            </div>
            <Categories />
            <Courses />
            <Depoiments />

        </div>
    )
}

export { Home }