import "./courses.css";
import { collection, getDocs } from "firebase/firestore";
import db from '../../services/firebaseConnection';
import {IoArrowForward} from 'react-icons/io5'
import { useEffect, useState } from "react";
 
function Courses() {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
    async function loadCondadatos() {
        const querySnapshot = await getDocs(collection(db, "courses"));  
        const list = []
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
          const data = {
            id: doc.id,
            title: doc.data().title,
            image: doc.data().image,
            description: doc.data().description,
            category: doc.data().category,
            }
            
            console.log(data)
            list.push(data)
          });
          setCourses(list)
    }

    loadCondadatos()
}, [])


const newCourses = courses.slice(0,6)


    return(
        <div className="courses">
            <div className="titleBar">
                <div className="title">
                    <h1>Os melhores cursos para você alcançar seus objetivos</h1>
                    <p>Pesquise e encontre o melhor curso para você</p>
                </div>
                <div className="selection">
                    <di className="coursesSelection">
                        <button>Todos</button>
                        <button>Música</button>
                        <button>Aperfeiçoamento</button>
                        <button>Ensino médio</button>
                        <button>Técnico EAD</button>
                        <button>Graduação EAD</button>
                        <button>Pós-graduação EAD</button>
                        <button>2º Curso Superior EAD</button>
                    </di>
                </div>
            </div>


            <div className="listCourses">
                <div className="itemsCourses">
                {newCourses.map((course) => {
           return (
            <div className="itemUnic">
            <div className="image">
            <a href={`/curso-individual/${course.id}`}>
                <img src={course.image} alt={course.title} />
                </a>
            </div>
            <div className="tagBox">
            <div className="categorieTag">
                   <p>{course.category}</p>
                   </div> 
            </div>
            <div className="details">
                <a href={`/curso-individual/${course.id}`}>
                    <h3>{course.title}</h3>
                </a>
            <p>{course.description.substring(0,260)}...</p>
            </div>
            <div className="price">
                    <h3>{course.valueCourse === ""  || course.valueCourse === undefined ? "Entre em contato" : `R$ ${course.valueCourse}`}</h3>
                    <a href={`/curso-individual/${course.id}`}>Saiba mais <IoArrowForward/></a>
            </div>
            </div>
           )
        })}


                </div>
            </div>
        </div>
    )
}

export {Courses}


