import "./coursesPage.css";
import { collection, getDocs } from "firebase/firestore";
import db from '../../services/firebaseConnection';
import {IoSearchOutline, IoLogoWhatsapp} from 'react-icons/io5'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
 
function CoursesPage() {
    const {curso} = useParams();
    const [courses, setCourses] = useState([]);
    const [categories, setCategories] = useState([]);
    const [type, setType] = useState("");
    const [name, setName] = useState("");
    const [option, setOption] = useState("");
    const [search, setSearch] = useState(curso === undefined || curso === "" ||  curso === "selecione"? "" : curso);

    function HandleOpen(e) {
     e.preventDefault();
   
     window.open(`https://wa.me/5522999942800?text=Olá. Me chamo ${name} e gostaria de saber se vocês possuem o curso de ${option} para ofertar.`)
   }

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
            link: doc.data().link,
            }
            
           // console.log(data)
            list.push(data)
          });
          setCourses(list)
    }

    loadCondadatos()
}, [])
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


function handleSetTypeCategory(category) {
    setType(category);
    setSearch("")
}
function handleSearchCourse(e) {
    e.preventDefault();
    setType("")
}

console.log(courses);

const searchLower = search.toLowerCase()

    const a = type !== "" ? 
                courses?.filter((course) => (course.title.substring(0,1) === "A" && course.category === type)) :
                search !== "" ?
                courses?.filter((course) => (course.title.substring(0,1) === "A" && course.title.toLowerCase().includes(searchLower))) :
                courses?.filter((course) => (course.title.substring(0,1) === "A" ))
    const b = type !== "" ? 
                courses?.filter((course) => (course.title.substring(0,1) === "B" && course.category === type)) :
                search !== "" ?
                courses?.filter((course) => (course.title.substring(0,1) === "B" && course.title.toLowerCase().includes(searchLower))) :
                courses?.filter((course) => (course.title.substring(0,1) === "B" ))
    const c = type !== "" ? 
                courses?.filter((course) => (course.title.substring(0,1) === "C" && course.category === type)) :
                search !== "" ?
                courses?.filter((course) => (course.title.substring(0,1) === "C" && course.title.toLowerCase().includes(searchLower))) :
                courses?.filter((course) => (course.title.substring(0,1) === "C" ))
    const d = type !== "" ? 
                courses?.filter((course) => (course.title.substring(0,1) === "D" && course.category === type)) :
                search !== "" ?
                courses?.filter((course) => (course.title.substring(0,1) === "D" && course.title.toLowerCase().includes(searchLower))) :
                courses?.filter((course) => (course.title.substring(0,1) === "D" ))
    const e = type !== "" ? 
                courses?.filter((course) => (course.title.substring(0,1) === "E" && course.category === type)) :
                search !== "" ?
                courses?.filter((course) => (course.title.substring(0,1) === "E" && course.title.toLowerCase().includes(searchLower))) :
                courses?.filter((course) => (course.title.substring(0,1) === "E" ))
    const f = type !== "" ? 
                courses?.filter((course) => (course.title.substring(0,1) === "F" && course.category === type)) :
                search !== "" ?
                courses?.filter((course) => (course.title.substring(0,1) === "F" && course.title.toLowerCase().includes(searchLower))) :
                courses?.filter((course) => (course.title.substring(0,1) === "F" ))
    const g = type !== "" ? 
                courses?.filter((course) => (course.title.substring(0,1) === "G" && course.category === type)) :
                search !== "" ?
                courses?.filter((course) => (course.title.substring(0,1) === "G" && course.title.toLowerCase().includes(searchLower))) :
                courses?.filter((course) => (course.title.substring(0,1) === "G" ))
    const h = type !== "" ? 
                courses?.filter((course) => (course.title.substring(0,1) === "H" && course.category === type)) :
                search !== "" ?
                courses?.filter((course) => (course.title.substring(0,1) === "H" && course.title.toLowerCase().includes(searchLower))) :
                courses?.filter((course) => (course.title.substring(0,1) === "H" ))
    const i = type !== "" ? 
                courses?.filter((course) => (course.title.substring(0,1) === "I" && course.category === type)) :
                search !== "" ?
                courses?.filter((course) => (course.title.substring(0,1) === "I" && course.title.toLowerCase().includes(searchLower))) :
                courses?.filter((course) => (course.title.substring(0,1) === "I" ))
    const j = type !== "" ? 
                courses?.filter((course) => (course.title.substring(0,1) === "J" && course.category === type)) :
                search !== "" ?
                courses?.filter((course) => (course.title.substring(0,1) === "J" && course.title.toLowerCase().includes(searchLower))) :
                courses?.filter((course) => (course.title.substring(0,1) === "J" ))
    const k = type !== "" ? 
                courses?.filter((course) => (course.title.substring(0,1) === "K" && course.category === type)) :
                search !== "" ?
                courses?.filter((course) => (course.title.substring(0,1) === "K" && course.title.toLowerCase().includes(searchLower))) :
                courses?.filter((course) => (course.title.substring(0,1) === "K" ))
    const l = type !== "" ? 
                courses?.filter((course) => (course.title.substring(0,1) === "L" && course.category === type)) :
                search !== "" ?
                courses?.filter((course) => (course.title.substring(0,1) === "L" && course.title.toLowerCase().includes(searchLower))) :
                courses?.filter((course) => (course.title.substring(0,1) === "L" ))
    const m = type !== "" ? 
                courses?.filter((course) => (course.title.substring(0,1) === "M" && course.category === type)) :
                search !== "" ?
                courses?.filter((course) => (course.title.substring(0,1) === "M" && course.title.toLowerCase().includes(searchLower))) :
                courses?.filter((course) => (course.title.substring(0,1) === "M" ))
    const n = type !== "" ? 
                courses?.filter((course) => (course.title.substring(0,1) === "N" && course.category === type)) :
                search !== "" ?
                courses?.filter((course) => (course.title.substring(0,1) === "N" && course.title.toLowerCase().includes(searchLower))) :
                courses?.filter((course) => (course.title.substring(0,1) === "N" ))
    const o = type !== "" ? 
                courses?.filter((course) => (course.title.substring(0,1) === "O" && course.category === type)) :
                search !== "" ?
                courses?.filter((course) => (course.title.substring(0,1) === "O" && course.title.toLowerCase().includes(searchLower))) :
                courses?.filter((course) => (course.title.substring(0,1) === "O" ))
    const p = type !== "" ? 
                courses?.filter((course) => (course.title.substring(0,1) === "P" && course.category === type)) :
                search !== "" ?
                courses?.filter((course) => (course.title.substring(0,1) === "P" && course.title.toLowerCase().includes(searchLower))) :
                courses?.filter((course) => (course.title.substring(0,1) === "P" ))
    const q = type !== "" ? 
                courses?.filter((course) => (course.title.substring(0,1) === "Q" && course.category === type)) :
                search !== "" ?
                courses?.filter((course) => (course.title.substring(0,1) === "Q" && course.title.toLowerCase().includes(searchLower))) :
                courses?.filter((course) => (course.title.substring(0,1) === "Q" ))
    const r = type !== "" ? 
                courses?.filter((course) => (course.title.substring(0,1) === "R" && course.category === type)) :
                search !== "" ?
                courses?.filter((course) => (course.title.substring(0,1) === "R" && course.title.toLowerCase().includes(searchLower))) :
                courses?.filter((course) => (course.title.substring(0,1) === "R" ))
    const s = type !== "" ? 
                courses?.filter((course) => (course.title.substring(0,1) === "S" && course.category === type)) :
                search !== "" ?
                courses?.filter((course) => (course.title.substring(0,1) === "S" && course.title.toLowerCase().includes(searchLower))) :
                courses?.filter((course) => (course.title.substring(0,1) === "S" ))
    const t = type !== "" ? 
                courses?.filter((course) => (course.title.substring(0,1) === "T" && course.category === type)) :
                search !== "" ?
                courses?.filter((course) => (course.title.substring(0,1) === "T" && course.title.toLowerCase().includes(searchLower))) :
                courses?.filter((course) => (course.title.substring(0,1) === "T" ))
    const u = type !== "" ? 
                courses?.filter((course) => (course.title.substring(0,1) === "U" && course.category === type)) :
                search !== "" ?
                courses?.filter((course) => (course.title.substring(0,1) === "U" && course.title.toLowerCase().includes(searchLower))) :
                courses?.filter((course) => (course.title.substring(0,1) === "U" ))
    const v = type !== "" ? 
                courses?.filter((course) => (course.title.substring(0,1) === "V" && course.category === type)) :
                search !== "" ?
                courses?.filter((course) => (course.title.substring(0,1) === "V" && course.title.toLowerCase().includes(searchLower))) :
                courses?.filter((course) => (course.title.substring(0,1) === "V" ))
    const x = type !== "" ? 
                courses?.filter((course) => (course.title.substring(0,1) === "X" && course.category === type)) :
                search !== "" ?
                courses?.filter((course) => (course.title.substring(0,1) === "X" && course.title.toLowerCase().includes(searchLower))) :
                courses?.filter((course) => (course.title.substring(0,1) === "X" ))
    const y = type !== "" ? 
                courses?.filter((course) => (course.title.substring(0,1) === "Y" && course.category === type)) :
                search !== "" ?
                courses?.filter((course) => (course.title.substring(0,1) === "Y" && course.title.toLowerCase().includes(searchLower))) :
                courses?.filter((course) => (course.title.substring(0,1) === "Y" ))
    const w = type !== "" ? 
                courses?.filter((course) => (course.title.substring(0,1) === "W" && course.category === type)) :
                search !== "" ?
                courses?.filter((course) => (course.title.substring(0,1) === "W" && course.title.toLowerCase().includes(searchLower))) :
                courses?.filter((course) => (course.title.substring(0,1) === "W" ))
    const z = type !== "" ? 
                courses?.filter((course) => (course.title.substring(0,1) === "Z" && course.category === type)) :
                search !== "" ?
                courses?.filter((course) => (course.title.substring(0,1) === "Z" && course.title.toLowerCase().includes(searchLower))) :
                courses?.filter((course) => (course.title.substring(0,1) === "Z" ))




    return(
        <div className="coursesPage">
            <div className="titleBar">
                <div className="title">
                    <h1>Escolha uma opção de curso</h1>
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

                        <select>
                            <option value="">Todos</option>
                            {categories.map((categorie) => {
                            return (
                                <option key={categorie.id} value={categorie.title}>{categorie.title}</option>
                            )
                        })
                        }
                        </select>

                    </div>
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

            <div className="listcoursesPage">
                <div className="itemscoursesPage">
                  
                    
                     {a.length === 0 ? "" : 
                     <div className="itemUnic">
                         <h2>A</h2>  
                {a.map((course) => {
           return (

                <div className="text">
                    <div className="bloc1">
                    <h6>Curso</h6>
                         <hr />
                     {course.category === "Cursos Técnicos" ? 
                         <a href={course.link} alt={course.title} target="_blank"><p>{course.title} </p></a>:
                    <a href={`/curso-individual/${course.title}`}><p>{course.title}</p></a>
                            }
                    </div>
                    <div className="bloc2">
                    <h6>Formação</h6>
                         <hr />
                    <p>{course.category}</p>
                </div>
                    </div>
           )
        })}
        </div>
                  }
                  
                  {b.length === 0 ? "" :  
                  <div className="itemUnic">
                      <h2>B</h2>
                {b.map((course) => {
           return (

                <div className="text">
                    <div className="bloc1">
                    <h6>Curso</h6>
                         <hr />
                     {course.category === "Cursos Técnicos" ? 
                         <a href={course.link} alt={course.title} target="_blank"><p>{course.title} </p></a>:
                    <a href={`/curso-individual/${course.title}`}><p>{course.title}</p></a>
                            }
                    </div>
                    <div className="bloc2">
                    <h6>Formação</h6>
                         <hr />
                    <p>{course.category}</p>
                </div>
                    </div>
           )
        })}
        </div>
                  }
                  
                  {c.length === 0 ? "" :  
                  <div className="itemUnic">
                      <h2>C</h2>
                {c.map((course) => {
           return (
                <div className="text">
                    <div className="bloc1">
                    <h6>Curso</h6>
                <hr />
                     {course.category === "Cursos Técnicos" ? 
                         <a href={course.link} alt={course.title} target="_blank"><p>{course.title} </p></a>:
                    <a href={`/curso-individual/${course.title}`}><p>{course.title}</p></a>
                            }
                    </div>
                    <div className="bloc2">
                    <h6>Formação</h6>
                    <hr />
                    <p>{course.category}</p>
                </div>
                    </div>
           )
        })}
        </div>
                  
                  }
                  {d.length === 0 ? "" :  
                  <div className="itemUnic">
                      <h2>D</h2>
                {d.map((course) => {
           return (

                <div className="text">
                    <div className="bloc1">
                    <h6>Curso</h6>
                         <hr />
                     {course.category === "Cursos Técnicos" ? 
                         <a href={course.link} alt={course.title} target="_blank"><p>{course.title} </p></a>:
                    <a href={`/curso-individual/${course.title}`}><p>{course.title}</p></a>
                            }
                    </div>
                    <div className="bloc2">
                    <h6>Formação</h6>
                         <hr />
                    <p>{course.category}</p>
                </div>
                    </div>
           )
        })}
        </div>
                  }
                    
                    {e.length === 0 ? "" :  
                    <div className="itemUnic">
                        <h2>E</h2>
                {e.map((course) => {
           return (

                <div className="text">
                    <div className="bloc1">
                    <h6>Curso</h6>
                         <hr />
                     {course.category === "Cursos Técnicos" ? 
                         <a href={course.link} alt={course.title} target="_blank"><p>{course.title} </p></a>:
                    <a href={`/curso-individual/${course.title}`}><p>{course.title}</p></a>
                            }
                    </div>
                    <div className="bloc2">
                    <h6>Formação</h6>
                         <hr />
                    <p>{course.category}</p>
                </div>
                    </div>
           )
        })}
        </div>
                  }
                    
                    {f.length === 0 ? "" :  
                    <div className="itemUnic">
                        <h2>F</h2>
                {f.map((course) => {
           return (

                <div className="text">
                    <div className="bloc1">
                    <h6>Curso</h6>
                         <hr />
                     {course.category === "Cursos Técnicos" ? 
                         <a href={course.link} alt={course.title} target="_blank"><p>{course.title} </p></a>:
                    <a href={`/curso-individual/${course.title}`}><p>{course.title}</p></a>
                            }
                    </div>
                    <div className="bloc2">
                    <h6>Formação</h6>
                         <hr />
                    <p>{course.category}</p>
                </div>
                    </div>
           )
        })}
        </div>
                  }
                    
                    {g.length === 0 ? "" :  
                    <div className="itemUnic">
                        <h2>G</h2>
                {g.map((course) => {
           return (

                <div className="text">
                    <div className="bloc1">
                    <h6>Curso</h6>
                         <hr />
                     {course.category === "Cursos Técnicos" ? 
                         <a href={course.link} alt={course.title} target="_blank"><p>{course.title} </p></a>:
                    <a href={`/curso-individual/${course.title}`}><p>{course.title}</p></a>
                            }
                    </div>
                    <div className="bloc2">
                    <h6>Formação</h6>
                         <hr />
                    <p>{course.category}</p>
                </div>
                    </div>
           )
        })}
        </div>
                  }
                    
                    {h.length === 0 ? "" :  
                    <div className="itemUnic">
                        <h2>H</h2>
                {h.map((course) => {
           return (

                <div className="text">
                    <div className="bloc1">
                    <h6>Curso</h6>
                         <hr />
                     {course.category === "Cursos Técnicos" ? 
                         <a href={course.link} alt={course.title} target="_blank"><p>{course.title} </p></a>:
                    <a href={`/curso-individual/${course.title}`}><p>{course.title}</p></a>
                            }
                    </div>
                    <div className="bloc2">
                    <h6>Formação</h6>
                         <hr />
                    <p>{course.category}</p>
                </div>
                    </div>
           )
        })}
        </div>
                  }
                    
                    {i.length === 0 ? "" :  
                    <div className="itemUnic">
                        <h2>I</h2>
                {i.map((course) => {
           return (

                <div className="text">
                    <div className="bloc1">
                    <h6>Curso</h6>
                         <hr />
                     {course.category === "Cursos Técnicos" ? 
                         <a href={course.link} alt={course.title} target="_blank"><p>{course.title} </p></a>:
                    <a href={`/curso-individual/${course.title}`}><p>{course.title}</p></a>
                            }
                    </div>
                    <div className="bloc2">
                    <h6>Formação</h6>
                         <hr />
                    <p>{course.category}</p>
                </div>
                    </div>
           )
        })}
        </div>
                  }
                    
                    {j.length === 0 ? "" :  
                    <div className="itemUnic">
                        <h2>J</h2>
                {j.map((course) => {
           return (

                <div className="text">
                    <div className="bloc1">
                    <h6>Curso</h6>
                         <hr />
                     {course.category === "Cursos Técnicos" ? 
                         <a href={course.link} alt={course.title} target="_blank"><p>{course.title} </p></a>:
                    <a href={`/curso-individual/${course.title}`}><p>{course.title}</p></a>
                            }
                    </div>
                    <div className="bloc2">
                    <h6>Formação</h6>
                         <hr />
                    <p>{course.category}</p>
                </div>
                    </div>
           )
        })}
        </div>
                  }
                    
                    {k.length === 0 ? "" :  
                    <div className="itemUnic">
                        <h2>K</h2>
                {k.map((course) => {
           return (

                <div className="text">
                    <div className="bloc1">
                    <h6>Curso</h6>
                         <hr />
                     {course.category === "Cursos Técnicos" ? 
                         <a href={course.link} alt={course.title} target="_blank"><p>{course.title} </p></a>:
                    <a href={`/curso-individual/${course.title}`}><p>{course.title}</p></a>
                            }
                    </div>
                    <div className="bloc2">
                    <h6>Formação</h6>
                         <hr />
                    <p>{course.category}</p>
                </div>
                    </div>
           )
        })}
        </div>
                  }
                    
                    {l.length === 0 ? "" : 
                    <div className="itemUnic">
                        <h2>L</h2>
                {l.map((course) => {
           return (

                <div className="text">
                    <div className="bloc1">
                    <h6>Curso</h6>
                         <hr />
                     {course.category === "Cursos Técnicos" ? 
                         <a href={course.link} alt={course.title} target="_blank"><p>{course.title} </p></a>:
                    <a href={`/curso-individual/${course.title}`}><p>{course.title}</p></a>
                            }
                    </div>
                    <div className="bloc2">
                    <h6>Formação</h6>
                         <hr />
                    <p>{course.category}</p>
                </div>
                    </div>
           )
        })}
        </div>
                  }
                    
                    {m.length === 0 ? "" :  
                    <div className="itemUnic">
                        <h2>M</h2>
                {m.map((course) => {
           return (

                <div className="text">
                    <div className="bloc1">
                    <h6>Curso</h6>
                         <hr />
                     {course.category === "Cursos Técnicos" ? 
                         <a href={course.link} alt={course.title} target="_blank"><p>{course.title} </p></a>:
                    <a href={`/curso-individual/${course.title}`}><p>{course.title}</p></a>
                            }
                    </div>
                    <div className="bloc2">
                    <h6>Formação</h6>
                         <hr />
                    <p>{course.category}</p>
                </div>
                    </div>
           )
        })}
        </div>
                  }
                    
                    {n.length === 0 ? "" :  
                    <div className="itemUnic">
                        <h2>N</h2>
                {n.map((course) => {
           return (

                <div className="text">
                    <div className="bloc1">
                    <h6>Curso</h6>
                         <hr />
                     {course.category === "Cursos Técnicos" ? 
                         <a href={course.link} alt={course.title} target="_blank"><p>{course.title} </p></a>:
                    <a href={`/curso-individual/${course.title}`}><p>{course.title}</p></a>
                            }
                    </div>
                    <div className="bloc2">
                    <h6>Formação</h6>
                         <hr />
                    <p>{course.category}</p>
                </div>
                    </div>
           )
        })}
        </div>
                  }
                    
                    {o.length === 0 ? "" :  
                    <div className="itemUnic">
                        <h2>O</h2>
                {o.map((course) => {
           return (

                <div className="text">
                    <div className="bloc1">
                    <h6>Curso</h6>
                         <hr />
                     {course.category === "Cursos Técnicos" ? 
                         <a href={course.link} alt={course.title} target="_blank"><p>{course.title} </p></a>:
                    <a href={`/curso-individual/${course.title}`}><p>{course.title}</p></a>
                            }
                    </div>
                    <div className="bloc2">
                    <h6>Formação</h6>
                         <hr />
                    <p>{course.category}</p>
                </div>
                    </div>
           )
        })}
        </div>
                  }
                    
                    {p.length === 0 ? "" :  
                    <div className="itemUnic">
                        <h2>P</h2>
                {p.map((course) => {
           return (

                <div className="text">
                    <div className="bloc1">
                    <h6>Curso</h6>
                         <hr />
                     {course.category === "Cursos Técnicos" ? 
                         <a href={course.link} alt={course.title} target="_blank"><p>{course.title} </p></a>:
                    <a href={`/curso-individual/${course.title}`}><p>{course.title}</p></a>
                            }
                    </div>
                    <div className="bloc2">
                    <h6>Formação</h6>
                         <hr />
                    <p>{course.category}</p>
                </div>
                    </div>
           )
        })}
        </div>
                  }
                    
                    {q.length === 0 ? "" :  
                    <div className="itemUnic">
                        <h2>Q</h2>
                {q.map((course) => {
           return (

                <div className="text">
                    <div className="bloc1">
                    <h6>Curso</h6>
                         <hr />
                     {course.category === "Cursos Técnicos" ? 
                         <a href={course.link} alt={course.title} target="_blank"><p>{course.title} </p></a>:
                    <a href={`/curso-individual/${course.title}`}><p>{course.title}</p></a>
                            }
                    </div>
                    <div className="bloc2">
                    <h6>Formação</h6>
                         <hr />
                    <p>{course.category}</p>
                </div>
                    </div>
           )
        })}
        </div>
                  }
                    
                    {r.length === 0 ? "" :  
                    <div className="itemUnic">
                        <h2>R</h2>
                {r.map((course) => {
           return (

                <div className="text">
                    <div className="bloc1">
                    <h6>Curso</h6>
                         <hr />
                     {course.category === "Cursos Técnicos" ? 
                         <a href={course.link} alt={course.title} target="_blank"><p>{course.title} </p></a>:
                    <a href={`/curso-individual/${course.title}`}><p>{course.title}</p></a>
                            }
                    </div>
                    <div className="bloc2">
                    <h6>Formação</h6>
                         <hr />
                    <p>{course.category}</p>
                </div>
                    </div>
           )
        })}
        </div>
                  }
                    
                    {s.length === 0 ? "" :  
                    <div className="itemUnic">
                        <h2>S</h2>
                {s.map((course) => {
           return (

                <div className="text">
                    <div className="bloc1">
                    <h6>Curso</h6>
                         <hr />
                     {course.category === "Cursos Técnicos" ? 
                         <a href={course.link} alt={course.title} target="_blank"><p>{course.title} </p></a>:
                    <a href={`/curso-individual/${course.title}`}><p>{course.title}</p></a>
                            }
                    </div>
                    <div className="bloc2">
                    <h6>Formação</h6>
                         <hr />
                    <p>{course.category}</p>
                </div>
                    </div>
           )
        })}
        </div>
                  }
                    
                    {t.length === 0 ? "" :  
                    <div className="itemUnic">
                        <h2>T</h2>
                {t.map((course) => {
           return (

                <div className="text">
                    <div className="bloc1">
                    <h6>Curso</h6>
                         <hr />
                     {course.category === "Cursos Técnicos" ? 
                         <a href={course.link} alt={course.title} target="_blank"><p>{course.title} </p></a>:
                    <a href={`/curso-individual/${course.title}`}><p>{course.title}</p></a>
                            }
                    </div>
                    <div className="bloc2">
                    <h6>Formação</h6>
                         <hr />
                    <p>{course.category}</p>
                </div>
                    </div>
           )
        })}
        </div>
                  }
                    
                    {u.length === 0 ? "" :  
                    <div className="itemUnic">
                        <h2>U</h2>
                {u.map((course) => {
           return (

                <div className="text">
                    <div className="bloc1">
                    <h6>Curso</h6>
                         <hr />
                     {course.category === "Cursos Técnicos" ? 
                         <a href={course.link} alt={course.title} target="_blank"><p>{course.title} </p></a>:
                    <a href={`/curso-individual/${course.title}`}><p>{course.title}</p></a>
                            }
                    </div>
                    <div className="bloc2">
                    <h6>Formação</h6>
                         <hr />
                    <p>{course.category}</p>
                </div>
                    </div>
           )
        })}
        </div>
                  }
                    
                    {v.length === 0 ? "" :  
                    <div className="itemUnic">
                        <h2>V</h2>
                {v.map((course) => {
           return (

                <div className="text">
                    <div className="bloc1">
                    <h6>Curso</h6>
                         <hr />
                     {course.category === "Cursos Técnicos" ? 
                         <a href={course.link} alt={course.title} target="_blank"><p>{course.title} </p></a>:
                    <a href={`/curso-individual/${course.title}`}><p>{course.title}</p></a>
                            }
                    </div>
                    <div className="bloc2">
                    <h6>Formação</h6>
                         <hr />
                    <p>{course.category}</p>
                </div>
                    </div>
           )
        })}
        </div>
                  }
                    
                    {x.length === 0 ? "" :  
                    <div className="itemUnic">
                        <h2>X</h2>
                {x.map((course) => {
           return (

                <div className="text">
                    <div className="bloc1">
                    <h6>Curso</h6>
                         <hr />
                     {course.category === "Cursos Técnicos" ? 
                         <a href={course.link} alt={course.title} target="_blank"><p>{course.title} </p></a>:
                    <a href={`/curso-individual/${course.title}`}><p>{course.title}</p></a>
                            }
                    </div>
                    <div className="bloc2">
                    <h6>Formação</h6>
                         <hr />
                    <p>{course.category}</p>
                </div>
                    </div>
           )
        })}
        </div>
                  }
                    
                    {y.length === 0 ? "" :  
                    <div className="itemUnic">
                        <h2>Y</h2>
                {y.map((course) => {
           return (

                <div className="text">
                    <div className="bloc1">
                    <h6>Curso</h6>
                         <hr />
                     {course.category === "Cursos Técnicos" ? 
                         <a href={course.link} alt={course.title} target="_blank"><p>{course.title} </p></a>:
                    <a href={`/curso-individual/${course.title}`}><p>{course.title}</p></a>
                            }
                    </div>
                    <div className="bloc2">
                    <h6>Formação</h6>
                         <hr />
                    <p>{course.category}</p>
                </div>
                    </div>
           )
        })}
        </div>
                  }
                    
                    {w.length === 0 ? "" :  
                    <div className="itemUnic">
                        <h2>W</h2>
                {w.map((course) => {
           return (

                <div className="text">
                    <div className="bloc1">
                    <h6>Curso</h6>
                         <hr />
                     {course.category === "Cursos Técnicos" ? 
                         <a href={course.link} alt={course.title} target="_blank"><p>{course.title} </p></a>:
                    <a href={`/curso-individual/${course.title}`}><p>{course.title}</p></a>
                            }
                    </div>
                    <div className="bloc2">
                    <h6>Formação</h6>
                         <hr />
                    <p>{course.category}</p>
                </div>
                    </div>
           )
        })}
        </div>
                  }
                    
                    {z.length === 0 ? "" :  
                    <div className="itemUnic">
                        <h2>Z</h2>
                {z.map((course) => {
           return (

                <div className="text">
                    <div className="bloc1">
                    <h6>Curso</h6>
                         <hr />
                     {course.category === "Cursos Técnicos" ? 
                         <a href={course.link} alt={course.title} target="_blank"><p>{course.title} </p></a>:
                    <a href={`/curso-individual/${course.title}`}><p>{course.title}</p></a>
                            }
                    </div>
                    <div className="bloc2">
                    <h6>Formação</h6>
                         <hr />
                    <p>{course.category}</p>
                </div>
                    </div>

)
})}
</div>}

                </div>
            </div>

            <div className="blockFinal">
                 <div className="block1">
                         <h1>Não encontro seu curso?</h1>
                         <h3>Não se preocupe temos muitas opções para você</h3>

                         <p>Nosso site foi reformulado para trazer uma experiência única para você, <br /> e os nossos cursos estão sendo registrados gradualmente.</p>
                 </div>
                 <div className="block2">
                 <h2>Entre em contato e solicite o curso que deseja</h2>
                 <form action="">
                      <input type="text" placeholder="Nome" value={name} onChange={(e) => {setName(e.target.value)}}/>
                      <input type="text" placeholder="Curso" value={option} onChange={(e) => {setOption(e.target.value)}}/>
                      <button onClick={HandleOpen}><IoLogoWhatsapp />Entrar em contato</button>
                 </form>
                 </div>
            </div>
        </div>
    )
}

export {CoursesPage}