import "./coursesFormTecnic.css"
import profile from '../../../../assets/images/imagecurso.jpg'
import {FiUpload} from 'react-icons/fi'
import { useState } from "react";
import { toast } from "react-toastify";
import { collection, addDoc } from "firebase/firestore";
import db from '../../../../services/firebaseConnection';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { v4 as uuidv4} from 'uuid'
import { storage } from "../../../../services/firebaseImageConnection";

function CoursesFormTecnic() {
    const [avatarUrl, setAvatarUrl] = useState(null);
    const [imageAvatar, setImageAvatar] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    const [category, setCategory] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const [format, setFormat] = useState('');



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
    


    async function handleCoursesForm(e) {
        e.preventDefault();

        const uuid = uuidv4();
        let newAvatarUrlFirebase = ref(storage, `images/courses/${uuid}`);
        
        let uploadAvatar = await uploadBytes(newAvatarUrlFirebase, imageAvatar);
        let photoUrlAvatar = await getDownloadURL(uploadAvatar.ref);
        
        console.log(uploadAvatar.ref.name, photoUrlAvatar);

        newCategoryPost(photoUrlAvatar)
    }

    async function newCategoryPost (photoUrlAvatar) {
        try {
            const docRef = await addDoc(collection(db, "courses"), {
                title: title,
                image: photoUrlAvatar,
                description: description,
                link: link,
                category: "Cursos Técnicos EAD"
            })
            console.log("Document written with ID: ", docRef.id);
                toast.info(`Cadastro realizado com sucesso!`);
                setAvatarUrl(null)
                setImageAvatar('')
                setTitle('')
                setDescription('')
                setLink('')
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

    function handleFormat(e) {
        setFormat(e.target.value);
    }

    return (
        <div className="CoursesFormTecnic">
            <h3>Novo Curso Técnico</h3>
            <form onSubmit={handleCoursesForm}>
                <label className="label-avatar">
                    <span><FiUpload color="#f65" size={25} /></span>
                    <input type="file" accept="image/*" onChange={handleFile}/><br />
                    <img src={avatarUrl === null ? profile : avatarUrl} alt="Avatar" height={160} width={400}/>
                </label>
                <input type="text" placeholder="Titulo"  value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea name="" id="" cols="30" rows="10" placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                <input type="text" placeholder="link"  value={link} onChange={(e) => setLink(e.target.value)} />
                <select name="" id="" value={format} onChange={handleFormat}>
                        <option value="">Formato</option>
                        <option value="Online">Online</option>
                        <option value="Presencial">Presencial</option>
                    </select>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}

export { CoursesFormTecnic }
