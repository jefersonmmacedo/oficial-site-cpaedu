import "./sliderForm.css"
import profile from '../../../../assets/images/imagecurso.jpg'
import {FiUpload} from 'react-icons/fi'
import { useState } from "react";
import { toast } from "react-toastify";
import { collection, addDoc } from "firebase/firestore";
import db from '../../../../services/firebaseConnection';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { v4 as uuidv4} from 'uuid'
import { storage } from "../../../../services/firebaseImageConnection";

function SliderForm() {
    const [avatarUrl, setAvatarUrl] = useState(null);
    const [imageAvatar, setImageAvatar] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    const [availability, setAvailability] = useState('');
    const [position, setPosition] = useState('');

    async function handleFile(e) {
        console.log(e.target.files[0])
        
        if(e.target.files[0]){
            const image = e.target.files[0];
            
            if(image.type === 'image/jpeg' ||
            image.type === 'image/jpg' ||
            image.type === 'image/png'
            ) {
                setImageAvatar(image);
               setAvatarUrl(URL.createObjectURL(e.target.files[0]));
               console.log(avatarUrl);
               toast.success('Imagem carregada com sucesso. Publique sua postagem!');
            } else {
                console.log('Tipo dearquivo não aceito. Envie uma imagem dos tipos: .jpg, .jpeg, .png');
                setImageAvatar("");
                return null;
            }
        }
    }
    
    function handleAvailability(e) {
        setAvailability(e.target.value);
    }

    function handlePosition(e) {
        setPosition(e.target.value);
    }

    async function handleNewSlider(e) {
        e.preventDefault();
        toast.info(`Cadastrando. Aguarde...`);

        const uuid = uuidv4();
        let newAvatarUrlFirebase = ref(storage, `images/sliders/${uuid}`);
        
        let uploadAvatar = await uploadBytes(newAvatarUrlFirebase, imageAvatar);
        let photoUrlAvatar = await getDownloadURL(uploadAvatar.ref);
        
        console.log(uploadAvatar.ref.name, photoUrlAvatar);

        newCategoryPost(photoUrlAvatar)
    }

    async function newCategoryPost (photoUrlAvatar) {
        try {
            const docRef = await addDoc(collection(db, "sliders"), {
                title: title,
                image: photoUrlAvatar,
                description: description,
                link: link,
                availability: availability,
                position: position
            })
            console.log("Document written with ID: ", docRef.id);
                toast.info(`Cadastro realizado com sucesso!`);
                setAvatarUrl(null)
                setImageAvatar('')
                setTitle('')
                setDescription('')
                setLink('')
                setPosition('')
                setAvailability('')

                window.open("/adm/slider", "_self")

          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

    return (
        <div className="SliderForm">
            <h3>Novo Slider (Carroussel)</h3>
            <form onSubmit={handleNewSlider}>
                <label className="label-avatar">
                    <span><FiUpload color="#f65" size={25} /></span>
                    <input type="file" accept="image/*" onChange={handleFile}/><br />
                    <img src={avatarUrl === null ? profile : avatarUrl} alt="Avatar" height={160} width={400}/>
                </label>
                <input type="text" placeholder="Titulo" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <input type="text" placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)}/>
                <input type="text" placeholder="link" value={link} onChange={(e) => setLink(e.target.value)}/>

                <div className="double">
                    <select name="" id="" value={availability} onChange={handleAvailability}>
                    <option value="">Disponibilidade</option>
                    <option value="Disponível">Ativo</option>
                        <option value="Aguardar">Inativo</option>
                    </select>
                    <select name="" id="" value={position} onChange={handlePosition}>
                    <option value="">Posição</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
               </div>

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}

export { SliderForm }


