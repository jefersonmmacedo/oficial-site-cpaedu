import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { collection, addDoc } from "firebase/firestore";
import db from '../../../../services/firebaseConnection';
import './informationsForm.css';
import { useState } from 'react';

function InformationsForm() {
    const {id} = useParams();
    console.log(id);

    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [district, setDistrict] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');
    const [cep, setCep] = useState('');
    const [reference, setReference] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [facebook, setFacebook] = useState('');
    const [instagram, setInstagram] = useState('');
    const [history, setHistory] = useState('');
    const [mission, setMission] = useState('');
    const [vision, setVision] = useState('');
    const [values, setValues] = useState('');


    async function handleInformationsForm(e) {
        e.preventDefault()
        try {
            const docRef = await addDoc(collection(db, "informations"), {
                email: email,
                phone: phone,
                street: street,
                number: number,
                district: district,
                city: city,
                uf: uf,
                cep: cep,
                reference: reference,
                whatsapp: whatsapp,
                facebook: facebook,
                instagram: instagram,
                history: history,
                mission: mission,
                vision: vision,
                values: values,  
            })
            console.log("Document written with ID: ", docRef.id);
                toast.info(`Cadastro realizado com sucesso!`);
                setEmail("")
                setPhone("")
                setStreet("")
                setNumber("")
                setDistrict("")
                setCity("")
                setUf("")
                setCep("")
                setReference("")
                setWhatsapp("")
                setFacebook("")
                setInstagram("")
                setHistory("")
                setMission("")
                setVision("")
                setValues("")
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }
    
    return (
        <div className="informationsForm">
           <h3>Informações do site</h3>
                <form action="" onSubmit={handleInformationsForm}>
                    <div className="contactInformations">
                        <h4>Informações de contato</h4>
                    <input type="text" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <div className="double">
                    <input type="text" placeholder="Telefone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    <input type="text" placeholder="Whatssapp - ex.: 2199999-8888" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)}/>
                    </div>
                    <br />
                    <h5>Informações de endereço</h5>
                    <div className="triple">
                    <input type="text" placeholder="Rua" value={street} onChange={(e) => setStreet(e.target.value)}/>
                    <input type="text" placeholder="Número" value={number} onChange={(e) => setNumber(e.target.value)}/>
                    <input type="text" placeholder="Bairro" value={district} onChange={(e) => setDistrict(e.target.value)}/>
                    </div>
                    <div className="triple">
                    <input type="text" placeholder="Cidade" value={city} onChange={(e) => setCity(e.target.value)}/>
                    <input type="text" placeholder="UF" value={uf} onChange={(e) => setUf(e.target.value)}/>
                    <input type="text" placeholder="CEP" value={cep} onChange={(e) => setCep(e.target.value)}/>
                    </div>
                    <input type="text" placeholder="Referência" value={reference} onChange={(e) => setReference(e.target.value)}/>
                    <br />
                    <h5>Redes sociais</h5>
                    <div className="double">
                    <input type="text" placeholder="Instagram" value={instagram} onChange={(e) => setInstagram(e.target.value)}/>
                    <input type="text" placeholder="Facebook" value={facebook} onChange={(e) => setFacebook(e.target.value)}/>
                    </div>
                    </div>
                    <div className="historyInformations">
                    <br />
                    <h4>Informações sobre a história</h4>
                    <br />
                    <h5>história</h5>
                    <textarea name="" id="" cols="30" rows="10" value={history} onChange={(e) => setHistory(e.target.value)} placeholder="Nossa história" ></textarea>
                    <br />
                    <h5>Missão</h5>
                    <textarea name="" id="" cols="30" rows="10" value={mission} onChange={(e) => setMission(e.target.value)} placeholder="Missão" ></textarea>
                    <br />
                    <h5>Visão</h5>
                    <textarea name="" id="" cols="30" rows="10" value={vision} onChange={(e) => setVision(e.target.value)} placeholder="Visão" ></textarea>
                    <br />
                    <h5>Valores</h5>
                    <textarea name="" id="" cols="30" rows="10" value={values} onChange={(e) => setValues(e.target.value)} placeholder="Valores" ></textarea>
                    </div>
                    <button type="submit">Enviar informações</button>
                </form>
        </div>
    )
}

export {InformationsForm}