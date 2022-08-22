import "./editPost.css";
import { collection, query, where, getDocs, updateDoc, doc  } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import db from '../../../../services/firebaseConnection';
import { storage } from "../../../../services/firebaseImageConnection";
import {FiUpload} from 'react-icons/fi'
import { useEffect, useState, useRef } from "react";
import {useParams} from 'react-router-dom'
import { toast } from "react-toastify";
import { v4 as uuidv4} from 'uuid';
import { Editor } from '@tinymce/tinymce-react';

function EditPost() {
    const {namepost} = useParams();

    console.log(namepost);
    const [avatarUrl, setAvatarUrl] = useState(null);
    const [imageAvatar, setImageAvatar] = useState('');
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [manchete, setManchete] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState("");
    const [text, setText] = useState("");



useEffect(() => {
    async function setDocCourse() {
        const q = query(collection(db, "posts"), where("title", "==", namepost));
        console.log("Olá, Mundo")
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          setId(doc.id);
            setCategory(doc.data().category);
            setImage(doc.data().image); 
            setTitle(doc.data().title) 
            setText(doc.data().text) 
            setManchete(doc.data().manchete) 
        });
    }
    setDocCourse()
}, [namepost])


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

const editorRef = useRef();
const log = () => {
  if (editorRef.current) {
    console.log(editorRef.current.getContent());
    console.log(title);
    console.log(manchete);
  }
  handleUpdateCategory()
};


function handleEditor(e) {
    e.preventDefault();
}


    async function handleUpdateCategory() {
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
        const updateCategoria = doc(db, "posts", id);

        await updateDoc(updateCategoria, {
            title: title,
            image: photoUrlAvatar === "" ? image : photoUrlAvatar,
            category: category,
            manchete: manchete,
            text: editorRef.current.getContent()
        });

        toast.info("Postagem atualizada.");
      
        window.open("/adm/blog", "_self")
    }


    function handleCategory(e) {
        setCategory(e.target.value);
    }


    return (
        <div className="EditPost">
            <h3>Editar Posts</h3>
            <form onSubmit={handleEditor}>
                <label className="label-avatar">
                    <span><FiUpload color="#f65" size={25} /></span>
                    <input type="file" accept="image/*" onChange={handleFile}/><br />
                    <img src={avatarUrl === null ? image : avatarUrl} alt="Avatar" height={160} width={400}/>
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

                <Editor
                apiKey="i5roon6zk0tfnjuqdxque3lyxrhj9wznjbzefx0kugus5r02"
         onInit={(evt, editor) => editorRef.current = editor}
         initialValue={text}
         init={{
            width: '90%',
           height: 600,
           menubar: false,
           plugins: [
             'advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help wordcount'
           ],
           toolbar: 'undo redo | formatselect | ' +
           'bold italic backcolor | alignleft aligncenter ' +
           'alignright alignjustify | bullist numlist outdent indent | ' +
           'removeformat | help',
           content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
         }}
       />
       <button onClick={log}>Salvar postagem</button>
            </form>        
            
        </div>
    )
}

export { EditPost }