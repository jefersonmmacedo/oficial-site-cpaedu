import './listDepoiments.css';
import Navbar2 from "../../Nav/Navbar";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from '../../../../services/firebaseConnection';
import { useState, useEffect } from 'react';
import {IoTrashOutline, IoRefreshOutline, IoCreateOutline} from 'react-icons/io5';

function ListDepoiments() {

    const [depoiments, setDepoiments] = useState([]); 

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
            setDepoiments(list)
      }
  
      loadCondadatos()
  }, [])




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
                            <h5>{depoiment.name}</h5>
                            <h5>-</h5>
                            <h5>{depoiment.course}</h5>
                       </div>
                       <div className="button">
                       <button><IoCreateOutline/></button>
              <button><IoTrashOutline/></button>
                       </div>
                   </div>
               )
           })}
          
        </div>
    )
}


export {ListDepoiments}