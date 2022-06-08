import "./editCoursesFormTecnic.css"
import {FiUpload} from 'react-icons/fi'
import { collection, query, where, getDocs, updateDoc, doc  } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import db from '../../../../services/firebaseConnection';
import { storage } from "../../../../services/firebaseImageConnection";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { v4 as uuidv4} from 'uuid';

function CoursesFormTecnicEdit({curso}) {
    const [avatarUrl, setAvatarUrl] = useState(null);
    const [imageAvatar, setImageAvatar] = useState('');
    const [title, setTitle] = useState('');
    const [imageCourse, setImageCourse] = useState('');
    const [id, setId] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    const [category, setCategory] = useState('');

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
            const q = query(collection(db, "courses"), where("title", "==", curso));
            console.log("Olá, Mundo")
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
              setId(doc.id);
              setImageCourse(doc.data().image);
              setTitle(doc.data().title);
              setDescription(doc.data().description);
              setLink(doc.data().link);
              setCategory(doc.data().category);
            });
        }
        setDocCourse()
    }, [curso]);

    async function handleCoursesForm(e) {
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
        const updateslider = doc(db, "courses", id);

        await updateDoc(updateslider, {
            title: title,
            image: photoUrlAvatar === "" ? imageCourse : photoUrlAvatar,
            description: description,
            link: link,
            category: category,
        });

        toast.info("Curso atualizado.");
        window.open("/adm/course", "_self")
    }


    return (
        <div className="CoursesFormTecnicEdit">
            <h3>Editar Curso Técnico</h3>
            <form onSubmit={handleCoursesForm}>
                <label className="label-avatar">
                    <span><FiUpload color="#f65" size={25} /></span>
                    <input type="file" accept="image/*" onChange={handleFile}/><br />
                    <img src={avatarUrl === null ? imageCourse : avatarUrl} alt="Avatar" height={160} width={400}/>
                </label>
                <input type="text" placeholder="Titulo"  value={title} onChange={(e) => setTitle(e.target.value)} required/>
                <textarea name="" id="" cols="30" rows="10" placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                <input type="text" placeholder="link"  value={link} onChange={(e) => setLink(e.target.value)} required/>
                <input type="text" placeholder="link"  value={category} disabled/>
                <button type="submit">Atualizar</button>
            </form>
        </div>
    )
}

export { CoursesFormTecnicEdit }
