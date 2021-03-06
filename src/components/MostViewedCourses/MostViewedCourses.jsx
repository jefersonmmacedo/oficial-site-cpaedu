import './mostViewedCourses.css';
import { collection, getDocs, query, where } from "firebase/firestore";
import db from '../../services/firebaseConnection';
import {IoSchool, IoBook} from "react-icons/io5"
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom"

function MostViewedCourses() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
    async function loadCondadatos() {
        const querySnapshot = await getDocs(collection(db, "courses"));  
        const list = []
        querySnapshot.forEach((doc) => {
           // console.log(`${doc.id} => ${doc.data()}`);
          const data = {
            id: doc.id,
            title: doc.data().title,
            image: doc.data().image,
            format: doc.data().format,
            category: doc.data().category,
            link: doc.data().link
            }
            
           // console.log(data)
            list.push(data)
          });
          setCourses(list)
    }

    loadCondadatos()
}, [])

console.log(courses)
const limit = courses.slice(0,5)
console.log(limit)

    return (
        <div className="MostViewedCourses">
            <div className="top">
            <h3>CURSOS <b>MAIS VISTOS</b></h3>
            <a href="/cursos/selecione" ><b>VER TODOS</b></a>
            </div>

            <div className="courses">
                {limit.map((course) => {
                    return (
                        <div className="CourseUnicDestaque" key={course.id}>
                             {course.category === "Cursos Técnicos" ? 
                            <a href={course.link} alt={course.title} target="_blank">
                        <div className="image">
                            <img src={course.image} alt={course.image} />
                        </div>
                        </a>:
                        course.category === "Ensino Médio - EJA" ? 
                        <Link to={`/curso-individual-eja/${course.title}`}>
                        <div className="image">
                            <img src={course.image} alt={course.image} />
                        </div>
                        </Link>:
                            <Link to={`/curso-individual/${course.title}`}>
                        <div className="image">
                            <img src={course.image} alt={course.image} />
                        </div>
                        </Link>}

                        <div className="title">
                        {course.category === "Cursos Técnicos" ? 
                         <a href={course.link} alt={course.title} target="_blank"><p>{course.title} </p></a>:
                         course.category === "Ensino Médio - EJA" ?
                    <a href={`/curso-individual-eja/${course.title}`}><p>{course.title}</p></a> :
                    <a href={`/curso-individual/${course.title}`}><p>{course.title}</p></a>
                            }
                        </div>
            
                        <div className="info">
                            <div className="icon">
                                <IoSchool />
                            </div>
                            <div className="text">
                                <h4><b>FORMAÇÃO</b></h4>
                                <h5>{course.category}</h5>
                            </div>
                        </div>
                        <div className="info">
                            <div className="icon">
                                <IoBook />
                            </div>
                            <div className="text">
                                <h4><b>FORMATO</b></h4>
                                <h5>{course.format}</h5>
                            </div>
   
                        </div>
                    </div>
                    )
                })}
            </div>

        </div>
    )
}

export { MostViewedCourses }