import './depoimentsForm.css';
import { useState } from 'react';
import { toast } from 'react-toastify';
import {FiUpload} from 'react-icons/fi';
import profile from '../../../../assets/images/imagecurso.jpg';
import { collection, addDoc } from "firebase/firestore";
import db from '../../../../services/firebaseConnection';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { v4 as uuidv4} from 'uuid'
import { storage } from "../../../../services/firebaseImageConnection";

function DepoimentsForm() {
    const [avatarUrl, setAvatarUrl] = useState(null);
    const [imageAvatar, setImageAvatar] = useState('');
    const [name, setName] = useState('');
    const [course, setCourse] = useState('');
    const [depoiment, setDepoiment] = useState('');
    const avatarDefault = "https://firebasestorage.googleapis.com/v0/b/cpaeducacao-saquarema.appspot.com/o/file-uploader-api-profile-avatar-2.jpg?alt=media&token=722af98a-5673-490d-a0e0-8c639f9395ea"

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
    

    async function handleNewDepoiment(e) {
        e.preventDefault();
        toast.info(`Cadastrando. Aguarde...`);

        const uuid = uuidv4();
        let newAvatarUrlFirebase = ref(storage, `images/depoiments/${uuid}`);
        
        let uploadAvatar = await uploadBytes(newAvatarUrlFirebase, imageAvatar);
        let photoUrlAvatar = await getDownloadURL(uploadAvatar.ref);
        
        console.log(uploadAvatar.ref.name, photoUrlAvatar);

        newCategoryPost(photoUrlAvatar)
    }

    async function newCategoryPost (photoUrlAvatar) {
        try {
            const docRef = await addDoc(collection(db, "depoiments"), {
                name: name,
                image: photoUrlAvatar === "" || photoUrlAvatar === undefined ? avatarDefault : photoUrlAvatar,
                course: course,
                depoiment: depoiment,
            })
            console.log("Document written with ID: ", docRef.id);
                toast.info(`Cadastro realizado com sucesso!`);
                setAvatarUrl(null)
                setImageAvatar('')
                setName('')
                setCourse('')
                setDepoiment('')

                window.open("/adm/depoiment", "_self")
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

    
    return (
        <div className="depoimentsForm">
           <h1>Cadastrar depoimento</h1>
                <form action="" onSubmit={handleNewDepoiment}>
                <label className="label-avatar">
                    <span><FiUpload color="#f65" size={25} /></span>
                    <input type="file" accept="image/*" onChange={handleFile}/><br />
                    <img src={avatarUrl === null ? profile : avatarUrl} alt="Avatar" height={160} width={160}/>
                </label>

                    <input type="text" placeholder="Nome do aluno" value={name} onChange={(e) => setName(e.target.value)}/>
                    <input type="text" placeholder="Curso" value={course} onChange={(e) => setCourse(e.target.value)}/>
                   <textarea name="" id="" cols="30" rows="10" placeholder="Depoimento" value={depoiment} onChange={(e) => setDepoiment(e.target.value)}></textarea>
                    <button type="submit">Cadastrar depoimento</button>
                </form>
        </div>
    )
}

export {DepoimentsForm}