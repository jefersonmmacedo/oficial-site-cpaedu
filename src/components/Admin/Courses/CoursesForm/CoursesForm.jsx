import './coursesForm.css';
import { useState } from 'react';
import { toast } from 'react-toastify';
import {FiUpload} from 'react-icons/fi';
import profile from '../../../../assets/images/imagecurso.jpg';
import { collection, addDoc, getDocs } from "firebase/firestore";
import db from '../../../../services/firebaseConnection';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { v4 as uuidv4} from 'uuid'
import { storage } from "../../../../services/firebaseImageConnection";
import { useEffect } from 'react'

function CoursesForm() {
    const [avatarUrl, setAvatarUrl] = useState(null);
    const [imageAvatar, setImageAvatar] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    const [category, setCategory] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const [valueCourse, setValueCourse] = useState('');
    const [valuePromotional, setValuepromotional] = useState('');
    const [linkVideo, setLinkVideo] = useState('');
    const [curriculum, setCurriculum] = useState('');
    const [mec, setMec] = useState('');
    const [hours, setHours] = useState('');
    const [format, setFormat] = useState('');
    const [portion, setPortion] = useState('');
    const [value, setValue] = useState('');
    const [qtdDate, setQtdDate] = useState('');
    const [date, setDate] = useState('');
    const [duration, setDuration] = useState('');
    const [typeDuration, setTypeDuratin] = useState('');
    const [availability, setAvailability] = useState('');
    const [professional, setProfessional] = useState('');
    const [occupationArea, setOccupationArea] = useState('');
    const [categories, setCategories] = useState([]); 

    useEffect(() => {
      async function loadCondadatos() {
          const querySnapshot = await getDocs(collection(db, "categories"));  
          const list = []
          querySnapshot.forEach((doc) => {
             // console.log(`${doc.id} => ${doc.data()}`);
            const data = {
              id: doc.id,
              title: doc.data().title,
              image: doc.data().image,
              description: doc.data().description,
              }
              
            console.log(data)
              list.push(data)
            });
            setCategories(list)
      }
  
      loadCondadatos()
  }, []);

  


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
    
    
    
    
    function handleCategories(e) {
        setCategory(e.target.value);
        toast.info(e.target.value)
    }
    function handleAvailability(e) {
        setAvailability(e.target.value);
    }
    function handleSub(e) {
        setSubCategory(e.target.value);
    }
    function handleFormat(e) {
        setFormat(e.target.value);
    }
    function handleDate(e) {
        setQtdDate(e.target.value);
    }
    function handleDuration(e) {
        setTypeDuratin(e.target.value);
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
                category: category,
                subCategory: subCategory,
                valueCourse: valueCourse,
                valuePromotional: valuePromotional,
                link: link,
                linkVideo: linkVideo,
                curriculum: curriculum,
                mec: mec,
                hours: hours,
                format: format,
                portion: portion,
                value: value,
                qtdDate: qtdDate,
                date: date,
                duration: duration,
                typeDuration: typeDuration,
                availability: availability,
                professional: professional,
                occupationArea: occupationArea,
            })
            console.log("Document written with ID: ", docRef.id);
                toast.info(`Cadastro realizado com sucesso!`);
                setAvatarUrl(null)
                setImageAvatar('')
                setTitle('')
                setDescription('')
                setLink('')
                setCategory('')
                setSubCategory('')
                setDuration('')
                setTypeDuratin('')
                setDate('');
                setValue('')
                setPortion('');
                setFormat('');
                setHours('');
                setMec('');
                setLinkVideo('');
                setAvailability('');
                setValueCourse('')
                setValuepromotional('');
                setCurriculum('');
                setProfessional('');
                setOccupationArea('');

                window.open("/adm/course", "_self")
                
          } catch (e) {
            console.error("Error adding document: ", e);
          }
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


                    <input type="text" placeholder="Nome do curso" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    <div className="double">
                    <input type="text" placeholder="Valor" value={valueCourse} onChange={(e) => setValueCourse(e.target.value)}/>
                    <input type="text" placeholder="Valor promocional" value={valuePromotional} onChange={(e) => setValuepromotional(e.target.value)}/>
                    </div>
                    <input type="text" placeholder="Cadastro no MEC" value={mec} onChange={(e) => setMec(e.target.value)}/>
                    <input type="text" placeholder="Link Vídeo" value={linkVideo} onChange={(e) => setLinkVideo(e.target.value)}/>

                    {category !== "2º Curso Superior" ?                    
                    <select name="" id="" value={category} onChange={handleCategories} required>
                        <option value="">Categoria</option>
                        {categories.map((category) => {
                            return (
                                <option value={category.title}>{category.title}</option>
                            )
                        })}
                    </select>
                    :
                    <div className="double">
                    <select name="" id="" value={category} onChange={handleCategories} >
                    {categories.map((category) => {
                            return (
                                <option value={category.title}>{category.title}</option>
                            )
                        })}
                    </select>
                    <select name="" id="" value={subCategory} onChange={handleSub} >
                        <option value="">Sub-categoria</option>
                        <option value="2º Graduação">2º Graduação</option>
                        <option value="2º Liceniatura">2º Liceniatura</option>
                        <option value="Formação Pedagógica">Formação Pedagógica</option>
                    </select>
                    </div>
                    }

                    <select name="" id="" value={availability} onChange={handleAvailability} >
                        <option value="">Disponibilidade</option>
                        <option value="Disponível">Ativo</option>
                        <option value="Aguardar">Inativo</option>
                    </select>

                    <textarea name="" id="" cols="30" rows="5" placeholder="Matriz Curricular" value={curriculum} onChange={(e) => setCurriculum(e.target.value)}></textarea>
                    <textarea name="" id="" cols="30" rows="5" placeholder="O Profissional" value={professional} onChange={(e) => setProfessional(e.target.value)}></textarea>
                    <textarea name="" id="" cols="30" rows="5" placeholder="Área de atuação" value={occupationArea} onChange={(e) => setOccupationArea(e.target.value)}></textarea>

                    <div className="double">
                    <input type="text" placeholder="Duração" value={duration} onChange={(e) => setDuration(e.target.value)}/>
                    <select name="" id="" value={typeDuration} onChange={handleDuration}>
                        <option value="Horas">Horas</option>
                        <option value="Dias">Dias</option>
                        <option value="Semanas">Semanas</option>
                        <option value="Meses">Meses</option>
                        <option value="Anos">Anos</option>
                    </select>
                    </div>

                    <div className="double">
                    <input type="text" placeholder="QTD de Horas" value={hours} onChange={(e) => setHours(e.target.value)}/>             
                    <select name="" id="" value={format} onChange={handleFormat}>
                        <option value="">Formato</option>
                        <option value="Online">Online</option>
                        <option value="Presencial">Presencial</option>
                    </select>
                    </div>

                    <div className="double">
                    <input type="text" placeholder="Valor Parcela" value={value} onChange={(e) => setValue(e.target.value)}/>
                    <input type="text" placeholder="QTD de Vezes" value={portion} onChange={(e) => setPortion(e.target.value)}/>
                    </div>

                    <div className="double">
                    <input type="text" placeholder="Encontros QTD" value={date} onChange={(e) => setDate(e.target.value)}/>
                    <select name="" id="" value={qtdDate} onChange={handleDate}>
                        <option value="Dia">Dia</option>
                        <option value="Semana">Semana</option>
                        <option value="Mês">Mês</option>
                    </select>
                    </div>
                 
                  
                    <button type="submit">Cadastrar curso</button>
                </form>
        </div>
    )
}

export {CoursesForm}