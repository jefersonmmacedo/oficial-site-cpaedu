import "./contactForm.css"
import {IoLocationOutline, IoMailOutline, IoCallOutline, IoLogoWhatsapp, IoLogoInstagram, IoLogoFacebook } from 'react-icons/io5';
import { collection, getDocs } from "firebase/firestore";
import db from '../../services/firebaseConnection';
import { useEffect, useState } from "react";
import studentContact from "../../assets/images/studentContact.jpg";
import {IconsFormContact} from './IconsFormContact/IconsFormContact';
import { toast } from "react-toastify";


function ContactForm() {
    const [informations, setInformations] = useState([]);
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [mensagem, setMensagem] = useState("");

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

const phone = "22999942800"
const text = `Olá, me chamo ${nome}! %0A${mensagem}. %0A%0AMeu telefone: ${telefone}. %0AMeu e-mail: ${email}.`
function handleNewMessage(e) {
    e.preventDefault();
    window.open("https://wa.me/55"+ phone + "?text=" + text,
    '_blank')
    toast.info("Mensagem enviada com sucesso")
  }


    return (
        <div className="contactForm">
         
            <div className="contactBlock">
                <div className="image">
                    <img src={studentContact} alt="" />
                </div>
                
            <div className="formulary">
            <div className="title">
                <h1>Evolua Sempre!<br />Invista em sua carreira profissional</h1>
                <br />
                <p>O CPA está transformando a história dos seus alunos através da educaçãoa</p>
            </div>
                <form action="">
                        <input type="text" name="" id="" placeholder="Nome"  value={nome} onChange={(e) => setNome(e.target.value)}/>
                        <input type="email" name="" id="" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <input type="text" name="" id="" placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)}/>
                        <textarea name="" id="" cols="30" rows="10" placeholder="Mensagem" value={mensagem} onChange={(e) => setMensagem(e.target.value)}></textarea>
                        <button onClick={handleNewMessage}>Enviar</button>
                </form>
            </div>
            </div>
            <IconsFormContact />
        </div>
    )
}

export {ContactForm}