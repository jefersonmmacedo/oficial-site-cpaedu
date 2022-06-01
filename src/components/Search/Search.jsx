import './search.css';
import {IoSearchOutline} from 'react-icons/io5'
import { useState } from 'react';

function Search() {
    const [course, setCourse] = useState("")
    const [alert, setAlert] = useState(false)

    function handleSearchCourses(e) {
        e.preventDefault();
        if(course !== "") {
            window.open(`cursos/${course}`, "_self")
        } else {
            setAlert(true)
        }
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