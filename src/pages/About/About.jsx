import { collection, getDocs } from "firebase/firestore";
import db from '../../services/firebaseConnection';
import { useEffect, useState } from "react";
import "./about.css"
import { Footer } from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Navbar2 from "../../components/Nav/Navbar";
import saquarema from "../../assets/images/saquarema.jpg";
import logoSimbol from "../../assets/images/simbolo.png";
import logoSimbol2 from "../../assets/images/simbolo2.png";
import {IoArrowDownCircleOutline} from 'react-icons/io5'

<ion-icon name="arrow-down-circle-outline"></ion-icon>

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
            <div className="top">
                <div className="block">
                    <img src={logoSimbol} alt="" />
                    <h1>12 Anos acreditando na Educação que transforma!</h1>
                    <IoArrowDownCircleOutline />
                </div>
            </div>
                <div className="text">
                    <div className="topText">
                        <div className="logo">
                        <img src={logoSimbol2} alt="" />
                        </div>
                        <div className="title">
                            <h1>SOMOS O CPA EDUCAÇÃO </h1>
                            <h3>Conheça nossa história</h3>
                        </div>
                        </div>
                        <div className="history">
                            <p>{informations.history}</p>
                            <br />
                            <p> <b>Missão</b> </p>
                            <p>{informations.mission}</p>
                            <br />
                            <p><b>Visão</b></p>
                            <p>{informations.mission}</p>
                            <br />
                            <p><b>Valores</b></p>
                            <p>{informations.values}</p>
                            <br />
                            <br />
                            <br />
                        </div>

                </div>
            <Footer />
        </div>
        </>
    )
}

export {About}