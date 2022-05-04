import { CoursesPage } from "../../components/CoursesPage/CoursesPage";
import { Footer } from "../../components/Footer/Footer";
import Navbar2 from "../../components/Nav/Navbar";

function Courses() {
    return (
        <>
                    <Navbar2 />
        <CoursesPage />
        <Footer />
        </>
    )
}

export {Courses}