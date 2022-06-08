import { useState } from "react";
import { useParams } from "react-router-dom";
import { CoursesForm } from "../../../../components/Admin/Courses/CoursesForm/CoursesForm";
import { CoursesFormTecnic } from "../../../../components/Admin/Courses/CoursesFormTecnic/CoursesFormTecnic";
import { CoursesFormEdit } from "../../../../components/Admin/Courses/EditCoursesForm/EditCoursesForm";
import Navbar2 from "../../../../components/Admin/Nav/Navbar";
import "./editCourse.css"

function EditCourse() {
    const {curso} = useParams() 
    function handleSelectTecnic(e) {
        e.preventDefault();

        window.open("/adm/coursetecnicnew", "_self")
    }

    return (
        <div className="EditCourse">
                                 <Navbar2 />


            <CoursesFormEdit curso={curso} />

        </div>
    )
}

export {EditCourse}