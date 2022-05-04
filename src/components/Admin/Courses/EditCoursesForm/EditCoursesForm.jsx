import { useState } from 'react';
import { toast } from 'react-toastify';
import {FiUpload} from 'react-icons/fi';
import profile from '../../../../assets/images/imagecurso.jpg';
import './coursesForm.css';

function CoursesForm() {

    const [avatarUrl, setAvatarUrl] = useState(null);
    const [imageAvatar, setImageAvatar] = useState(''); 

    const [] = useState("");
    const [] = useState("");
    const [] = useState("");
    const [] = useState("");
    const [] = useState("");
    const [] = useState("");
    const [] = useState("");
    const [] = useState("");
    const [] = useState("");
    const [] = useState("");
    const [] = useState("");
    const [] = useState("");
    const [] = useState("");
    const [] = useState("");
    const [] = useState("");
    const [] = useState("");
    const [] = useState("");


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



    function handleCoursesForm(e) {
        e.preventDefault()
        console.log("Informações")
    }
    
    return (
        <div className="coursesForm">
           <h3>Cadastrar Cursos</h3>
                <form action="" onSubmit={handleCoursesForm}>
                <label className="label-avatar">
                    <span><FiUpload color="#f65" size={25} /></span>
                    <input type="file" accept="image/*" onChange={handleFile}/><br />
                    <img src={avatarUrl === null ? profile : avatarUrl} alt="Avatar" height={160} width={400}/>
                </label>


                    <input type="text" placeholder="Nome do curso" />
                    <input type="text" placeholder="Descrição" />
                    <div className="double">
                    <input type="text" placeholder="Valor" />
                    <input type="text" placeholder="Valor promocional" />
                    </div>
                    <input type="text" placeholder="Cadastro no MEC" />
                    <input type="text" placeholder="Link Vídeo" />
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

                    <textarea name="" id="" cols="30" rows="20" placeholder="Matriz Curricular"></textarea>

                    <div className="double">
                    <input type="text" placeholder="Duração" />
                    <select name="" id="">
                        <option value="Horas">Horas</option>
                        <option value="Dias">Dias</option>
                        <option value="Semanas">Semanas</option>
                        <option value="Meses">Meses</option>
                        <option value="Anos">Anos</option>
                    </select>
                    </div>


                    <div className="double">
                    <input type="text" placeholder="QTD de Horas" />             
                    <select name="" id="">
                        <option value="">Formato</option>
                        <option value="Online">Online</option>
                        <option value="Presencial">Presencial</option>
                    </select>
                    </div>

                    <div className="double">
                    <input type="text" placeholder="Valor Parcela" />
                    <input type="text" placeholder="QTD de Vezes" />
                    </div>

                    <div className="double">
                    <input type="text" placeholder="Encontros QTD" />
                    <select name="" id="">
                        <option value="">Dia</option>
                        <option value="">Semana</option>
                        <option value="">Mês</option>
                    </select>
                    </div>

                  
                    <button type="submit">Cadastrar curso</button>
                </form>
        </div>
    )
}

export {CoursesForm}