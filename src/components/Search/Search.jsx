import './search.css';
import {IoSearchOutline} from 'react-icons/io5'
import { useState } from 'react';
import { toast } from "react-toastify";

function Search() {
    const [course, setCourse] = useState("")
    const [alert, setAlert] = useState(false)

    function handleSearchCourses(e) {
        e.preventDefault();
        if(course === "") {
            setAlert(true)
        }
        window.open(`cursos/${course}`)
    }
    return (
        <div className="Search">
        <form onSubmit={handleSearchCourses}>
            <button>
                <IoSearchOutline />
            </button>
            <input type="text" placeholder="Digite o que deseja estudar" value={course} onChange={(e) => {setCourse(e.target.value)}}/>
        </form>
            {alert === false ? "" : <h5>Digite um curso para pesquisa</h5> }
        </div>
    )
}

export {Search}