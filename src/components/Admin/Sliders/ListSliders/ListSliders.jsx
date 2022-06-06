import Navbar2 from '../../Nav/Navbar';
import './listSliders.css';
import { collection, getDocs, query, where, doc, deleteDoc  } from "firebase/firestore";
import db from '../../../../services/firebaseConnection';
import { useState, useEffect } from 'react';
import { toast } from "react-toastify";

function ListSliders() {

    const [carroussel, setCarroucel] = useState([]); 

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
  
  console.log(carroussel);

  async function handleDeleteSlider(id) {

    const deletar = window.confirm("Deseja deletar o slider?");
    if(deletar === true) {
      await deleteDoc(doc(db, "sliders", id));
      toast.info("Slide Deletado.");
      
      window.location.reload(false)
    } 


  }


    return (
        <div className="ListSliders">
                     <Navbar2 />
                     <h1>Sliders</h1>
<div className="link">
<a href="/adm/slidernew">Novo slider</a>
</div>

{carroussel.map((Slider) => {
  return (
      <div className="SlidersUnic" key={Slider.id}>
          <div className="text">
               <img src={Slider.image} alt={Slider.title}  height="80px"/>
               <h5>Título: {Slider.title}</h5>
               <h5>Posição: {Slider.position}</h5>
               <h5>Disponibilidade: {Slider.availability}</h5>
          </div>
          <div className="button">
              <button>Editar</button>
              <button onClick={() => {handleDeleteSlider(Slider.id)}}>Deletar</button>
          </div>
      </div>
  )
})}
          
        </div>
    )
}

export {ListSliders}