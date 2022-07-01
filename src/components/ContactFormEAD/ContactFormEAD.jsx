import "./contactFormEAD.css"
import { collection, getDocs } from "firebase/firestore";
import db from '../../services/firebaseConnection';
import { useEffect, useState } from "react";
import studentContact from "../../assets/images/studentContact2.jpg";
import { IconsFormContactEAD } from "./IconsFormContactEAD/IconsFormContactEAD";
import { useParams } from "react-router-dom";


function ContactFormEAD() {
    const {curso} = useParams();
    const [informations, setInformations] = useState([]);

    useEffect(() => {
    async function loadCondadatos() {
        const querySnapshot = await getDocs(collection(db, "informations"));  
        const list = []
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
          const data = {
            id: doc.id,
            email: doc.data().email,
            phone: doc.data().phone,
            street: doc.data().street,
            number: doc.data().number,
            district: doc.data().district,
            city: doc.data().city,
            uf: doc.data().uf,
            cep: doc.data().cep,
            reference: doc.data().reference,
            whatsapp: doc.data().whatsapp,
            facebook: doc.data().facebook,
            instagram: doc.data().instagram,
            }
            setInformations(data)
            console.log(data)
            list.push(data)
          });

    }

    loadCondadatos()
}, [])

console.log(informations)
console.log(informations[0])

    return (
        <div className="contactFormEAD">
         
            <div className="contactBlock">
                <div className="image">
                    <img src={studentContact} alt="" />
                </div>
                
            <div className="formulary">
            <div className="title">
                <h1>A hora é agora!<br />Garanta o seu futuro.a</h1>
                <br />
                <p>Envie suas informações de cadastro, nossa equipe entrará em contato.</p>
            </div>
                <form action="">
                    <div className="name">
                    <input type="text" name="" id="" placeholder="Nome"/>
                        <input type="text" name="" id="" placeholder="Idade"/>
                    </div>
                    <div className="name">
                    <input type="email" name="" id="" placeholder="E-mail"/>
                        <input type="text" name="" id="" placeholder="Whatsapp"/>
                    </div>
                    <div className="name">
                    <input type="text" name="" id="" placeholder="Bairro"/>
                        <input type="text" name="" id="" placeholder="cidade"/>
                    </div>
                    <input type="text" name="" id="" placeholder={curso}/>
                        <a>Enviar</a>
                </form>
            </div>
            </div>
            <IconsFormContactEAD />
        </div>
    )
}

export {ContactFormEAD}