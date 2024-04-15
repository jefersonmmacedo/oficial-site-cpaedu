import { useState } from "react";
import { CoursesForm } from "../../../../components/Admin/Courses/CoursesForm/CoursesForm";
import { CoursesFormTecnic } from "../../../../components/Admin/Courses/CoursesFormTecnic/CoursesFormTecnic";
import Navbar2 from "../../../../components/Admin/Nav/Navbar";
import "./newCourseTecnic.css"

function NewCourseTecnic() {

    function handleSelectComplete(e) {
        e.preventDefault();

        window.open("/adm/coursenew", "_self")
    }

    return (
        <div className="newCourseTecnic">
            <Navbar2 />

            <div className="buttons">
            <button onClick={handleSelectComplete}> Cursos Completos</button>
            </div>

            <CoursesFormTecnic />

        </div>
    )
}

export {NewCourseTecnic}
