import { collection, getDocs } from "firebase/firestore";
import db from '../../services/firebaseConnection';
import { useEffect, useState } from "react";
import "./about.css"
import { Footer } from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Navbar2 from "../../components/Nav/Navbar";

function About() {
    const [informations, setInformations] = useState([]);

    useEffect(() => {
    async function loadCondadatos() {
        const querySnapshot = await getDocs(collection(db, "informations"));  
        const list = []
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
          const data = {
            id: doc.id,
            history: doc.data().history,
            mission: doc.data().mission,
            vision: doc.data().vision,
            values: doc.data().values,
            }
            setInformations(data)
            console.log(data)
            list.push(data)
          });

    }

    loadCondadatos()
}, [])

console.log(informations);
console.log(informations[0]);


    return (
        <>
            <Navbar2 />
        <div className="about">
            <div className="section">
                <h1>Nossa história</h1>
                <div className="text">
                    <p>{informations.history}</p>              
                </div>
                </div>
                <div className="items">
                <div className="section">
                <h3>Missão</h3>
                <div className="text2">
                    <p>{informations.mission}</p>
                     </div>
                </div>
                <div className="section">
                <h3>Visão</h3>
                <div className="text2">
                    <p>{informations.vision}</p></div>
                </div>
                <div className="section">
                <h3>Valores</h3>
                <div className="text2">
                    <p>{informations.values}</p>
                    </div>
                </div>
                </div>
                <Footer />
        </div>
        </>
    )
}

export {About}