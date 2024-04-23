import "./newPost.css";
import profile from '../../../../assets/images/imagecurso.jpg'
import {FiUpload} from 'react-icons/fi'
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { collection, addDoc } from "firebase/firestore";
import db from '../../../../services/firebaseConnection';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { v4 as uuidv4} from 'uuid'
import { storage } from "../../../../services/firebaseImageConnection";

function NewPost() {

    const [avatarUrl, setAvatarUrl] = useState(null);
    const [imageAvatar, setImageAvatar] = useState('');
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [manchete, setManchete] = useState('');
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
    
    async function handleNewCategory() {
        toast.info(`Cadastrando. Aguarde...`);

        const uuid = uuidv4();
        let newAvatarUrlFirebase = ref(storage, `images/categories/${uuid}`);
        
        let uploadAvatar = await uploadBytes(newAvatarUrlFirebase, imageAvatar);
        let photoUrlAvatar = await getDownloadURL(uploadAvatar.ref);
        
        console.log(uploadAvatar.ref.name, photoUrlAvatar);

        newCategoryPost(photoUrlAvatar)
    }

    async function newCategoryPost (photoUrlAvatar) {
        try {
            const docRef = await addDoc(collection(db, "posts"), {
                title: title,
                image: photoUrlAvatar,
                manchete: manchete,
               // text: editorRef.current.getContent(),
               text: text,
                category: category,
                date: new Date(),
            })
            console.log("Document written with ID: ", docRef.id);
                toast.info(`Cadastro realizado com sucesso!`);
                setAvatarUrl(null)
                setImageAvatar('')
                setTitle('')
                setManchete('')
                setCategory('')

                window.open("/adm/post", "_self")
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

    const editorRef = useRef();
    const log = () => {
      if (editorRef.current) {
        console.log(editorRef.current.getContent());
        console.log(title);
        console.log(manchete);
      }
      handleNewCategory()
    };

    function handleEditor(e) {
        e.preventDefault();
    }

    function handleCategory(e) {
        setCategory(e.target.value);
    }


    return (

        <div className="NewPost">
            <h3>Nova postagem</h3>
            <form onSubmit={handleEditor}>
                <label className="label-avatar">
                    <span><FiUpload color="#f65" size={25} /></span>
                    <input type="file" accept="image/*" onChange={handleFile}/><br />
                    <img src={avatarUrl === null ? profile : avatarUrl} alt="Avatar" height={160} width={400}/>
                </label>
                <input type="text" placeholder="Titulo" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                <input type="text" placeholder="Manchete" value={manchete} onChange={(e) => setManchete(e.target.value)} required/>
                <select value={category} onChange={handleCategory}>
                    <option value="">Selecione</option>
                    <option value="Educação">Educação</option>
                    <option value="Cursos">Cursos</option>
                    <option value="Universidades">Universidades</option>
                    <option value="Saquarema">Saquarema</option>
                    <option value="Notícias">Notícias</option>
                    <option value="Eventos">Eventos</option>
                </select>

                <textarea  value={text} onChange={(e) => setText(e.target.value)}></textarea>



       <button onClick={handleNewCategory}>Salvar postagem</button>
            </form>        
            
        </div>
    )
}

export { NewPost }
