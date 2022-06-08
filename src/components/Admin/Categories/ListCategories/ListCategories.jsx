import Navbar2 from '../../Nav/Navbar';
import { collection, getDocs, query, where, doc, deleteDoc } from "firebase/firestore";
import { toast } from "react-toastify";
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
  }, []);

  async function handleDeleteCategory(id) {

    const deletar = window.confirm("Deseja deletar a categoria?");
    if(deletar === true) {
      await deleteDoc(doc(db, "categories", id));
      toast.info("Categoria Deletada.");
      
      window.location.reload(false)
    } 


  }
  async function handleEditCategory(title) {
     
      window.open(`/adm/category/${title}`, "_self")

  }
    
    return (
        <div className="ListCategories">
        <Navbar2 />
<h1>Categoria</h1>
<div className="link">
<a href="/adm/categorynew">Nova categoria</a>
</div>

{categories.map((category) => {
  return (
      <div className="CategoriesUnic" key={category.id}>
          <div className="text">
               <h5>{category.title}</h5>
          </div>
          <div className="button">
          <button onClick={() => {handleEditCategory(category.title)}}><IoCreateOutline/></button>
              <button onClick={() => {handleDeleteCategory(category.id)}}><IoTrashOutline/></button>
          </div>
      </div>
  )
})}

</div>
    )
}

export {ListCategories}