import { useState } from "react";
import { CoursesForm } from "../../../../components/Admin/Courses/CoursesForm/CoursesForm";
import { CoursesFormTecnic } from "../../../../components/Admin/Courses/CoursesFormTecnic/CoursesFormTecnic";
import Navbar2 from "../../../../components/Admin/Nav/Navbar";
import "./newCourse.css"

function NewCourse() {
    const [type, setType] = useState("Complete");


    function handleSelectTecnic(e) {
        e.preventDefault()
        setType("Tecnic")
    }
    function handleSelectComplete(e) {
        e.preventDefault()
        setType("Complete")
    }
    return (
        <div className="newCourse">
                                 <Navbar2 />

            <div className="buttons">
            {type === "Complete" ?
           <button onClick={handleSelectTecnic}> Curso Técnico </button>
            : type === "Tecnic" ?
            <button onClick={handleSelectComplete}> Cursos Completos</button>
            : ""
            }    
            </div>

            {type === "Complete" ?
            <CoursesForm />
            : type === "Tecnic" ?
            <CoursesFormTecnic />
            : ""
            }
        </div>
    )
}

export {NewCourse}