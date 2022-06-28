import { useState } from "react";
import { CoursesForm } from "../../../../components/Admin/Courses/CoursesForm/CoursesForm";
import { CoursesFormTecnic } from "../../../../components/Admin/Courses/CoursesFormTecnic/CoursesFormTecnic";
import Navbar2 from "../../../../components/Admin/Nav/Navbar";
import "./newCourseEJA.css"

function NewCourseEJA() {
    function handleSelectTecnic(e) {
        e.preventDefault();

        window.open("/adm/coursetecnicnew", "_self")
    }

    return (
        <div className="newCourseEJA">
                                 <Navbar2 />

            <div className="buttons">
           <button onClick={handleSelectTecnic}> Curso Técnico </button>  
            </div>

            <CoursesForm />

        </div>
    )
}

export {NewCourseEJA}