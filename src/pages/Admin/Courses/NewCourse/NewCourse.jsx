import { useState } from "react";
import { CoursesForm } from "../../../../components/Admin/Courses/CoursesForm/CoursesForm";
import { CoursesFormTecnic } from "../../../../components/Admin/Courses/CoursesFormTecnic/CoursesFormTecnic";
import Navbar2 from "../../../../components/Admin/Nav/Navbar";
import "./newCourse.css"

function NewCourse() {
    const [type, setType] = useState("Complete");


    function handleSelectType(e) {
        e.preventDefault()

        if(type === "Complete") {
            setType("Basic")
        } else {
            setType("Complete")
        }
    }
    return (
        <div className="newCourse">
                                 <Navbar2 />

            <div className="buttons">
                <button onClick={handleSelectType}> Graduação - Pós Graduação - Música - Profissionalizantes + ( 2º Licenciatura / Formação pedagógica )</button>
                <button onClick={handleSelectType}> Curso Técnico / 2º Graduação </button>
            </div>

            {type === "Complete" ?
            <CoursesForm />
            :
            <CoursesFormTecnic />
            }
        </div>
    )
}

export {NewCourse}