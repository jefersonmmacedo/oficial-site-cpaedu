import { Footer } from "../../components/Footer/Footer";
import Navbar2 from "../../components/Nav/Navbar";
import { collection, getDocs } from "firebase/firestore";
import db from '../../services/firebaseConnection';
import "./courseUnic.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CourseUnic() {
    const id = useParams()

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
            hours: doc.data().hours
            }
            
           // console.log(data)
            list.push(data)
          });
          setCourses(list)
    }

    loadCondadatos()
}, [])

const selectCourse = courses.filter((courseUnic) => courseUnic.id === id.id);
console.log(selectCourse[0])



    return (
        <>
             <Navbar2 />
        <div className="courseUnic">
            <div className="details">
                <div className="title">
                    <h1>{selectCourse[0].title}</h1>
                </div>
                <div className="category">
                    <p>{selectCourse[0].category}</p>
                </div>
                <div className="image">
                    <img src={selectCourse[0].image} alt={selectCourse[0].title} />
                </div>
                <div className="description">
                    <p>{selectCourse[0].description}</p>
                </div>
                <div className="mec">
                    <p><b>Cadastro MEC:</b> {selectCourse[0].mec === undefined ? "" : selectCourse[0].mec}</p>
                </div>
            </div>
            <div className="caracteristcs">
                {selectCourse[0].linkVideo === undefined || selectCourse[0].linkVideo === "" ? <></>
                :
                <div className="video">   
                <iframe width="100%" src="https://www.youtube.com/embed/ovxp_MJIp_o" frameBorder="0" ></iframe>
                </div>
                }
                <div className="price">
                    {selectCourse[0].valueCourse === undefined || selectCourse[0].valueCourse === "" ?
                    <><h2>Entre em contato</h2></>
                    : <>
                    <h5><b>De:</b> R$ 100,00</h5>
                    <h2><b>Por:</b> R$ 89,00</h2>
                    </>
                    }
                </div>
                <div className="item">
                    <h4><b>Categoria:</b></h4>
                    <h4>{selectCourse[0].category}</h4>
                </div>
                <div className="item">
                <h4><b>Total de horas</b></h4>
                    <h4>{selectCourse[0].hours} Horas</h4>
                </div>
                <div className="item">
                <h4><b>Duração</b></h4>
                    <h4>{selectCourse[0].duration} {selectCourse[0].typeDuration}</h4>
                </div>
                <div className="item">
                <h4><b>Encontros</b></h4>
                    <h4>{selectCourse[0].date} por {selectCourse[0].qtdDate}</h4>
                </div>
                {selectCourse[0].portion === undefined || selectCourse[0].portion === "" ?
                <></>
            : 
                <div className="item">
                <h4><b>Parcelamento</b></h4>
                    <h4>9x R$ 8,99</h4>
                </div> 
            }

                <a href={`/prematricula/${selectCourse[0].title}`}>Comprar</a>
            </div>
        </div>
            <Footer />
        </>
    )
}

export { CourseUnic }