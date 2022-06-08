import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { collection, addDoc } from "firebase/firestore";
import db from '../../../../services/firebaseConnection';
import './informationsForm.css';
import { useState } from 'react';
import {FiUpload} from 'react-icons/fi';
import profile from '../../../../assets/images/imagecurso.jpg';

function InformationsForm() {
    const {id} = useParams();

    const [image1, setImage1] = useState(null);
    const [image1Avatar, setImage1Avatar] = useState('');
    const [image2, setImage2] = useState(null);
    const [image2Avatar, setImage2Avatar] = useState('');

    const [imageMotiv1, setImageMotiv1] = useState(null);
    const [imageMotiv1Avatar, setImageMotiv1Avatar] = useState('');
    const [imageMotiv2, setImageMotiv2] = useState(null);
    const [imageMotiv2Avatar, setImageMotiv2Avatar] = useState('');
    const [imageMotiv3, setImageMotiv3] = useState(null);
    const [imageMotiv3Avatar, setImageMotiv3Avatar] = useState('');
    const [imageMotiv4, setImageMotiv4] = useState(null);
    const [imageMotiv4Avatar, setImageMotiv4Avatar] = useState('');
    const [imageAboutPrincipal, setImageAboutPrincipal] = useState(null);
    const [imageAboutPrincipalAvatar, setImageAboutPrincipalAvatar] = useState('');

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
    const [coursesWiew, setCoursesWiew] = useState('');
    const [about, setAbout] = useState('');
    const [aboutText, setAboutText] = useState('');
    const [depoimentsTitle, setDepoimentsTitle] = useState('');
    const [fourMotiv, setFourMotiv] = useState('');
    const [motiv1, setMotiv1] = useState('');
    const [motiv2, setMotiv2] = useState('');
    const [motiv3, setMotiv3] = useState('');
    const [motiv4, setMotiv4] = useState('');
    const [boxAbout, setBoxAbout] = useState('');
    const [titleAboutPage, setTitleAboutPage] = useState('');
    const [subTitleAboutPage, setSubTitleAboutPage] = useState('');


    async function handleFileImage1(e) {
        console.log(e.target.files[0])
        
        if(e.target.files[0]){
            const image = e.target.files[0];
            
            if(image.type === 'image/jpeg' ||
            image.type === 'image/jpg' ||
            image.type === 'image/png'
            ) {
                setImage1(image);
                setImage1Avatar(URL.createObjectURL(e.target.files[0]));
               console.log(setImage1Avatar);
               toast.success('Imagem carregada com sucesso. Publique sua postagem!');
            } else {
                console.log('Tipo dearquivo não aceito. Envie uma imagem dos tipos: .jpg, .jpeg, .png');
                setImage1("");
                return null;
            }
        }
    }
    async function handleFileImage2(e) {
        console.log(e.target.files[0])
        
        if(e.target.files[0]){
            const image = e.target.files[0];
            
            if(image.type === 'image/jpeg' ||
            image.type === 'image/jpg' ||
            image.type === 'image/png'
            ) {
                setImage2(image);
                setImage2Avatar(URL.createObjectURL(e.target.files[0]));
               console.log(setImage2Avatar);
               toast.success('Imagem carregada com sucesso. Publique sua postagem!');
            } else {
                console.log('Tipo dearquivo não aceito. Envie uma imagem dos tipos: .jpg, .jpeg, .png');
                setImage2("");
                return null;
            }
        }
    }
    async function handleFileImageMotiv1(e) {
        console.log(e.target.files[0])
        
        if(e.target.files[0]){
            const image = e.target.files[0];
            
            if(image.type === 'image/jpeg' ||
            image.type === 'image/jpg' ||
            image.type === 'image/png'
            ) {
                setImageMotiv1(image);
                setImageMotiv1Avatar(URL.createObjectURL(e.target.files[0]));
               console.log(setImageMotiv1Avatar);
               toast.success('Imagem carregada com sucesso. Publique sua postagem!');
            } else {
                console.log('Tipo dearquivo não aceito. Envie uma imagem dos tipos: .jpg, .jpeg, .png');
                setImageMotiv1("");
                return null;
            }
        }
    }
    async function handleFileImageMotiv2(e) {
        console.log(e.target.files[0])
        
        if(e.target.files[0]){
            const image = e.target.files[0];
            
            if(image.type === 'image/jpeg' ||
            image.type === 'image/jpg' ||
            image.type === 'image/png'
            ) {
                setImageMotiv2(image);
                setImageMotiv2Avatar(URL.createObjectURL(e.target.files[0]));
               console.log(setImageMotiv2Avatar);
               toast.success('Imagem carregada com sucesso. Publique sua postagem!');
            } else {
                console.log('Tipo dearquivo não aceito. Envie uma imagem dos tipos: .jpg, .jpeg, .png');
                setImageMotiv2("");
                return null;
            }
        }
    }
    async function handleFileImageMotiv3(e) {
        console.log(e.target.files[0])
        
        if(e.target.files[0]){
            const image = e.target.files[0];
            
            if(image.type === 'image/jpeg' ||
            image.type === 'image/jpg' ||
            image.type === 'image/png'
            ) {
                setImageMotiv3(image);
                setImageMotiv3Avatar(URL.createObjectURL(e.target.files[0]));
               console.log(setImageMotiv3Avatar);
               toast.success('Imagem carregada com sucesso. Publique sua postagem!');
            } else {
                console.log('Tipo dearquivo não aceito. Envie uma imagem dos tipos: .jpg, .jpeg, .png');
                setImageMotiv3("");
                return null;
            }
        }
    }
    async function handleFileImageMotiv4(e) {
        console.log(e.target.files[0])
        
        if(e.target.files[0]){
            const image = e.target.files[0];
            
            if(image.type === 'image/jpeg' ||
            image.type === 'image/jpg' ||
            image.type === 'image/png'
            ) {
                setImageMotiv4(image);
                setImageMotiv4Avatar(URL.createObjectURL(e.target.files[0]));
               console.log(setImageMotiv4Avatar);
               toast.success('Imagem carregada com sucesso. Publique sua postagem!');
            } else {
                console.log('Tipo dearquivo não aceito. Envie uma imagem dos tipos: .jpg, .jpeg, .png');
                setImageMotiv4("");
                return null;
            }
        }
    }
    async function handleFileImageAboutPrincipal(e) {
        console.log(e.target.files[0])
        
        if(e.target.files[0]){
            const image = e.target.files[0];
            
            if(image.type === 'image/jpeg' ||
            image.type === 'image/jpg' ||
            image.type === 'image/png'
            ) {
                setImageAboutPrincipal(image);
                setImageAboutPrincipalAvatar(URL.createObjectURL(e.target.files[0]));
               console.log(setImageAboutPrincipalAvatar);
               toast.success('Imagem carregada com sucesso. Publique sua postagem!');
            } else {
                console.log('Tipo dearquivo não aceito. Envie uma imagem dos tipos: .jpg, .jpeg, .png');
                setImageAboutPrincipal("");
                return null;
            }
        }
    }


    async function handleInformationsForm(e) {
        e.preventDefault()
        try {
            const docRef = await addDoc(collection(db, "siteInformations"), {
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
               coursesWiew:coursesWiew,
               about:about,
               aboutText:aboutText,
               depoimentsTitle:depoimentsTitle,
               fourMotiv:fourMotiv,
               motiv1:motiv1,
               motiv2:motiv2,
               motiv3:motiv3,
               motiv4:motiv4,
               boxAbout:boxAbout,
               titleAboutPage,titleAboutPage,
               subTitleAboutPage:subTitleAboutPage,
               image1:image1,
               image2:image2,
               imageMotiv1:imageMotiv1,
               imageMotiv2:imageMotiv2,
               imageMotiv3:imageMotiv3,
               imageMotiv4:imageMotiv4,
               imageAboutPrincipal:imageAboutPrincipal,
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
                        <h4>Página Inicial</h4>
                        <br />
                        <br />
                        <h5>Cursos mais vistos título</h5>
                    <input type="text" placeholder="Cursos mais vistos" value={coursesWiew} onChange={(e) => setCoursesWiew(e.target.value)}/>
                    <br />
                    <br />
                    <h5>Sobre a CPA</h5>
                    <input type="text" placeholder="titulo" value={about} onChange={(e) => setAbout(e.target.value)}/>
                    <textarea name="" id="" cols="30" rows="5" value={aboutText} onChange={(e) => setAboutText(e.target.value)} placeholder="Breve texto" ></textarea>
                    <br />
                    <div className="images">

                        <label className="label-avatar-image1">
                        <span><FiUpload color="#f65" size={25} /></span>
                        <input type="file" accept="image/*" onChange={handleFileImage1}/><br />
                        <img src={image1 === null ? profile : image1} alt="Avatar" height={160} width={160}/>
                        </label>

                        <label className="label-avatar-image1">
                            <span><FiUpload color="#f65" size={25} /></span>
                            <input type="file" accept="image/*" onChange={handleFileImage2}/><br />
                            <img src={image2 === null ? profile : image2} alt="Avatar" height={160} width={160}/>
                        </label>

                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <h5>Depoimentos título</h5>
                    <input type="text" placeholder="Titulo depoimento" value={depoimentsTitle} onChange={(e) => setDepoimentsTitle(e.target.value)}/>
    
                    <br />
                    <br />
                    <h5>4 Motivos</h5>
                    <input type="text" placeholder="Título" value={fourMotiv} onChange={(e) => setFourMotiv(e.target.value)}/>
                    <br />
                    <h5>Quadro 1</h5>
                    <textarea name="" id="" cols="30" rows="5" value={motiv1} onChange={(e) => setMotiv1(e.target.value)} placeholder="Texto Quadro 1" ></textarea>
                    <label className="label-avatar-image1">
                            <span><FiUpload color="#f65" size={25} /></span>
                            <input type="file" accept="image/*" onChange={handleFileImageMotiv1}/><br />
                            <img src={imageMotiv1 === null ? profile : imageMotiv1} alt="Avatar" height={160} width={160}/>
                     </label>
                    <br />
                    <h5>Quadro 2</h5>
                    <textarea name="" id="" cols="30" rows="5" value={motiv2} onChange={(e) => setMotiv2(e.target.value)} placeholder="Texto Quadro 2" ></textarea>
                    <label className="label-avatar-image1">
                            <span><FiUpload color="#f65" size={25} /></span>
                            <input type="file" accept="image/*" onChange={handleFileImageMotiv2}/><br />
                            <img src={imageMotiv2 === null ? profile : imageMotiv2} alt="Avatar" height={160} width={160}/>
                     </label>
                    <br />
                    <h5>Quadro 3</h5>
                    <textarea name="" id="" cols="30" rows="5" value={motiv3} onChange={(e) => setMotiv3(e.target.value)} placeholder="Texto Quadro 3" ></textarea>
                    <label className="label-avatar-image1">
                            <span><FiUpload color="#f65" size={25} /></span>
                            <input type="file" accept="image/*" onChange={handleFileImageMotiv3}/><br />
                            <img src={imageMotiv3 === null ? profile : imageMotiv3} alt="Avatar" height={160} width={160}/>
                     </label>
                    <br />
                    <h5>Quadro 4</h5>
                    <textarea name="" id="" cols="30" rows="5" value={motiv4} onChange={(e) => setMotiv4(e.target.value)} placeholder="Texto Quadro 4" ></textarea>
                    <label className="label-avatar-image1">
                            <span><FiUpload color="#f65" size={25} /></span>
                            <input type="file" accept="image/*" onChange={handleFileImageMotiv4}/><br />
                            <img src={imageMotiv4 === null ? profile : imageMotiv4} alt="Avatar" height={160} width={160}/>
                     </label>
                    </div>
                    <div className="historyInformations">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <h4>Informações sobre a história</h4>
                    <br />
                    <label className="label-avatar-image1">
                            <span><FiUpload color="#f65" size={25} /></span>
                            <input type="file" accept="image/*" onChange={handleFileImageAboutPrincipal}/><br />
                            <img src={imageAboutPrincipal === null ? profile : imageAboutPrincipal} alt="Avatar" height={160} width={400}/>
                     </label>
                    <input type="text" placeholder="Quadro principal" value={boxAbout} onChange={(e) => setBoxAbout(e.target.value)}/>
                    <br />
                    <input type="text" placeholder="Titulo" value={titleAboutPage} onChange={(e) => setTitleAboutPage(e.target.value)}/>
                    <br />
                    <input type="text" placeholder="Subtitulo" value={subTitleAboutPage} onChange={(e) => setSubTitleAboutPage(e.target.value)}/>
                    <br />
                    <h5>história</h5>
                    <textarea name="" id="" cols="30" rows="5" value={history} onChange={(e) => setHistory(e.target.value)} placeholder="Nossa história" ></textarea>
                    <br />
                    <h5>Missão</h5>
                    <textarea name="" id="" cols="30" rows="5" value={mission} onChange={(e) => setMission(e.target.value)} placeholder="Missão" ></textarea>
                    <br />
                    <h5>Visão</h5>
                    <textarea name="" id="" cols="30" rows="5" value={vision} onChange={(e) => setVision(e.target.value)} placeholder="Visão" ></textarea>
                    <br />
                    <h5>Valores</h5>
                    <textarea name="" id="" cols="30" rows="5" value={values} onChange={(e) => setValues(e.target.value)} placeholder="Valores" ></textarea>
                    </div>
                    <div className="contactInformations">
                        <br />
                        <br />
                        <br />
                        <br />
                        <h4>Informações de contato</h4>
                        <h5>Informações da página</h5>
                        <div className="double">
                    <input type="text" placeholder="Titulo" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    <input type="text" placeholder="Subtitulo" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)}/>
                    </div>
                        <div className="double">
                    <input type="text" placeholder="Siga a CPA" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    <input type="text" placeholder="Eai, vamos conversar?" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)}/>
                    </div>
                        <br />
                        <h5>Informações de Contato</h5>
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
                    <button type="submit">Enviar informações</button>
                </form>
        </div>
    )
}

export {InformationsForm}