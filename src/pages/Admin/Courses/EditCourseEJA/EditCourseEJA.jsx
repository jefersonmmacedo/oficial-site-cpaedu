import { useParams } from "react-router-dom";
import { CoursesFormEditEJA } from "../../../../components/Admin/Courses/EditCoursesFormEJA/EditCoursesFormEJA";
import Navbar2 from "../../../../components/Admin/Nav/Navbar";
import "./editCourseEJA.css"

function EditCourseEJA() {
    const {curso} = useParams() 
    function handleSelectTecnic(e) {
        e.preventDefault();

        window.open("/adm/coursetecnicnew", "_self")
    }

    return (
        <div className="EditCourseEJA">
                                 <Navbar2 />


            <CoursesFormEditEJA curso={curso} />

        </div>
    )
}

export {EditCourseEJA}