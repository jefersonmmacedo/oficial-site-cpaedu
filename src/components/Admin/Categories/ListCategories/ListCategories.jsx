import Navbar2 from '../../Nav/Navbar';
import { collection, getDocs, query, where } from "firebase/firestore";
import db from '../../../../services/firebaseConnection';
import { useState, useEffect } from 'react';
import {IoTrashOutline, IoRefreshOutline, IoCreateOutline} from 'react-icons/io5';
import './listCategories.css';

function ListCategories() {

    const [categories, setCategories] = useState([]); 

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
        <div className="ListCategories">
        <Navbar2 />
<h1>Categoria</h1>
<div className="link">
<a href="/adm/categorynew">Nova categoria</a>
</div>

{categories.map((depoiment) => {
  return (
      <div className="CategoriesUnic" key={depoiment.id}>
          <div className="text">
               <h5>{depoiment.title}</h5>
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

export {ListCategories}