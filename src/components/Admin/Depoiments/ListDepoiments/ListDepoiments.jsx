import { collection, getDocs } from "firebase/firestore";
import db from '../../../../services/firebaseConnection';
import { useEffect, useState } from "react";
import './listDepoiments.css';
import Navbar2 from "../../Nav/Navbar";

function ListDepoiments() {

//     const [depoiments, setDepoiments] = useState([]);

//     useEffect(() => {
//     async function loadCondadatos() {
//         const querySnapshot = await getDocs(collection(db, "depoiments"));  
//         const list = []
//         querySnapshot.forEach((doc) => {
//             console.log(`${doc.id} => ${doc.data()}`);
//           const data = {
//             id: doc.id,
//             name: doc.data().name,
//             image: doc.data().image,
//             course: doc.data().course,
//             depoiment: doc.data().depoiment,
//             }
//             setDepoiments(data)
//             console.log(data)
//             list.push(data)
//           });

//     }

//     loadCondadatos()
// }, [])

// console.log(depoiments);
// console.log(depoiments[0]);



const depoiments = [
    {"nome" : "Tatiana Sodré",
    "curso": "Ensino Médio EJA"},
    {"nome" : "Bruno Souza",
    "curso": "Graduação"},
    {"nome" : "Carla Brito",
    "curso": "2 Graduação"},
]
    return (
        <div className="ListDepoiments">
                     <Navbar2 />
           <h1>Depoimentos</h1>
           <div className="link">
           <a href="/adm/depoimentnew">Novo depoimento</a>
           </div>

           {depoiments.map((depoiment) => {
               return (
                   <div className="DepoimentUnic" key={depoiment.id}>
                       <div className="text">
                            <h5>{depoiment.nome}</h5>
                            <h5>-</h5>
                            <h5>{depoiment.curso}</h5>
                       </div>
                       <div className="button">
                           <button>Editar</button>
                           <button>Deletar</button>
                       </div>
                   </div>
               )
           })}
          
        </div>
    )
}

export {ListDepoiments}