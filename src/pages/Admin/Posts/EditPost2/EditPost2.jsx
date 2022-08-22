import { useState } from "react";
import { useParams } from "react-router-dom";
import { EditPost } from "../../../../components/Admin/Blog/EditPost/EditPost";
import Navbar2 from "../../../../components/Admin/Nav/Navbar";
import "./editPost2.css"

function EditPost2() {
    const {namepost} = useParams() 
    return (
        <div className="EditPost2">
                                 <Navbar2 />
            <EditPost namepost={namepost}/>

        </div>
    )
}

export {EditPost2}