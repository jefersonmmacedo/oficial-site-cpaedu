import "./editSliderForm.css";
import { collection, query, where, getDocs, updateDoc, doc  } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import db from '../../../../services/firebaseConnection';
import { storage } from "../../../../services/firebaseImageConnection";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { v4 as uuidv4} from 'uuid';
import {FiUpload} from 'react-icons/fi'

function SliderForm() {
    const {slider} = useParams();
    const [avatarUrl, setAvatarUrl] = useState(null);
    const [imageAvatar, setImageAvatar] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    const [availability, setAvailability] = useState('');
    const [position, setPosition] = useState('');
    const [imageSlider, setImageSlider] = useState('');
    const [id, setId] = useState('');


    useEffect(() => {
        async function setDocCourse() {
            const q = query(collection(db, "sliders"), where("title", "==", slider));
            console.log("Olá, Mundo")
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
              setId(doc.id);
              setImageSlider(doc.data().image);
              console.log(doc.data().image);
              setTitle(doc.data().title);
              console.log(doc.data().title);
              setDescription(doc.data().description);
              console.log(doc.data().description);
              setPosition(doc.data().position);
              console.log(doc.data().position);
              setAvailability(doc.data().availability);
              console.log(doc.data().availability);
              setLink(doc.data().link);
              console.log(doc.data().link);
            });
        }
        setDocCourse()
    }, [slider])


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


    async function handleUpdateSliders(e) {
        e.preventDefault();
        toast.info("Atualizando...");
        if(avatarUrl == null && imageAvatar === "") {
            const data = ""
            handleUpdate(data)
        } else {
            const uuid = uuidv4();
        let newAvatarUrlFirebase = ref(storage, `images/categories/${uuid}`);
        
        let uploadAvatar = await uploadBytes(newAvatarUrlFirebase, imageAvatar);
        let photoUrlAvatar = await getDownloadURL(uploadAvatar.ref);
        
        console.log(uploadAvatar.ref.name, photoUrlAvatar);

        handleUpdate(photoUrlAvatar)
        }

        
    }

    async function handleUpdate(photoUrlAvatar) {
        const updateslider = doc(db, "sliders", id);

        await updateDoc(updateslider, {
            title: title,
            image: photoUrlAvatar === "" ? imageSlider : photoUrlAvatar,
            description: description,
            link: link,
            availability: availability,
            position: position,
        });

        toast.info("Slider atualizado.");
        window.open("/adm/slider", "_self")
    }


    function handleAvailability(e) {
        setAvailability(e.target.value);
    }

    function handlePosition(e) {
        setPosition(e.target.value);
    }



    return (
        <div className="SliderForm">
            <h3>Novo Slider (Carroussel)</h3>
            <form onSubmit={handleUpdateSliders}>
                <label className="label-avatar">
                    <span><FiUpload color="#f65" size={25} /></span>
                    <input type="file" accept="image/*" onChange={handleFile}/><br />
                    <img src={avatarUrl === null ? imageSlider : avatarUrl} alt="Avatar" height={160} width={400}/>
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

                <button type="submit">Atualizar</button>
            </form>
        </div>
    )
}

export { SliderForm }


