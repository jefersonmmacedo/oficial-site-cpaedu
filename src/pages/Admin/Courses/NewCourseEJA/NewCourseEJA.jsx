import { useState } from "react";
import { CoursesForm } from "../../../../components/Admin/Courses/CoursesForm/CoursesForm";
import { CoursesFormEJA } from "../../../../components/Admin/Courses/CoursesFormEJA/CoursesFormEJA";
import { CoursesFormTecnic } from "../../../../components/Admin/Courses/CoursesFormTecnic/CoursesFormTecnic";
import Navbar2 from "../../../../components/Admin/Nav/Navbar";
import "./newCourseEJA.css"

function NewCourseEJA() {
    function handleSelectTecnic(e) {
        e.preventDefault();

        window.open("/adm/course", "_self")
    }

    return (
        <div className="newCourseEJA">
                                 <Navbar2 />

            <div className="buttons">
           <button onClick={handleSelectTecnic}> Voltar </button>  
            </div>

            <CoursesFormEJA />

        </div>
    )
}

export {NewCourseEJA}