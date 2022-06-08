import './editDepoimentsForm.css';
import { collection, query, where, getDocs, updateDoc, doc  } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import db from '../../../../services/firebaseConnection';
import { storage } from "../../../../services/firebaseImageConnection";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { v4 as uuidv4} from 'uuid';
import {FiUpload} from 'react-icons/fi';


function DepoimentsForm() {
    const {names} = useParams();
    const [avatarUrl, setAvatarUrl] = useState(null);
    const [imageAvatar, setImageAvatar] = useState('');
    const [name, setName] = useState('');
    const [course, setCourse] = useState('');
    const [depoiment, setDepoiment] = useState('');
    const [imageDepoiment, setImageDepoiment] = useState('');
    const [id, setId] = useState('');

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

    useEffect(() => {
        async function setDocCourse() {
            const q = query(collection(db, "depoiments"), where("name", "==", names));
            console.log("Olá, Mundo")
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
              setId(doc.id);
              setImageDepoiment(doc.data().image);
              setDepoiment(doc.data().depoiment);
              setName(doc.data().name);
              setCourse(doc.data().course);
            });
        }
        setDocCourse()
    }, [names]);

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
        const updateslider = doc(db, "depoiments", id);

        await updateDoc(updateslider, {
            name: name,
            image: photoUrlAvatar === "" ? imageDepoiment : photoUrlAvatar,
            depoiment: depoiment,
            course: course,
        });

        toast.info("Depoimento atualizado.");
        window.open("/adm/depoiment", "_self")
    }


    
    return (
        <div className="depoimentsForm">
           <h1>Cadastrar depoimento</h1>
                <form action="" onSubmit={handleUpdateSliders}>
                <label className="label-avatar">
                    <span><FiUpload color="#f65" size={25} /></span>
                    <input type="file" accept="image/*" onChange={handleFile}/><br />
                    <img src={avatarUrl === null ? imageDepoiment : avatarUrl} alt="Avatar" height={160} width={160}/>
                </label>

                    <input type="text" placeholder="Nome do aluno" value={name} onChange={(e) => setName(e.target.value)}/>
                    <input type="text" placeholder="Curso" value={course} onChange={(e) => setCourse(e.target.value)}/>
                   <textarea name="" id="" cols="30" rows="10" placeholder="Depoimento" value={depoiment} onChange={(e) => setDepoiment(e.target.value)}></textarea>
                    <button type="submit">Atualizar</button>
                </form>
        </div>
    )
}

export {DepoimentsForm}