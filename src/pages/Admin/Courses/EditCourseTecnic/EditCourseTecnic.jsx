import { useState } from "react";
import { useParams } from "react-router-dom";
import { CoursesForm } from "../../../../components/Admin/Courses/CoursesForm/CoursesForm";
import { CoursesFormTecnic } from "../../../../components/Admin/Courses/CoursesFormTecnic/CoursesFormTecnic";
import { CoursesFormTecnicEdit } from "../../../../components/Admin/Courses/EditCoursesFormTecnic/EditCoursesFormTecnic";
import Navbar2 from "../../../../components/Admin/Nav/Navbar";
import "./editCourseTecnic.css"

function EditCourseTecnic() {
    const {curso} = useParams();

    function handleSelectComplete(e) {
        e.preventDefault();

        window.open("/adm/coursenew", "_self")
    }

    return (
        <div className="EditCourseTecnic">
            <Navbar2 />

            <CoursesFormTecnicEdit curso={curso} />

        </div>
    )
}

export {EditCourseTecnic}