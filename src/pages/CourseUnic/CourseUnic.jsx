import { Footer } from "../../components/Footer/Footer";
import Navbar2 from "../../components/Nav/Navbar";
import { collection, getDocs } from "firebase/firestore";
import db from '../../services/firebaseConnection';
import "./courseUnic.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import student from '../../assets/images/student1.png';
import { IoAlarmOutline, IoSchoolOutline, IoLibraryOutline } from 'react-icons/io5'


function CourseUnic() {
    const {curso} = useParams();
    console.log(curso)

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
            description: doc.data().description,
            category: doc.data().category,
            portion: doc.data().portion,
            linkVideo: doc.data().linkVideo,
            date: doc.data().date,
            qtdDate: doc.data().qtdDate,
            duration: doc.data().duration,
            typeDuration: doc.data().typeDuration,
            value: doc.data().value,
            valueCourse: doc.data().valueCourse,
            valuePromotional: doc.data().valuePromotional,
            format: doc.data().format,
            hours: doc.data().hours,
            curriculum: doc.data().curriculum,
            }
            
            console.log(data)
            list.push(data)
          });
          setCourses(list)
    }

    loadCondadatos()
}, [])

console.log(courses)
const selected = courses?.filter((course) => (course.title === curso));

console.log(courses.title)
console.log(selected)



    return (
        <>
             <Navbar2 />
        <div className="courseUnic">
                <div className="title">
                    <div className="text">
                    <h3>{selected[0].category}</h3>
                    <h1>{selected[0].title}</h1>
                    </div>
                 <div className="image">
                    <img src={student} alt={selected[0].title} />
                </div>
                </div>
                <div className="menu">
                    <div className="text">
                    <p>Sobre o curso</p>
                    <p>Entenda o curso</p>
                    <p>O profissional</p>
                    <p>Áreas de atuação</p>
                    <p>Grade Curricular</p>
                    </div>
                    <button>Quero me inscrever</button>
                </div>
                <div className="aboutCourse">
                    <div className="text">
                        <h1>Cobre o Curso</h1>
                        <p>{selected[0].description}</p>
                    </div>
                    <div className="itens">
                        <div className="item">
                            <div className="icon">
                                <IoAlarmOutline />
                            </div>
                            <div className="text">
                                <p>Duração</p>
                                <p> <b>{selected[0].duration} {selected[0].typeDuration}</b> </p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="icon">
                            <IoSchoolOutline />
                            </div>
                            <div className="text">
                                <p>Certificação Conferida</p>
                                <p><b>{selected[0].category}</b> </p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="icon">
                            <IoLibraryOutline />
                            </div>
                            <div className="text">
                                <p>Modalidade</p>
                                <p><b>{selected[0].format}</b> </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="subscript">
                    <div className="image">
                        <img src={selected[0].image} alt={selected[0].title} />
                    </div>
                    <div className="text">
                        <h1>Seja um profissional em</h1>
                        <h1><b>{selected[0].title}</b></h1>

                        <button>Inscreva-se agora!</button>
                    </div>
                </div>

                <div className="grade">
                    <div className="text">
                        <h1>Grade Curricular</h1>
                        <p>Conheça a grade curricular do curso</p>
                    </div>
                    <div className="list">
                    <p>{selected[0].curriculum}</p>
                    </div>
                </div>

        </div>
            <Footer />
        </>
    )
}

export { CourseUnic }


