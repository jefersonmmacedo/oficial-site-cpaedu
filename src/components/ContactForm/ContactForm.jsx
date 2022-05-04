import "./contactForm.css"
import {IoLocationOutline, IoMailOutline, IoCallOutline, IoLogoWhatsapp, IoLogoInstagram, IoLogoFacebook } from 'react-icons/io5';
import { collection, getDocs } from "firebase/firestore";
import db from '../../services/firebaseConnection';
import { useEffect, useState } from "react";


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
                
            <div className="formulary">
            <div className="title">
                <h1>Entrar em conato</h1>
                <p>Tem uma pergunta ou apenas quer dizer oi? Adoraríamos ouvir de você.</p>
            </div>
                <form action="">
                    <div className="name">
                        <input type="text" name="" id="" placeholder="Nome"/>
                        <input type="email" name="" id="" placeholder="E-mail"/>
                    </div>
                        <input type="text" name="" id="" placeholder="Assunto"/>
                        <textarea name="" id="" cols="30" rows="10" placeholder="Mensagem"></textarea>
                </form>
            </div>
            <div className="information">
                <div className="item">
                    <h3>Endereço</h3>
                    <p><IoLocationOutline/>{informations.street}, Nº {informations.number} </p>
                    <p>{informations.district} - {informations.city} - {informations.uf}. CEP: {informations.cep}</p>
                    <p>({informations.reference})</p>
                </div>
                <div className="item">
                    <h3>Telefones</h3>
                    <p><IoCallOutline/> {informations.phone}</p>
                    <p><IoLogoWhatsapp/> {informations.whatsapp} </p>
                </div>
                <div className="item">
                    <h3>Email</h3>
                    <p><IoMailOutline/> {informations.email}</p>
                </div>
                <div className="social">
                <h3>Redes sociais</h3>
                <div className="icons">
                    <p><IoLogoFacebook/> </p>
                    <p><IoLogoInstagram/></p>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export {ContactForm}