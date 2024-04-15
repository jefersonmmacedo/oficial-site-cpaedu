import { Footer } from "../../components/Footer/Footer";
import Navbar2 from "../../components/Nav/Navbar";
import { collection, query, where, getDocs } from "firebase/firestore";
import db from '../../services/firebaseConnection';
import "./courseTecnic.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import student from '../../assets/images/student1.png';
import student2 from '../../assets/images/students.jpg';
import { IoAlarmOutline, IoSchoolOutline, IoLibraryOutline,IoEyeOutline, IoCloseOutline, IoGrid } from 'react-icons/io5';
import { FiDollarSign } from 'react-icons/fi';
import Modal from 'react-modal';

const imageCategory = "https://firebasestorage.googleapis.com/v0/b/cpaeducacao-saquarema.appspot.com/o/images%2Fcategories%2F4f71ee16-2e82-4f01-81d9-3f8442f036fc?alt=media&token=63a87022-78d5-472d-8384-85df7d90b965"

function CourseTecnic() {
    const {curso} = useParams();
    const [modalIsOpen, setIsOpen] = useState(false);

    console.log(curso);
    const [title, setTitle] = useState("");
    const [availability, setAvailability] = useState("");
    const [idCourse, setIdCourse] = useState("");
    const [category, setCategory] = useState("");
    const [curriculum, setCurriculum] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState("");
    const [hours, setHours] = useState("");
    const [format, setFormat] = useState("");
    const [image, setImage] = useState("");
    const [linkVideo, setLinkVideo] = useState("");
    const [mec, setMec] = useState("");
    const [portion, setPortion] = useState("");
    const [qtdDate, setQtdDate] = useState("");
    const [subCategory, setSubCategory] = useState("");
    const [typeDuration, setTypeDuration] = useState("");
    const [value, setValue] = useState("");
    const [valueCourse, setValueCourse] = useState("");
    const [valuePromotional, setValuePromotional] = useState("");
    const [professional, setProfessional] = useState('');
    const [occupationArea, setOccupationArea] = useState('');


useEffect(() => {
    async function setDocCourse() {
        const q = query(collection(db, "courses"), where("title", "==", curso));
        console.log("Olá, Mundo")
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          setIdCourse(doc.id);
            setAvailability(doc.data().availability);
            setCategory(doc.data().category);
            setCurriculum(doc.data().curriculum);
            setDate(doc.data().date); 
            setDescription(doc.data().description);
            setDuration(doc.data().duration); 
            setFormat(doc.data().format);
            setHours(doc.data().hours); 
            setImage(doc.data().image); 
            setLinkVideo(doc.data().linkVideo); 
            setMec(doc.data().mec); 
            setPortion(doc.data().portion); 
            setQtdDate(doc.data().qtdDate);
            setSubCategory(doc.data().subCategory); 
            setTitle(doc.data().title) 
            setTypeDuration(doc.data().typeDuration);
            setValue(doc.data().value); 
            setValueCourse(doc.data().valueCourse); 
            setValuePromotional(doc.data().valuePromotional); 
            setProfessional(doc.data().professional);
            setOccupationArea(doc.data().occupationArea);
        });
    }
    setDocCourse()
}, [curso])

console.log(idCourse);
console.log(availability);
console.log(category);
console.log(curriculum);
console.log(date); 
console.log(description);
console.log(duration); 
console.log(format);
console.log(hours); 
console.log(image); 
console.log(linkVideo); 
console.log(mec); 
console.log(portion); 
console.log(qtdDate);
console.log(subCategory); 
console.log(title) 
console.log(typeDuration);
console.log(value); 
console.log(valueCourse); 
console.log(valuePromotional); 



function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }

  



Modal.setAppElement('#root');
    return (
        <>
             <Navbar2 />
        <div className="CourseTecnic">
                <div className="title">
                    <div className="text">
                        {subCategory === "" ?
                    <h3>{category} </h3> :
                    <h3>{category} &rsaquo; {subCategory}</h3> 
                        }
                    <h1>{title}</h1>
                    </div>
                 <div className="image">
                    <img src={student} alt={title} />
                </div>
                </div>
                <div className="menu">
                    <div className="text">
                    <p>Sobre o curso</p>
                    <p>Entenda o curso</p>
                    <p>O profissional</p>
                    <p>Áreas de atuação</p>
                    <p>Grade Curricular</p>
                    </div>
                    <a href={`/prematricula/${title}`}>Quero me inscrever</a>
                </div>
                <div className="aboutCourse">
                    <div className="text">
                        <h1>Sobre o Curso</h1>
                        <p>{description}</p>
                        <br />
                        {mec === "" || mec === undefined ? "" :
                        <p><b>CADASTRO NO MEC:</b> <a href={mec} alt="cadastro no MEC" target="_blank">Visualizar</a> </p>
                        }
                    </div>
                    <div className="itens">
                        <div className="item">
                            <div className="icon">
                                <IoAlarmOutline />
                            </div>
                            <div className="text">
                                <p>Duração</p>
                                <p> <b>{duration} {typeDuration}</b> </p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="icon">
                            <IoSchoolOutline />
                            </div>
                            <div className="text">
                                <p>Certificação Conferida</p>
                                <p><b>{category}</b> </p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="icon">
                            <IoLibraryOutline />
                            </div>
                            <div className="text">
                                <p>Modalidade</p>
                                <p><b>{format}</b> </p>
                            </div>
                        </div>
                        {valueCourse === "" ? "" :  
                        <div className="item">
                            <div className="icon">
                            <FiDollarSign />
                            </div>
                            <div className="text">
                                <p>Investimento</p>
                                {valuePromotional === "" || valuePromotional === null || valuePromotional === undefined ?
                                <p><b>R${valueCourse}</b></p>
                                :
                                <p>De: <b>R${valueCourse}</b> / Por: <b>R${valuePromotional}</b></p>
                                }
                            </div>
                        </div>
                        }
                    </div>
                </div>
                <div className="subscript">
                    <div className="image">
                        <img src={category === "Graduação" ? imageCategory : image} alt={title} />
                    </div>
                    <div className="text">
                        <h1>Seja um profissional em</h1>
                        <h1><b>{title}</b></h1>
                        <div className="buttons">
                        <a href={`/prematricula/${title}`}>Inscreva-se agora</a>
                        </div>
                    </div>
                </div>
                {linkVideo === "" ? "":
                <div className="media">
                    <h1>Fique por dentro</h1>
               <iframe width="560" height="315" src={linkVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                }


    { professional === "" || professional === undefined ? "" :
     <div className="professional">
                    <h1>O profissional</h1>
                    <div className="block">
                        <div className="icon">
                        <IoGrid />
                        </div>
                        <div className="text">
                            <p>{professional}</p>
                        </div>
                    </div>
                </div>}

                
                
{    occupationArea === "" || occupationArea === undefined ? "" :
                <div className="occupationArea">
                    <h1>Área de atuação</h1>
                    <div className="block">
                        <div className="icon">
                            <IoGrid />
                        </div>
                        <div className="text2">
                        <p>{occupationArea}</p>
                        </div>
                    </div>
                </div>}

                <div className="grade">
                    <div className="text">
                        <h1>Grade Curricular</h1>
                        <p>Conheça a grade curricular do curso</p>

                        <button onClick={openModal}><IoEyeOutline />Ver grade curricular</button>
                    </div>
                    <div className="list">
                        <div className="image">
                            <img src={student2} alt="Students" />
                        </div>
                    </div>
                </div>

        </div>




                   <Modal isOpen={modalIsOpen} onRequestClose={closeModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content">
            <button type="button" className="react-modal-button" onClick={closeModal}>
            <IoCloseOutline /> 
            </button>
            <div className="content-modal">
              <h3>Grade Curricular</h3>
        
            <div className="itensModal">
             <p>{curriculum}</p>
            </div>
            
            
            <div className="buttons-modal">
            <button className="button-White" onClick={closeModal}>Fechar</button>
            </div>
            </div>
            </Modal> 





            <Footer />
        </>
    )
}

export { CourseTecnic }


