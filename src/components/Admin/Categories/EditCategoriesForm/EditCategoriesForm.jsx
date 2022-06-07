import "./editCategoriesForm.css";
import { collection, query, where, getDocs, updateDoc, doc  } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import db from '../../../../services/firebaseConnection';
import { storage } from "../../../../services/firebaseImageConnection";
import {FiUpload} from 'react-icons/fi'
import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import { toast } from "react-toastify";
import { v4 as uuidv4} from 'uuid'

function CategoriesForm() {
    const {categoria} = useParams();
    console.log(categoria)
    const [avatarUrl, setAvatarUrl] = useState(null);
    const [imageAvatar, setImageAvatar] = useState(''); 
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageCategory, setImageCategory] = useState('');
    const [id, setId] = useState('');



    useEffect(() => {
        async function setDocCourse() {
            const q = query(collection(db, "categories"), where("title", "==", categoria));
            console.log("Olá, Mundo")
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
              setId(doc.id);
              setImageCategory(doc.data().image);
              console.log(doc.data().image);
              setTitle(doc.data().title);
              console.log(doc.data().title);
              setDescription(doc.data().description);
              console.log(doc.data().description);
            });
        }
        setDocCourse()
    }, [categoria])








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


    async function handleUpdateCategory(e) {
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
        const updateCategoria = doc(db, "categories", id);

        await updateDoc(updateCategoria, {
            title: title,
            image: photoUrlAvatar === "" ? imageCategory : photoUrlAvatar,
            description: description,
        });

        toast.info("Categoria atualizada.");
      
        window.open("/adm/category", "_self")
    }


    return (
        <div className="CategoriesForm">
            <h3>Nova Categoria</h3>
            <form action="">
                <label className="label-avatar">
                    <span><FiUpload color="#f65" size={25} /></span>
                    <input type="file" accept="image/*" onChange={handleFile}/><br />
                    <img src={avatarUrl === null ? imageCategory : avatarUrl} alt="Avatar" height={160} width={400}/>
                </label>
                <input type="text" placeholder="Titulo" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                <textarea name="" id="" cols="30" rows="10" placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>

                <button onClick={handleUpdateCategory}>Atualizar</button>
            </form>
        </div>
    )
}

export { CategoriesForm }