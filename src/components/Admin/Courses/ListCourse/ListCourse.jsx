import Navbar2 from '../../Nav/Navbar';
import { collection, getDocs, query, where, doc, deleteDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import db from '../../../../services/firebaseConnection';
import { useState, useEffect } from 'react';
import {IoTrashOutline, IoRefreshOutline, IoCreateOutline} from 'react-icons/io5';
import './listCourse.css';


function ListCourse() {


    const [courses, setCourses] = useState([]); 

    useEffect(() => {
      async function loadCondadatos() {
          const querySnapshot = await getDocs(collection(db, "courses"));  
          const list = []
          querySnapshot.forEach((doc) => {
             // console.log(`${doc.id} => ${doc.data()}`);
            const data = {
              id: doc.id, 
              title:doc.data().title,
                image:doc.data().photoUrlAvatar,
                description:doc.data().description,
                category:doc.data().category,
                subCategory:doc.data().subCategory,
                valueCourse:doc.data().valueCourse,
                valuePromotional:doc.data().valuePromotional,
                link:doc.data().link,
                linkVideo:doc.data().linkVideo,
                curriculum:doc.data().curriculum,
                mec:doc.data().mec,
                hours:doc.data().hours,
                format:doc.data().format,
                portion:doc.data().portion,
                value:doc.data().value,
                qtdDate:doc.data().qtdDate,
                date:doc.data().date,
                duration:doc.data().duration,
                typeDuration:doc.data().typeDuration,
                availability:doc.data().availability,
                professional:doc.data().professional,
                occupationArea:doc.data().occupationArea,
              }
              
            console.log(data)
              list.push(data)
            });
            setCourses(list)
      }
  
      loadCondadatos()
  }, []);

  async function handleDeleteCurso(id) {

    const deletar = window.confirm("Deseja deletar o curso?");
    if(deletar === true) {
      await deleteDoc(doc(db, "courses", id));
      toast.info("Curso Deletado.");
      
      window.location.reload(false)
    } 


  }
    
  


function handleUpdateCourse(course, category) {
  if(category === "Cursos Técnicos EAD") {
    window.open(`/adm/coursetecnic/${course}`, "_self")
  } else {
    window.open(`/adm/course/${course}`, "_self")
  }
}
    
    return (
        <div className="ListCourses">
        <Navbar2 />
<h1>Curso</h1>
<div className="link">
<a href="/adm/coursenew">Novo curso</a>
</div>

{courses.map((course) => {
  return (
      <div className="CoursesUnic" key={course.id}>
          <div className="text">
               <h5>{course.title}</h5>
               <h5>{course.category}</h5>
               <h5>{course.Availability}</h5>
               {/* <select>
                   <option value={course.Availability}>{course.Availability === "" || course.Availability === undefined || course.Availability === null ? "Selecione" : course.Availability}</option>
                   <option value={course.Availability === "Disponível"? "Aguardar": "Disponível"}>{course.Availability === "Disponível"? "Aguardar": "Disponível"}</option>
               </select> */}
          </div>
          <div className="button">
          
               <button onClick={() => {handleUpdateCourse(course.title, course.category )}}><IoCreateOutline/></button>
              <button onClick={() => {handleDeleteCurso(course.id)}}><IoTrashOutline/></button>
          </div>
      </div>
  )
})}

</div>
    )
}

export {ListCourse}

