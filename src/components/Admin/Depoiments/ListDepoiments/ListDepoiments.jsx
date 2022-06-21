import './listDepoiments.css';
import Navbar2 from "../../Nav/Navbar";
import { collection, getDocs, query, where, doc, deleteDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import db from '../../../../services/firebaseConnection';
import { useState, useEffect } from 'react';
import {IoTrashOutline, IoRefreshOutline, IoCreateOutline, IoSearchOutline} from 'react-icons/io5';

function ListDepoiments() {

    const [depoiments, setDepoiments] = useState([]);
    const [search, setSearch] = useState("")

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
  }, []);


  async function handleDeleteDepoiment(id) {

    const deletar = window.confirm("Deseja deletar o depoimento?");
    if(deletar === true) {
      await deleteDoc(doc(db, "depoiments", id));
      toast.info("Depoimento Deletado.");
      
      window.location.reload(false)
    } 


  }


  function handleUpdateDepoiment(name) {
    window.open(`/adm/depoiment/${name}`, "_self")
  }

  const searchLower = search.toLowerCase()
const FilterDepoiments = search !== "" ? depoiments?.filter((course) => (course.name.toLowerCase().includes(searchLower))) : depoiments

FilterDepoiments.sort(function (depoimentsA, depoimentsB) {
    if (depoimentsA.name == depoimentsB.name)
      return 0;
    if (depoimentsA.name < depoimentsB.name)
      return -1
    if (depoimentsA.name > depoimentsB.name)
      return 1
  });


    return (
        <div className="ListDepoiments">
                     <Navbar2 />
           <h1>Depoimentos</h1>
           <div className="link">
           <a href="/adm/depoimentnew">Novo depoimento</a>
           </div>

           <div className="Search">
        <form>
            <button>
                <IoSearchOutline />
            </button>
            <input type="text" placeholder="Digite o que deseja estudar" value={search.toLowerCase()} onChange={(e) => setSearch(e.target.value)}/>
        </form>
        </div>

           {FilterDepoiments.map((depoiment) => {
               return (
                   <div className="DepoimentUnic" key={depoiment.id}>
                       <div className="text">
                            <h5>{depoiment.name}</h5>
                            <h5>{depoiment.course}</h5>
                       </div>
                       <div className="button">
                       <button onClick={() => {handleUpdateDepoiment(depoiment.name)}}><IoCreateOutline/></button>
                       <button onClick={() => {handleDeleteDepoiment(depoiment.id)}}><IoTrashOutline/></button>
                       </div>
                   </div>
               )
           })}
          
        </div>
    )
}


export {ListDepoiments}