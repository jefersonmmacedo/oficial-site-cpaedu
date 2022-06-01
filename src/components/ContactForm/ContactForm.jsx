import "./contactForm.css"
import {IoLocationOutline, IoMailOutline, IoCallOutline, IoLogoWhatsapp, IoLogoInstagram, IoLogoFacebook } from 'react-icons/io5';
import { collection, getDocs } from "firebase/firestore";
import db from '../../services/firebaseConnection';
import { useEffect, useState } from "react";
import studentContact from "../../assets/images/studentContact.jpg";
import {IconsFormContact} from './IconsFormContact/IconsFormContact'


function ContactForm() {
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
        <div className="contactForm">
         
            <div className="contactBlock">
                <div className="image">
                    <img src={studentContact} alt="" />
                </div>
                
            <div className="formulary">
            <div className="title">
                <h1>Evolua Sempre!<br />Invista na sua Vida Pessoal e Profissional</h1>
                <br />
                <p>A CPAEDU mudou o ensino profissionalizante do Brasil.<br /> E vai fazer o mesmo com a sua vida</p>
            </div>
                <form action="">
                        <input type="text" name="" id="" placeholder="Nome"/>
                        <input type="email" name="" id="" placeholder="E-mail"/>
                        <input type="text" name="" id="" placeholder="Telefone"/>
                        <textarea name="" id="" cols="30" rows="10" placeholder="Mensagem"></textarea>
                        <button>Enviar</button>
                </form>
            </div>
            </div>
            <IconsFormContact />
        </div>
    )
}

export {ContactForm}