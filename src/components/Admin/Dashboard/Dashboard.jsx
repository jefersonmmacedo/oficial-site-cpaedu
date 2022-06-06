import Navbar2 from "../Nav/Navbar";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from '../../../services/firebaseConnection';
import { useState, useEffect } from 'react';
import "./dashboard.css"

function Dashboard() {
    const [depoiments2, setDepoiments2] = useState([]); 
    const [carroussel, setCarroucel] = useState([]);
    const [courses, setCourses] = useState([]);  
    const [categories, setCategories] = useState([]); 

    useEffect(() => {
      async function loadCondadatos() {
          const querySnapshot = await getDocs(collection(db, "depoiments"));  
          const list = []
          querySnapshot.forEach((doc) => {
             // console.log(`${doc.id} => ${doc.data()}`);
            const data = {
              id: doc.id,
              name: doc.data().name,
              image: doc.data().image,
              course: doc.data().course,
              depoiment: doc.data().depoiment,
              }
              
            console.log(data)
              list.push(data)
            });
            setDepoiments2(list)
      }
  
      loadCondadatos()
  }, [])

  useEffect(() => {
    async function loadCondadatos() {
        const querySnapshot = await getDocs(collection(db, "sliders"));  
        const list = []
        querySnapshot.forEach((doc) => {
           // console.log(`${doc.id} => ${doc.data()}`);
          const data = {
            id: doc.id,
            title: doc.data().title,
            availability: doc.data().availability,
            image: doc.data().image,
            link: doc.data().link,
            position: doc.data().position,
            }
            
          console.log(data)
            list.push(data)
          });
          setCarroucel(list)
    }

    loadCondadatos()
}, [])

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
          image: doc.data().image,
          description: doc.data().description,
          }
          
        console.log(data)
          list.push(data)
        });
        setCategories(list)
  }

  loadCondadatos()
}, [])



    return (
        <div className="dashboard">
            <Navbar2 />
            <h1>Seja bem vindo. O que deseja fazer hoje?</h1>
            <div className="blocks">
                <div className="blockUnic">
                    <h3>Categorias</h3>
                    <p>{categories.length} Categorias Criadas</p>
                    <a href="#">Nova Categoria</a>
                </div>
                
                <div className="blockUnic">
                    <h3>Cursos</h3>
                    <p>{courses.length} Cursos Criados</p>
                    <a href="#">Novo curso</a>
                </div>
                <div className="blockUnic">
                    <h3>Depoimentos</h3>
                    <p>{depoiments2.length} Depoimentos Criados</p>
                    <a href="#">Novo depoimento</a>
                </div>
                <div className="blockUnic">
                    <h3>Sliders</h3>
                    <p>{carroussel.length} Sliders Criados</p>
                    <a href="#">Novo slider</a>
                </div>
                <div className="blockUnic">
                    <h3>Informações</h3>
                    <p>Deseja editar as informações do site?</p>
                    <a href="#">Editar Informações</a>
                </div>
            </div>
        </div>
    )
}

export { Dashboard }