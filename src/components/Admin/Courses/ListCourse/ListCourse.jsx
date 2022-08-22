import Navbar2 from '../../Nav/Navbar';
import { collection, getDocs, query, where, doc, deleteDoc, orderBy } from "firebase/firestore";
import { toast } from "react-toastify";
import db from '../../../../services/firebaseConnection';
import { useState, useEffect } from 'react';
import {IoTrashOutline, IoRefreshOutline, IoCreateOutline, IoSearchOutline} from 'react-icons/io5';
import './listCourse.css';


function ListCourse() {


    const [courses, setCourses] = useState([]); 
    const [categories, setCategories] = useState([]);
    const [search, setSearch] = useState("")
    const [type, setType] = useState("")

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

  useEffect(() => {
    async function loadCondadatos() {
        const querySnapshot = await getDocs(collection(db, "categories"));  
        const list = []
        querySnapshot.forEach((doc) => {
           // console.log(`${doc.id} => ${doc.data()}`);
          const data = {
            id: doc.id,
            title: doc.data().title,
            }
            
           // console.log(data)
            list.push(data)
          });
          setCategories(list)
    }

    loadCondadatos()
}, [])

  async function handleDeleteCurso(id) {

    const deletar = window.confirm("Deseja deletar o curso?");
    if(deletar === true) {
      await deleteDoc(doc(db, "courses", id));
      toast.info("Curso Deletado.");
      
      window.location.reload(false)
    } 


  }
    
  function handleSetTypeCategory(category) {
    setType(category);
    setSearch("")
}
function handleSearchCourse(e) {
    e.preventDefault();
    setType("")
}


function handleUpdateCourse(course, category) {
  if(category === "Cursos Técnicos") {
    window.open(`/adm/coursetecnic/${course}`, "_self")
  } else if (category === "Ensino Médio - EJA") {
    window.open(`/adm/courseejaedit/${course}`, "_self")
  } else{
    window.open(`/adm/course/${course}/${category}`, "_self")
  }

}
const searchLower = search.toLowerCase()
const FilterCourses = type !== "" ? 
courses?.filter((course) => (course.category === type)) :
search !== "" ?
courses?.filter((course) => (course.title.toLowerCase().includes(searchLower))) : courses

FilterCourses.sort(function (coursesA, coursesB) {
  if (coursesA.title == coursesB.title)
    return 0;
  if (coursesA.title < coursesB.title)
    return -1
  if (coursesA.title > coursesB.title)
    return 1
});
// ordenada por ordem alfabetica.
console.log(FilterCourses);


    return (
        <div className="ListCourses">
        <Navbar2 />
<h1>Cursos</h1>
<h4>{courses.length} Cadastrados</h4>


<div className="link">
<a href="/adm/coursenew">Novo curso</a>
{/* <a href="/adm/courseeja">Novo Curso EJA</a> */}
</div>
<div className="selection">
                    <div className="coursesPageSelection">
                        <button onClick={() => {handleSetTypeCategory("")}} >Todos</button>
                        {categories.map((categorie) => {
                            return (
                                <button key={categorie.id} onClick={() => {handleSetTypeCategory(categorie.title)}}>{categorie.title}</button>
                            )
                        })
                        }
                    </div>
                </div>
<div className="Search">
        <form>
            <button>
                <IoSearchOutline />
            </button>
            <input onClick={handleSearchCourse} type="text" placeholder="Digite o que deseja estudar" value={search.toLowerCase()} onChange={(e) => setSearch(e.target.value)}/>
        </form>
        </div>

{FilterCourses.map((course) => {
  return (
      <div className="CoursesUnic" key={course.id}>
          <div className="text">
            <div className="textUnic">
               <h5>Curso: {course.title}</h5>
            </div>
            <div className="textUnic">
            <h5>Categoria: {course.category}</h5>
            </div>
            <div className="textUnic">
            <h5>Formato: {course.format}</h5>
            </div>
            <div className="textUnic">
            <h5>Disponibilidade: {course.Availability}</h5>
            </div>
  


               {/* <select>
                   <option value={course.Availability}>{course.Availability === "" || course.Availability === undefined || course.Availability === null ? "Selecione" : course.Availability}</option>
                   <option value={course.Availability === "Disponível"? "Aguardar": "Disponível"}>{course.Availability === "Disponível"? "Aguardar": "Disponível"}</option>
               </select> */}
          <div className="button">
               <button onClick={() => {handleUpdateCourse(course.title, course.category )}}><IoCreateOutline/></button>
              <button onClick={() => {handleDeleteCurso(course.id)}}><IoTrashOutline/></button>
          </div>
          </div>
      </div>
  )
})}

</div>
    )
}

export {ListCourse}

