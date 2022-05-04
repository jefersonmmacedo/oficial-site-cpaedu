import './depoimentsForm.css';
import { useState } from 'react';
import { toast } from 'react-toastify';
import {FiUpload} from 'react-icons/fi';
import profile from '../../../../assets/images/imagecurso.jpg';

function DepoimentsForm() {
    const [avatarUrl, setAvatarUrl] = useState(null);
    const [imageAvatar, setImageAvatar] = useState(''); 

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


    function handleDepoimentsForm(e) {
        e.preventDefault()
        console.log("Informações")
    }
    
    return (
        <div className="depoimentsForm">
           <h1>Cadastrar depoimento</h1>
                <form action="" onSubmit={handleDepoimentsForm}>
                <label className="label-avatar">
                    <span><FiUpload color="#f65" size={25} /></span>
                    <input type="file" accept="image/*" onChange={handleFile}/><br />
                    <img src={avatarUrl === null ? profile : avatarUrl} alt="Avatar" height={160} width={160}/>
                </label>

                    <input type="text" placeholder="Nome do aluno" />
                    <input type="text" placeholder="Curso" />
                   <textarea name="" id="" cols="30" rows="10" placeholder="Depoimento"></textarea>
                    <button type="submit">Cadastrar depoimento</button>
                </form>
        </div>
    )
}

export {DepoimentsForm}