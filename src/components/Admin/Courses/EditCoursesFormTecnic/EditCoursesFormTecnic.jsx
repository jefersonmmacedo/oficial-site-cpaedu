import "./coursesFormTecnic.css"
import profile from '../../../../assets/images/imagecurso.jpg'
import {FiUpload} from 'react-icons/fi'
import { useState } from "react";
import { toast } from "react-toastify";

function CoursesFormTecnic() {
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



    return (
        <div className="CoursesFormTecnic">
            <h3>Novo Curso</h3>
            <form action="">
                <label className="label-avatar">
                    <span><FiUpload color="#f65" size={25} /></span>
                    <input type="file" accept="image/*" onChange={handleFile}/><br />
                    <img src={avatarUrl === null ? profile : avatarUrl} alt="Avatar" height={160} width={400}/>
                </label>
                <input type="text" placeholder="Titulo" />
                <input type="text" placeholder="Descrição" />
                <input type="text" placeholder="link" />
                <div className="double">
                    <select name="" id="">
                        <option value="">Categoria</option>
                        <option value="Música">Música</option>
                        <option value="Graduação">Graduação</option>
                        <option value="Pós Graduação">Pós Graduação</option>
                        <option value="Profissionalizantes">Profissionalizantes</option>
                        <option value="Segundo Curso Superior">Segundo Curso Superior</option>
                    </select>
                    <select name="" id="">
                        <option value="">Sub-categoria</option>
                        <option value="2º Liceniatura">2º Liceniatura</option>
                        <option value="Formação Pedagógica">Formação Pedagógica</option>
                    </select>
                    </div>

                <button>Cadastrar</button>
            </form>
        </div>
    )
}

export { CoursesFormTecnic }
