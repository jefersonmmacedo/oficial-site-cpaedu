import "./categories.css"
import { collection, getDocs } from "firebase/firestore";
import db from '../../services/firebaseConnection';
import { useEffect, useState } from "react";
import {IoArrowForward} from 'react-icons/io5'

function Categories() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
    async function loadCondadatos() {
        const querySnapshot = await getDocs(collection(db, "categories"));  
        const list = []
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
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
        <div className="categories">
            <div className="title">
       <h1>OUSE IR ALÉM</h1> 
<h4>Conheça nossos cursos e formações e começa a estudar hoje mesmo</h4>
                </div>
                <div className="itens">
                   {categories.map((categorie) => {
                    return (
                        <div className="categorie">
                        <div className="text">
                            <div className="image">
                            <img src={categorie.image} alt={categorie.image} />
                                </div>
                        <h3>{categorie.title}</h3>
                        <p>{categorie.description}</p>
                            </div>
                          <a href={`/cursos`} >Ver cursos <IoArrowForward/></a>
                        </div>
                    )
                   })}
                   
                    <div className="categorie">
                        <div className="text">
                            <div className="image">
                            <img src="https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNob3BwaW5nJTIwb25saW5lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Curso profissionalizante" />
                                </div>
                        <h3>Acesse Nossa Loja Virtual</h3>
                        <p>Torne seu currículo mais atraente para o mercado de trabalho, invista em sua qualificação profissional.</p>
                            </div>
                          <a href="https://ead.cpaedu.com.br/loja_virtual/index.php" target="_blank">Ir para loja virtual <IoArrowForward/></a>
                        </div>
                    </div>
            </div>
    )
}

export {Categories}