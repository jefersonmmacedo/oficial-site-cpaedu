import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import Navbar2 from "../../components/Nav/Navbar";
import db from '../../services/firebaseConnection';
import "./depoimentsAll.css"

function DepoimentsAll() {
    const [depoiments, setDepoiments] = useState([]);

    useEffect(() => {
        async function loadCondadatos() {
            const querySnapshot = await getDocs(collection(db, "depoiments"));  
            const list = []
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
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


    return(
        <div className="DepoimentsAll">
                        <Navbar2 />
                        <h1>Depoimentos de nossos alunos</h1>
                        <div className="deps">

                        
              {depoiments.map((depoiment) => {
           return (
            <div className="depoimentUnicAll" key={depoiment.id}>
            <div className="image">
                <img src={depoiment.image} alt={depoiment.name} />
            </div>
            <div className="text">
            <div className="depoiment">
            <h4>{depoiment.depoiment}</h4>
            </div>
            <div className="name">
                <h5>{depoiment.name}</h5>
            </div>
            <div className="course">
            <p>{depoiment.course}</p>
            </div>
            </div>
            </div>
           )
        })}
        </div>
        <Footer />
        </div>
    )
}

export { DepoimentsAll }