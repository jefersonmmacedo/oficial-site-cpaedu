import "./contactFormEAD.css"
import { collection, getDocs } from "firebase/firestore";
import db from '../../services/firebaseConnection';
import { useEffect, useState } from "react";
import studentContact from "../../assets/images/studentContact2.jpg";
import { IconsFormContactEAD } from "./IconsFormContactEAD/IconsFormContactEAD";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";


function ContactFormEAD() {
    const {curso} = useParams();
    const [informations, setInformations] = useState([]);

    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");

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
const text = `Pré-Matrícula ${new Date().getFullYear()}. %0A%0ANome: ${nome}. %0AIdade: ${idade}. %0AWhatsapp: ${telefone}. %0AE-mail: ${email}. %0ABairro: ${bairro}. %0ACidade: ${cidade}.`
function handleNewMessage(e) {
    e.preventDefault();
    window.open("https://wa.me/55"+ phone + "?text=" + text,
    '_blank')
    toast.info("Mensagem enviada com sucesso")
  }


    return (
        <div className="contactFormEAD">
         
            <div className="contactBlock">
                <div className="image">
                    <img src={studentContact} alt="" />
                </div>
                
            <div className="formulary">
            <div className="title">
                <h1>A hora é agora!<br />Garanta o seu futuro.</h1>
                <br />
                <p>Envie suas informações de cadastro, nossa equipe entrará em contato.</p>
            </div>
                <form action="">
                    <div className="name">
                    <input type="text" name="" id="" placeholder="Nome"  value={nome} onChange={(e) => setNome(e.target.value)} />
                        <input type="text" name="" id="" placeholder="Idade"  value={idade} onChange={(e) => setIdade(e.target.value)} />
                    </div>
                    <div className="name">
                    <input type="email" name="" id="" placeholder="E-mail"  value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="text" name="" id="" placeholder="Whatsapp"  value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                    </div>
                    <div className="name">
                    <input type="text" name="" id="" placeholder="Bairro"  value={bairro} onChange={(e) => setBairro(e.target.value)} />
                        <input type="text" name="" id="" placeholder="Cidade"  value={cidade} onChange={(e) => setCidade(e.target.value)} />
                    </div>
                    <input type="text" name="" id="" placeholder={curso}/>
                        <button onClick={handleNewMessage}>Enviar</button>
                </form>
            </div>
            </div>
            <IconsFormContactEAD />
        </div>
    )
}

export {ContactFormEAD}