import { Footer } from "../../components/Footer/Footer";
import Navbar2 from "../../components/Nav/Navbar";
import { collection, query, where, getDocs } from "firebase/firestore";
import db from '../../services/firebaseConnection';
import "./coursePos.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import student from '../../assets/images/student1.png';
import student2 from '../../assets/images/students.jpg';
import { IoAlarmOutline, IoSchoolOutline, IoLibraryOutline,IoEyeOutline, IoCloseOutline, IoGrid } from 'react-icons/io5';
import { FiDollarSign } from 'react-icons/fi';
import { FaComputer, FaMicroscope, FaScaleBalanced, FaUserGraduate, FaBuildingColumns, FaChalkboardUser } from 'react-icons/fa6';
import { MdEngineering } from 'react-icons/md';
import { LuBrainCircuit } from 'react-icons/lu';
import { BsBuildingFillCheck } from 'react-icons/bs';

import Modal from 'react-modal';


function CoursePos() {
    const curso  = "Pós Graduação";
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
    const [courses, setCourses] = useState('');


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

function handleCourses(data) {
    setCourses(data)
}


function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }

  
{/* <button className="topScroll" onClick={handleTop}><FiArrowUpCircle /></button> */}

function scrollPage(data) {
    window.location.href=`${data}`;
}


Modal.setAppElement('#root');
    return (
        <>
             <Navbar2 />
        <div className="coursePos">
                <div className="title">
                    <div className="text">
                        {subCategory === "" ?
                    <h3>Formação</h3> :
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
                    <p onClick={() => scrollPage("#sobre")}>Sobre o curso</p>
                    <p onClick={() => scrollPage("#courses")}>Inscreva-se</p>
                    <p onClick={() => scrollPage("#courses")}>Opções de cursos</p>
                    <p>Áreas de atuação</p>
                    </div>
                    <a href={`/prematricula/${title}`}>Quero me inscrever</a>
                </div>
                <div className="aboutCourse" id="sobre">
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
                                <p><b>{category} Lato Sensu</b> </p>
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
                        <img src={image} alt={title} />
                    </div>
                    <div className="text">
                        <h1>Seja um profissional</h1>
                        <h1><b>Pós-Graduado</b></h1>
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


    {/* { professional === "" || professional === undefined ? "" :
     <div className="professional">
                    <h1>Opções de Cursos</h1>
                    <div className="block">
                        <div className="icon">
                        <IoGrid />
                        </div>
                        <div className="text">
                            <p>{professional}</p>
                        </div>
                    </div>
                </div>} */}


                <div className="courses" id="courses">
                <h1>Opções de Cursos</h1>
                <div className="buttonsCourses">
                    <button onClick={() => handleCourses("Tecnologia")}>  <FaComputer /> Tecnologia</button>
                    <button onClick={() => handleCourses("Direito")}>  <FaScaleBalanced /> Direito</button>
                    <button onClick={() => handleCourses("Educação")}> <FaChalkboardUser />Educação</button>
                    <button onClick={() => handleCourses("Empresarial")}> <BsBuildingFillCheck />Empresarial</button>
                    <button onClick={() => handleCourses("Engenharias")}> <MdEngineering />Engenharias</button>
                    <button onClick={() => handleCourses("Gestão Pública")}> <FaBuildingColumns />Gestão Pública</button>
                    <button onClick={() => handleCourses("MBA Executivo")}> <FaUserGraduate />MBA Executivo</button>
                    <button onClick={() => handleCourses("Saúde")}> <FaMicroscope />Saúde</button>
                    <button onClick={() => handleCourses("Psicologia e Serviço Social")}> <LuBrainCircuit />Psicologia e Serviço Social</button>
                </div>

                <div className="listCourses">
                    {courses === "Tecnologia" ?
                    <>
                    <h4>55 OPÇÕES ENCONTRADAS</h4>
                    <div className="listSelected">
                        <p value="Administração e Marketing Desportivo">Administração e Marketing Desportivo</p>
                        <p value="Análise de Sistemas">Análise de Sistemas</p>
                        <p value="Arquitetura e Gestão de Infraestrutura em TI">Arquitetura e Gestão de Infraestrutura em TI</p>
                        <p value="Assessoria e Gestão da Comunicação">Assessoria e Gestão da Comunicação</p>
                        <p value="Banco de Dados">Banco de Dados</p>
                        <p value="Business Intelligence">Business Intelligence</p>
                        <p value="Comunicação e Oratória">Comunicação e Oratória</p>
                        <p value="Comunicação Empresarial">Comunicação Empresarial</p>
                        <p value="Comunicação Pública">Comunicação Pública</p>
                        <p value="Comunicação Social e Oratória">Comunicação Social e Oratória</p>
                        <p value="Cybercrime e Cybersecurity: Prevenção e Investigação de Crimes Digitais">Cybercrime e Cybersecurity: Prevenção e Investigação de Crimes Digitais</p>
                        <p value="Data Warehouse e Business Intelligence">Data Warehouse e Business Intelligence</p>
                        <p value="Desenvolvimento de Aplicações para Dispositivos Móveis (Apps)">Desenvolvimento de Aplicações para Dispositivos Móveis (Apps)</p>
                        <p value="Desenvolvimento de Aplicações.Net">Desenvolvimento de Aplicações.Net</p>
                        <p value="Desenvolvimento de Jogos Digitais">Desenvolvimento de Jogos Digitais</p>
                        <p value="Desenvolvimento de Sistemas com C#">Desenvolvimento de Sistemas com C#</p>
                        <p value="Desenvolvimento de Sistemas com Java">Desenvolvimento de Sistemas com Java</p>
                        <p value="Desenvolvimento de Sistemas com Java e PHP">Desenvolvimento de Sistemas com Java e PHP</p>
                        <p value="Desenvolvimento em Aplicações Web">Desenvolvimento em Aplicações Web</p>
                        <p value="Design Instrucional">Design Instrucional</p>
                        <p value="Design Thinking">Design Thinking</p>
                        <p value="Docência em Ciência e Tecnologia da Informação">Docência em Ciência e Tecnologia da Informação</p>
                        <p value="Docência em Comunicação com Ênfase em Publicidade e Propaganda">Docência em Comunicação com Ênfase em Publicidade e Propaganda</p>
                        <p value="Educomunicação">Educomunicação</p>
                        <p value="Gerenciamento de Projetos - TI">Gerenciamento de Projetos - TI</p>
                        <p value="Gestão da Qualidade de Software">Gestão da Qualidade de Software</p>
                        <p value="Gestão da Tecnologia da Informação">Gestão da Tecnologia da Informação</p>
                        <p value="Governança e Gestão da Tecnologia da Informação">Governança e Gestão da Tecnologia da Informação</p>
                        <p value="Governança em TI">Governança em TI</p>
                        <p value="Marketing Digital">Marketing Digital</p>
                        <p value="Marketing e Redes Sociais">Marketing e Redes Sociais</p>
                        <p value="MBA em Big Data">MBA em Big Data</p>
                        <p value="MBA em Comportamento do Consumidor">MBA em Comportamento do Consumidor</p>
                        <p value="MBA em Data Warehouse e Business Intelligence">MBA em Data Warehouse e Business Intelligence</p>
                        <p value="MBA em Empreendedorismo e Marketing">MBA em Empreendedorismo e Marketing</p>
                        <p value="MBA em Empreendedorismo, Marketing e Finanças">MBA em Empreendedorismo, Marketing e Finanças</p>
                        <p value="MBA em Gestão da Informação">MBA em Gestão da Informação</p>
                        <p value="MBA em Gestão da Tecnologia em Logística">MBA em Gestão da Tecnologia em Logística</p>
                        <p value="MBA em Gestão de Marcas e Produtos">MBA em Gestão de Marcas e Produtos</p>
                        <p value="MBA em Gestão de Marketing">MBA em Gestão de Marketing</p>
                        <p value="MBA em Gestão Estratégica de Marketing">MBA em Gestão Estratégica de Marketing</p>
                        <p value="MBA em Marketing">MBA em Marketing</p>
                        <p value="MBA em Marketing de Serviços e Relacionamento">MBA em Marketing de Serviços e Relacionamento</p>
                        <p value="MBA em Marketing Digital Global e de Relacionamento">MBA em Marketing Digital Global e de Relacionamento</p>
                        <p value="MBA em Marketing e Varejo">MBA em Marketing e Varejo</p>
                        <p value="MBA em Marketing Esportivo">MBA em Marketing Esportivo</p>
                        <p value="MBA Executivo em Gestão Comercial - Marketing e Vendas">MBA Executivo em Gestão Comercial - Marketing e Vendas</p>
                        <p value="MBA Executivo em Gestão Estratégica de Inovação Tecnológica e Propriedade Intelectual - MP">MBA Executivo em Gestão Estratégica de Inovação Tecnológica e Propriedade Intelectual - MP</p>
                        <p value="MBA Executivo em Gestão Estratégica de Marketing, Planejamento e Inteligência Competitiva">MBA Executivo em Gestão Estratégica de Marketing, Planejamento e Inteligência Competitiva</p>
                        <p value="MBA Executivo em Segurança Privada: Safety e Security">MBA Executivo em Segurança Privada: Safety e Security</p>
                        <p value="Rádio e TV">Rádio e TV</p>
                        <p value="Redes de Comunicação">Redes de Comunicação</p>
                        <p value="Retórica e Oratória em Língua Portuguesa">Retórica e Oratória em Língua Portuguesa</p>
                        <p value="Segurança de Redes de Computadores">Segurança de Redes de Computadores</p>
                        <p value="Sistemas de Informação">Sistemas de Informação</p>
                    </div>
                    </>
                    : courses === "Direito" ?
                    <>
                      <h4>90 OPÇÕES ENCONTRADAS</h4>
                    <div className="listSelected">

<p value="Análise Criminal">Análise Criminal</p>
<p value="Análise de Discurso Político e Jurídico">Análise de Discurso Político e Jurídico</p>
<p value="Arbitragem e mediação de conflitos">Arbitragem e mediação de conflitos</p>
<p value="Atuação da Escola e do Educador em Casos de Alienação Parental">Atuação da Escola e do Educador em Casos de Alienação Parental</p>
<p value="Auditoria e Perícia Contábil">Auditoria e Perícia Contábil</p>
<p value="Ciência Política">Ciência Política</p>
<p value="Contabilidade, Direito e Economia com Ênfase na Gestão Pública">Contabilidade, Direito e Economia com Ênfase na Gestão Pública</p>
<p value="Crimes cibernéticos e técnicas forenses">Crimes cibernéticos e técnicas forenses</p>
<p value="Criminologia">Criminologia</p>
<p value="Direito Administrativo">Direito Administrativo</p>
<p value="Direito Administrativo e Gestão Pública">Direito Administrativo e Gestão Pública</p>
<p value="Direito Agrário">Direito Agrário</p>
<p value="Direito Ambiental">Direito Ambiental</p>
<p value="Direito Ambiental">Direito Ambiental</p>
<p value="Direito aplicado à gestão hospitalar">Direito aplicado à gestão hospitalar</p>
<p value="Direito Civil">Direito Civil</p>
<p value="Direito Civil e Processual Civil de Acordo com o Novo CPC">Direito Civil e Processual Civil de Acordo com o Novo CPC</p>
<p value="Direito Comercial">Direito Comercial</p>
<p value="Direito Constitucional">Direito Constitucional</p>
<p value="Direito da Criança e do Adolescente">Direito da Criança e do Adolescente</p>
<p value="Direito da Criança e do Adolescente e Políticas Públicas">Direito da Criança e do Adolescente e Políticas Públicas</p>
<p value="Direito da propriedade intelectual">Direito da propriedade intelectual</p>
<p value="Direito de Família">Direito de Família</p>
<p value="Direito Digital">Direito Digital</p>
<p value="Direito do Consumidor">Direito do Consumidor</p>
<p value="Direito do Idoso">Direito do Idoso</p>
<p value="Direito do terceiro setor">Direito do terceiro setor</p>
<p value="Direito do Trabalho">Direito do Trabalho</p>
<p value="Direito do trabalho e da previdência">Direito do trabalho e da previdência</p>
<p value="Direito e Gestão de Contratos">Direito e Gestão de Contratos</p>
<p value="Direito e gestão de escritórios de advocacia">Direito e gestão de escritórios de advocacia</p>
<p value="Direito e legislação de trânsito">Direito e legislação de trânsito</p>
<p value="Direito e legislação em agrimensura">Direito e legislação em agrimensura</p>
<p value="Direito Econômico e Financeiro">Direito Econômico e Financeiro</p>
<p value="Direito Educacional">Direito Educacional</p>
<p value="Direito Eleitoral">Direito Eleitoral</p>
<p value="Direito Empresarial">Direito Empresarial</p>
<p value="Direito Hospitalar">Direito Hospitalar</p>
<p value="Direito Imobiliário">Direito Imobiliário</p>
<p value="Direito Internacional">Direito Internacional</p>
<p value="Direito internacional e comércio exterior">Direito internacional e comércio exterior</p>
<p value="Direito Médico e Hospitalar">Direito Médico e Hospitalar</p>
<p value="Direito Militar">Direito Militar</p>
<p value="Direito Notarial e Registral">Direito Notarial e Registral</p>
<p value="Direito Penal">Direito Penal</p>
<p value="Direito Penal e Processo Penal">Direito Penal e Processo Penal</p>
<p value="Direito Previdenciário">Direito Previdenciário</p>
<p value="Direito processual civil">Direito processual civil</p>
<p value="Direito processual do trabalho">Direito processual do trabalho</p>
<p value="Direito processual penal">Direito processual penal</p>
<p value="Direito processual tributário">Direito processual tributário</p>
<p value="Direito Público">Direito Público</p>
<p value="Direito Sanitário">Direito Sanitário</p>
<p value="Direito sucessório">Direito sucessório</p>
<p value="Direito Tributário">Direito Tributário</p>
<p value="Direito Tributário em Contabilidade">Direito Tributário em Contabilidade</p>
<p value="Direitos Difusos e Coletivos">Direitos Difusos e Coletivos</p>
<p value="Direitos Humanos e Questões Étnico-Sociais">Direitos Humanos e Questões Étnico-Sociais</p>
<p value="Direitos Humanos Internacionais">Direitos Humanos Internacionais</p>
<p value="Direitos Sociais e Assistente Social">Direitos Sociais e Assistente Social</p>
<p value="Direitos Sociais e Competências Profissionais do Assistente Social">Direitos Sociais e Competências Profissionais do Assistente Social</p>
<p value="Docência Jurídica">Docência Jurídica</p>
<p value="Estudos Jurídicos sobre a Síndrome da Alienação Parental">Estudos Jurídicos sobre a Síndrome da Alienação Parental</p>
<p value="Filosofia e Direitos Humanos">Filosofia e Direitos Humanos</p>
<p value="Gestão da Carreira Jurídica e de Escritórios de Advocacia">Gestão da Carreira Jurídica e de Escritórios de Advocacia</p>
<p value="Gestão de Organizações do Poder Judiciário e do Ministério Público">Gestão de Organizações do Poder Judiciário e do Ministério Público</p>
<p value="Gestão Social: Políticas Sociais, Redes e Defesa de Direito">Gestão Social: Políticas Sociais, Redes e Defesa de Direito</p>
<p value="Inteligência Policial">Inteligência Policial</p>
<p value="Legislação Educacional">Legislação Educacional</p>
<p value="Legislação imobiliária urbana e territorial">Legislação imobiliária urbana e territorial</p>
<p value="Legislação Profissional em Saúde">Legislação Profissional em Saúde</p>
<p value="LGPD - Lei geral de proteção de dados pessoais">LGPD - Lei geral de proteção de dados pessoais</p>
<p value="Licenciamento Ambiental">Licenciamento Ambiental</p>
<p value="Licitações e Compras Sustentáveis">Licitações e Compras Sustentáveis</p>
<p value="LLM Direito dos Contratos">LLM Direito dos Contratos</p>
<p value="LLM em Direito Empresarial">LLM em Direito Empresarial</p>
<p value="Mediação e Arbitragem">Mediação e Arbitragem</p>
<p value="Mediação e Conciliação">Mediação e Conciliação</p>
<p value="Perícia Judicial e Extrajudicial">Perícia Judicial e Extrajudicial</p>
<p value="Poder Judiciário e Atividade - Meio">Poder Judiciário e Atividade - Meio</p>
<p value="Português Jurídico">Português Jurídico</p>
<p value="Práticas jurídicas e carreira advocatícia">Práticas jurídicas e carreira advocatícia</p>
<p value="Pregão Eletrônico">Pregão Eletrônico</p>
<p value="Processo Administrativo Disciplinar e Sindicância">Processo Administrativo Disciplinar e Sindicância</p>
<p value="Psicologia e a Síndrome da Alienação Parental">Psicologia e a Síndrome da Alienação Parental</p>
<p value="Psicologia Forense e Jurídica">Psicologia Forense e Jurídica</p>
<p value="Registros de Imóveis">Registros de Imóveis</p>
<p value="Segurança Privada">Segurança Privada</p>
<p value="Segurança Pública">Segurança Pública</p>
<p value="Segurança Pública e Inteligência">Segurança Pública e Inteligência</p>

                    </div>
                      </>
                    : courses === "Educação" ?
                    <>
                      <h4>287 OPÇÕES ENCONTRADAS</h4>
                    <div className="listSelected">


<p value="Abordagem Interdisciplinar em Síndrome de Down">Abordagem Interdisciplinar em Síndrome de Down</p>
<p value="Aconselhamento Pastoral">Aconselhamento Pastoral</p>
<p value="Administração e Contabilidade Escolar">Administração e Contabilidade Escolar</p>
<p value="Administração e Finanças Educacionais">Administração e Finanças Educacionais</p>
<p value="Administração Escolar">Administração Escolar</p>
<p value="Administração Escolar: Orientação e Supervisão">Administração Escolar: Orientação e Supervisão</p>
<p value="Administração, Coordenação e Supervisão Escolar">Administração, Coordenação e Supervisão Escolar</p>
<p value="Administração, Orientação e Supervisão Escolar">Administração, Orientação e Supervisão Escolar</p>
<p value="Alfabetização e Letramento">Alfabetização e Letramento</p>
<p value="Anatomia do Aparelho Locomotor">Anatomia do Aparelho Locomotor</p>
<p value="Anos Iniciais">Anos Iniciais</p>
<p value="Antropologia">Antropologia</p>
<p value="Atendimento Educacional Especializado">Atendimento Educacional Especializado</p>
<p value="Atendimento Educacional Especializado com Ênfase em Educação Especial Inclusiva">Atendimento Educacional Especializado com Ênfase em Educação Especial Inclusiva</p>
<p value="Atendimento Educacional Especializado, Educação Infantil e Anos Iniciais">Atendimento Educacional Especializado, Educação Infantil e Anos Iniciais</p>
<p value="Atendimento Escolar Especializado">Atendimento Escolar Especializado</p>
<p value="Atividade Física e Saúde">Atividade Física e Saúde</p>
<p value="Atletismo">Atletismo</p>
<p value="Atuação da Escola e do Educador em Casos de Alienação Parental">Atuação da Escola e do Educador em Casos de Alienação Parental</p>
<p value="Avaliação da Aptidão Física">Avaliação da Aptidão Física</p>
<p value="Avaliação Física e Funcional do Idoso">Avaliação Física e Funcional do Idoso</p>
<p value="Avaliação Física, Ortopédica, Esportiva e Funcional">Avaliação Física, Ortopédica, Esportiva e Funcional</p>
<p value="Basquetebol">Basquetebol</p>
<p value="Biblioteconomia">Biblioteconomia</p>
<p value="Biomecânica da Atividade Física na Saúde e Reabilitação">Biomecânica da Atividade Física na Saúde e Reabilitação</p>
<p value="Ciências da Religião">Ciências da Religião</p>
<p value="Ciências Neurológicas, Deficiências Múltiplas e Surdocegueira">Ciências Neurológicas, Deficiências Múltiplas e Surdocegueira</p>
<p value="Comunicação e Informação Educacional e Empresarial">Comunicação e Informação Educacional e Empresarial</p>
<p value="Contação de Histórias e Musicalização na Educação Infantil">Contação de Histórias e Musicalização na Educação Infantil</p>
<p value="Coordenação Pedagógica">Coordenação Pedagógica</p>
<p value="Deficiência Intelectual">Deficiência Intelectual</p>
<p value="Didática do Ensino da Matemática">Didática do Ensino da Matemática</p>
<p value="Direito da Criança e do Adolescente e Políticas Públicas">Direito da Criança e do Adolescente e Políticas Públicas</p>
<p value="Direito Educacional">Direito Educacional</p>
<p value="Diversidade de Linguagem na Educação Integral Infantil e Fundamental">Diversidade de Linguagem na Educação Integral Infantil e Fundamental</p>
<p value="Docência do Ensino Religioso">Docência do Ensino Religioso</p>
<p value="Docência do Ensino Superior e Neuropsicologia">Docência do Ensino Superior e Neuropsicologia</p>
<p value="Docência e Tutoria no Ensino a Distância">Docência e Tutoria no Ensino a Distância</p>
<p value="Docência em Administração">Docência em Administração</p>
<p value="Docência em Administração Pública">Docência em Administração Pública</p>
<p value="Docência em Biblioteconomia">Docência em Biblioteconomia</p>
<p value="Docência em Ciência e Tecnologia da Informação">Docência em Ciência e Tecnologia da Informação</p>
<p value="Docência em Ciências da Saúde">Docência em Ciências da Saúde</p>
<p value="Docência em Ciências do Esporte">Docência em Ciências do Esporte</p>
<p value="Docência em Comunicação com Ênfase em Publicidade e Propaganda">Docência em Comunicação com Ênfase em Publicidade e Propaganda</p>
<p value="Docência em Contabilidade">Docência em Contabilidade</p>
<p value="Docência em Educação Física">Docência em Educação Física</p>
<p value="Docência em Enfermagem">Docência em Enfermagem</p>
<p value="Docência em Gestão Financeira">Docência em Gestão Financeira</p>
<p value="Docência em Serviço Social">Docência em Serviço Social</p>
<p value="Docência na Educação Ambiental">Docência na Educação Ambiental</p>
<p value="Docência na Educação de Jovens e Adultos">Docência na Educação de Jovens e Adultos</p>
<p value="Docência na Educação Infantil">Docência na Educação Infantil</p>
<p value="Docência no Ensino de Artes">Docência no Ensino de Artes</p>
<p value="Docência no Ensino de Ciências Biológicas">Docência no Ensino de Ciências Biológicas</p>
<p value="Docência no Ensino de Dança">Docência no Ensino de Dança</p>
<p value="Docência no Ensino de Dança, Música e Teatro">Docência no Ensino de Dança, Música e Teatro</p>
<p value="Docência no Ensino de Educação Física">Docência no Ensino de Educação Física</p>
<p value="Docência no Ensino de Filosofia">Docência no Ensino de Filosofia</p>
<p value="Docência no Ensino de Geografia">Docência no Ensino de Geografia</p>
<p value="Docência no Ensino de História">Docência no Ensino de História</p>
<p value="Docência no Ensino de Letras - Espanhol">Docência no Ensino de Letras - Espanhol</p>
<p value="Docência no Ensino de Letras - Inglês">Docência no Ensino de Letras - Inglês</p>
<p value="Docência no Ensino de Letras - Português">Docência no Ensino de Letras - Português</p>
<p value="Docência no Ensino de Literatura">Docência no Ensino de Literatura</p>
<p value="Docência no Ensino de Matemática">Docência no Ensino de Matemática</p>
<p value="Docência no Ensino de Química">Docência no Ensino de Química</p>
<p value="Docência no Ensino de Redação">Docência no Ensino de Redação</p>
<p value="Docência no Ensino de Sociologia">Docência no Ensino de Sociologia</p>
<p value="Docência no Ensino de Teatro">Docência no Ensino de Teatro</p>
<p value="Docência no Ensino Fundamental e Médio">Docência no Ensino Fundamental e Médio</p>
<p value="Docência no Ensino Superior">Docência no Ensino Superior</p>
<p value="Educação a Distância">Educação a Distância</p>
<p value="Educação Ambiental">Educação Ambiental</p>
<p value="Educação Corporativa">Educação Corporativa</p>
<p value="Educação de Jovens e Adultos">Educação de Jovens e Adultos</p>
<p value="Educação de Jovens e Adultos em Ensino de História e Geografia">Educação de Jovens e Adultos em Ensino de História e Geografia</p>
<p value="Educação de Jovens e Adultos em Ensino de Matemática">Educação de Jovens e Adultos em Ensino de Matemática</p>
<p value="Educação do Campo">Educação do Campo</p>
<p value="Educação e Psicologia">Educação e Psicologia</p>
<p value="Educação e Saúde Infantil">Educação e Saúde Infantil</p>
<p value="Educação em Tempo Integral">Educação em Tempo Integral</p>
<p value="Educação Empreendedora">Educação Empreendedora</p>
<p value="Educação Especial">Educação Especial</p>
<p value="Educação Especial com Ênfase em Deficiência Auditiva">Educação Especial com Ênfase em Deficiência Auditiva</p>
<p value="Educação Especial com Ênfase em Deficiência Intelectual">Educação Especial com Ênfase em Deficiência Intelectual</p>
<p value="Educação Especial com Ênfase em Transtornos Globais de Desenvolvimento (TGD) e Altas Habilidades">Educação Especial com Ênfase em Transtornos Globais de Desenvolvimento (TGD) e Altas Habilidades</p>
<p value="Educação Especial e Inclusiva com Ênfase em Múltiplas Deficiências">Educação Especial e Inclusiva com Ênfase em Múltiplas Deficiências</p>
<p value="Educação Especial e Inclusiva com Ênfase em Surdez e Libras">Educação Especial e Inclusiva com Ênfase em Surdez e Libras</p>
<p value="Educação Especial e Neuropsicopedagogia">Educação Especial e Neuropsicopedagogia</p>
<p value="Educação Especial e Psicomotricidade">Educação Especial e Psicomotricidade</p>
<p value="Educação Especial Inclusiva">Educação Especial Inclusiva</p>
<p value="Educação Especial Inclusiva e Transtorno do Espectro Autista (TEA)">Educação Especial Inclusiva e Transtorno do Espectro Autista (TEA)</p>
<p value="Educação Financeira">Educação Financeira</p>
<p value="Educação Física Adaptada">Educação Física Adaptada</p>
<p value="Educação Física com Ênfase em Atletismo">Educação Física com Ênfase em Atletismo</p>
<p value="Educação Física com Ênfase em Basquetebol">Educação Física com Ênfase em Basquetebol</p>
<p value="Educação Física com Ênfase em Esportes Aquáticos">Educação Física com Ênfase em Esportes Aquáticos</p>
<p value="Educação Física com Ênfase em Futebol e Futsal">Educação Física com Ênfase em Futebol e Futsal</p>
<p value="Educação Física com Ênfase em Gerontologia">Educação Física com Ênfase em Gerontologia</p>
<p value="Educação Física com Ênfase em Handebol">Educação Física com Ênfase em Handebol</p>
<p value="Educação Física com Ênfase em Treinamento Desportivo">Educação Física com Ênfase em Treinamento Desportivo</p>
<p value="Educação Física com Ênfase em Voleibol">Educação Física com Ênfase em Voleibol</p>
<p value="Educação Física Escolar">Educação Física Escolar</p>
<p value="Educação Física: Motricidade e Saúde">Educação Física: Motricidade e Saúde</p>
<p value="Educação Hospitalar">Educação Hospitalar</p>
<p value="Educação Inclusiva">Educação Inclusiva</p>
<p value="Educação Inclusiva e Projetos Sociais">Educação Inclusiva e Projetos Sociais</p>
<p value="Educação Inclusiva e Saúde Infantil">Educação Inclusiva e Saúde Infantil</p>
<p value="Educação Infantil e Anos Iniciais">Educação Infantil e Anos Iniciais</p>
<p value="Educação Infantil e Séries Iniciais">Educação Infantil e Séries Iniciais</p>
<p value="Educação Infantil, Anos Iniciais e Educação Inclusiva">Educação Infantil, Anos Iniciais e Educação Inclusiva</p>
<p value="Educação Infantil, Anos Iniciais e Gestão Escolar">Educação Infantil, Anos Iniciais e Gestão Escolar</p>
<p value="Educação Infantil, Anos Iniciais e Neuropsicopedagogia">Educação Infantil, Anos Iniciais e Neuropsicopedagogia</p>
<p value="Educação Infantil, Anos Iniciais e Psicopedagogia">Educação Infantil, Anos Iniciais e Psicopedagogia</p>
<p value="Educação Infantil, Neurociência e Aprendizagem">Educação Infantil, Neurociência e Aprendizagem</p>
<p value="Educação Infantil: Arte e Música">Educação Infantil: Arte e Música</p>
<p value="Educação Infantil: Corpo e Arte">Educação Infantil: Corpo e Arte</p>
<p value="Educação Infantil: Jogos Brinquedos e Recreação">Educação Infantil: Jogos Brinquedos e Recreação</p>
<p value="Educação Infantil: Ludicidade e Psicomotricidade">Educação Infantil: Ludicidade e Psicomotricidade</p>
<p value="Educação Política e Sociedade">Educação Política e Sociedade</p>
<p value="Educação Profissional e Tecnológica">Educação Profissional e Tecnológica</p>
<p value="Ensino da Filosofia">Ensino da Filosofia</p>
<p value="Ensino da Geografia">Ensino da Geografia</p>
<p value="Ensino da História">Ensino da História</p>
<p value="Ensino da Língua Inglesa">Ensino da Língua Inglesa</p>
<p value="Ensino da Língua Portuguesa">Ensino da Língua Portuguesa</p>
<p value="Ensino da Língua Portuguesa e Inglesa">Ensino da Língua Portuguesa e Inglesa</p>
<p value="Ensino da Matemática">Ensino da Matemática</p>
<p value="Ensino da Matemática e da Física">Ensino da Matemática e da Física</p>
<p value="Ensino da Religião">Ensino da Religião</p>
<p value="Ensino da Sociologia">Ensino da Sociologia</p>
<p value="Ensino de Arte">Ensino de Arte</p>
<p value="Ensino de Arte e História">Ensino de Arte e História</p>
<p value="Ensino de Arte e História">Ensino de Arte e História</p>
<p value="Ensino de Arte e Movimento">Ensino de Arte e Movimento</p>
<p value="Ensino de Arte e Música">Ensino de Arte e Música</p>
<p value="Ensino de Arte, História e Música">Ensino de Arte, História e Música</p>
<p value="Ensino de Ciências Naturais">Ensino de Ciências Naturais</p>
<p value="Ensino de Ciências Sociais">Ensino de Ciências Sociais</p>
<p value="Ensino de Filosofia e Ciências Sociais">Ensino de Filosofia e Ciências Sociais</p>
<p value="Ensino de História e Geografia">Ensino de História e Geografia</p>
<p value="Ensino de Sociologia e Filosofia">Ensino de Sociologia e Filosofia</p>
<p value="Ensino e Interpretação em Língua Brasileira de Sinais (Libras)">Ensino e Interpretação em Língua Brasileira de Sinais (Libras)</p>
<p value="Ensino Lúdico">Ensino Lúdico</p>
<p value="Ensino Religioso">Ensino Religioso</p>
<p value="Era Digital e Impactos na Saúde, Educação e Comportamento Social">Era Digital e Impactos na Saúde, Educação e Comportamento Social</p>
<p value="Esportes Aquáticos">Esportes Aquáticos</p>
<p value="Estudo da Língua Latina">Estudo da Língua Latina</p>
<p value="Estudo da Língua Portuguesa">Estudo da Língua Portuguesa</p>
<p value="Estudo da Linguística">Estudo da Linguística</p>
<p value="Estudo da Produção de Texto">Estudo da Produção de Texto</p>
<p value="Exercício Físico nos Distúrbios da Coluna Vertebral">Exercício Físico nos Distúrbios da Coluna Vertebral</p>
<p value="Filosofia Contemporânea">Filosofia Contemporânea</p>
<p value="Filosofia e Direitos Humanos">Filosofia e Direitos Humanos</p>
<p value="Filosofia e Teoria Social">Filosofia e Teoria Social</p>
<p value="Formação de Docentes">Formação de Docentes</p>
<p value="Formação de Tutores">Formação de Tutores</p>
<p value="Fundamentos e Práticas Educativas na Educação Infantil">Fundamentos e Práticas Educativas na Educação Infantil</p>
<p value="Futebol e Futsal">Futebol e Futsal</p>
<p value="Gestão das Políticas Públicas Educacionais">Gestão das Políticas Públicas Educacionais</p>
<p value="Gestão de Bibliotecas Públicas">Gestão de Bibliotecas Públicas</p>
<p value="Gestão de Museus com Ênfase em Cultura">Gestão de Museus com Ênfase em Cultura</p>
<p value="Gestão de Sistemas Educacionais">Gestão de Sistemas Educacionais</p>
<p value="Gestão do Ensino Superior Público e Privado">Gestão do Ensino Superior Público e Privado</p>
<p value="Gestão e Administração Escolar">Gestão e Administração Escolar</p>
<p value="Gestão e Docência no Ensino Superior">Gestão e Docência no Ensino Superior</p>
<p value="Gestão Eclesiástica">Gestão Eclesiástica</p>
<p value="Gestão Educacional: Direção, Coordenação e Supervisão">Gestão Educacional: Direção, Coordenação e Supervisão</p>
<p value="Gestão Escolar">Gestão Escolar</p>
<p value="Gestão Escolar Empreendedora">Gestão Escolar Empreendedora</p>
<p value="Gestão Escolar Integrada com Ênfase em Administração, Coordenação, Inspeção, Supervisão e Orientação Educacional">Gestão Escolar Integrada com Ênfase em Administração, Coordenação, Inspeção, Supervisão e Orientação Educacional</p>
<p value="Gestão Escolar: Orientação e Supervisão">Gestão Escolar: Orientação e Supervisão</p>
<p value="Gestão, Orientação e Supervisão Escolar">Gestão, Orientação e Supervisão Escolar</p>
<p value="Handebol">Handebol</p>
<p value="História e Cultura Afro-brasileira">História e Cultura Afro-brasileira</p>
<p value="Inspeção Escolar">Inspeção Escolar</p>
<p value="Intervenção ABA Aplicada a Educação">Intervenção ABA Aplicada a Educação</p>
<p value="Intervenção ABA Aplicada ao Transtorno do Espectro Autista">Intervenção ABA Aplicada ao Transtorno do Espectro Autista</p>
<p value="Legislação Educacional">Legislação Educacional</p>
<p value="Leitura e Produção de Texto">Leitura e Produção de Texto</p>
<p value="Letras: Português e Literatura">Letras: Português e Literatura</p>
<p value="Libras - Língua Brasileira de Sinais">Libras - Língua Brasileira de Sinais</p>
<p value="Libras (Língua Brasileira de Sinais) - Tradução e Interpretação">Libras (Língua Brasileira de Sinais) - Tradução e Interpretação</p>
<p value="Língua Espanhola">Língua Espanhola</p>
<p value="Língua Portuguesa - Redação e Oratória">Língua Portuguesa - Redação e Oratória</p>
<p value="Linguística e Formação de Leitores">Linguística e Formação de Leitores</p>
<p value="Literatura Africana, Indígena e Latina">Literatura Africana, Indígena e Latina</p>
<p value="Literatura Brasileira">Literatura Brasileira</p>
<p value="Literatura Infantil">Literatura Infantil</p>
<p value="Literatura Inglesa">Literatura Inglesa</p>
<p value="Lúdico e Psicomotricidade na Educação Infantil">Lúdico e Psicomotricidade na Educação Infantil</p>
<p value="Matemática Financeira e Estatística">Matemática Financeira e Estatística</p>
<p value="MBA em Gestão de Academias Fitness e Wellness">MBA em Gestão de Academias Fitness e Wellness</p>
<p value="MBA em Gestão de Centros de Educação Infantil">MBA em Gestão de Centros de Educação Infantil</p>
<p value="MBA em Gestão de Centros de Educação Superior">MBA em Gestão de Centros de Educação Superior</p>
<p value="MBA em Gestão de Escolas Públicas">MBA em Gestão de Escolas Públicas</p>
<p value="MBA em Gestão Eclesiástica">MBA em Gestão Eclesiástica</p>
<p value="MBA em Marketing Esportivo">MBA em Marketing Esportivo</p>
<p value="Metodologia da Interdisciplinaridade">Metodologia da Interdisciplinaridade</p>
<p value="Metodologia da Língua Inglesa e Espanhola">Metodologia da Língua Inglesa e Espanhola</p>
<p value="Metodologia da Língua Portuguesa e Espanhola">Metodologia da Língua Portuguesa e Espanhola</p>
<p value="Metodologia do Ensino da Matemática e da Física">Metodologia do Ensino da Matemática e da Física</p>
<p value="Metodologia do Ensino de Artes">Metodologia do Ensino de Artes</p>
<p value="Metodologia do Ensino de Filosofia e Sociologia">Metodologia do Ensino de Filosofia e Sociologia</p>
<p value="Metodologia do Ensino de História">Metodologia do Ensino de História</p>
<p value="Metodologia do Ensino de História e Geografia">Metodologia do Ensino de História e Geografia</p>
<p value="Metodologia do Ensino de Língua Espanhola">Metodologia do Ensino de Língua Espanhola</p>
<p value="Metodologia do Ensino de Língua Inglesa">Metodologia do Ensino de Língua Inglesa</p>
<p value="Metodologia do Ensino de Língua Portuguesa">Metodologia do Ensino de Língua Portuguesa</p>
<p value="Metodologia do Ensino de Matemática">Metodologia do Ensino de Matemática</p>
<p value="Metodologia do Ensino de Música">Metodologia do Ensino de Música</p>
<p value="Metodologia do Ensino de Piano">Metodologia do Ensino de Piano</p>
<p value="Metodologia do Ensino de Química">Metodologia do Ensino de Química</p>
<p value="Metodologias Ativas e Prática Docente">Metodologias Ativas e Prática Docente</p>
<p value="Metodologias do AEE e da Educação Especial Inclusiva">Metodologias do AEE e da Educação Especial Inclusiva</p>
<p value="Motricidade e Desenvolvimento Motor na Educação Infantil">Motricidade e Desenvolvimento Motor na Educação Infantil</p>
<p value="Motricidade e Desenvolvimento Motor na Infância">Motricidade e Desenvolvimento Motor na Infância</p>
<p value="Neuropedagogia na Educação Básica">Neuropedagogia na Educação Básica</p>
<p value="Neuropsicologia">Neuropsicologia</p>
<p value="Neuropsicologia Clínica e Orientação Escolar">Neuropsicologia Clínica e Orientação Escolar</p>
<p value="Neuropsicologia e Problemas de Aprendizagem">Neuropsicologia e Problemas de Aprendizagem</p>
<p value="Neuropsicopedagogia Clínica">Neuropsicopedagogia Clínica</p>
<p value="Neuropsicopedagogia com Ênfase em Educação Especial e Inclusiva">Neuropsicopedagogia com Ênfase em Educação Especial e Inclusiva</p>
<p value="Neuropsicopedagogia e Desenvolvimento Humano">Neuropsicopedagogia e Desenvolvimento Humano</p>
<p value="Neuropsicopedagogia e Educação Infantil">Neuropsicopedagogia e Educação Infantil</p>
<p value="Neuropsicopedagogia e Psicanálise Clínica">Neuropsicopedagogia e Psicanálise Clínica</p>
<p value="Neuropsicopedagogia Educação Especial Inclusiva">Neuropsicopedagogia Educação Especial Inclusiva</p>
<p value="Neuropsicopedagogia Institucional Inclusiva, Orientação e Supervisão Escolar">Neuropsicopedagogia Institucional Inclusiva, Orientação e Supervisão Escolar</p>
<p value="Nutrição e Atividade Física na Saúde e Tratamento de Doenças">Nutrição e Atividade Física na Saúde e Tratamento de Doenças</p>
<p value="Oralidade e Escrita">Oralidade e Escrita</p>
<p value="Orientação Educacional">Orientação Educacional</p>
<p value="Orientação, Supervisão e Inspeção Escolar">Orientação, Supervisão e Inspeção Escolar</p>
<p value="Pedagogia da Infância">Pedagogia da Infância</p>
<p value="Pedagogia do Esporte">Pedagogia do Esporte</p>
<p value="Pedagogia Empresarial">Pedagogia Empresarial</p>
<p value="Pedagogia Empresarial com Ênfase em Gestão de Pessoas">Pedagogia Empresarial com Ênfase em Gestão de Pessoas</p>
<p value="Pedagogia Empresarial e Educação Corporativa">Pedagogia Empresarial e Educação Corporativa</p>
<p value="Pedagogia Gestora - Administração / Supervisão / Orientação">Pedagogia Gestora - Administração / Supervisão / Orientação</p>
<p value="Pedagogia Hospitalar">Pedagogia Hospitalar</p>
<p value="Pedagogia na Recreação">Pedagogia na Recreação</p>
<p value="Pedagogia Social e Elaboração de Projetos">Pedagogia Social e Elaboração de Projetos</p>
<p value="Pilates: Uma Abordagem Multidisciplinar">Pilates: Uma Abordagem Multidisciplinar</p>
<p value="Preparação Física de Alto Desempenho">Preparação Física de Alto Desempenho</p>
<p value="Prescrição da Atividade Física em Situações Especiais de Saúde e Lesões">Prescrição da Atividade Física em Situações Especiais de Saúde e Lesões</p>
<p value="Psicologia e Transtornos do Espectro Autista">Psicologia e Transtornos do Espectro Autista</p>
<p value="Psicomotricidade">Psicomotricidade</p>
<p value="Psicomotricidade com Ênfase em Educação Inclusiva">Psicomotricidade com Ênfase em Educação Inclusiva</p>
<p value="Psicomotricidade com Ênfase em Educação Infantil">Psicomotricidade com Ênfase em Educação Infantil</p>
<p value="Psicomotricidade com Ênfase em Gestão Escolar">Psicomotricidade com Ênfase em Gestão Escolar</p>
<p value="Psicomotricidade com Ênfase em Ludicidade">Psicomotricidade com Ênfase em Ludicidade</p>
<p value="Psicomotricidade e Educação Inclusiva">Psicomotricidade e Educação Inclusiva</p>
<p value="Psicomotricidade e Educação Infantil">Psicomotricidade e Educação Infantil</p>
<p value="Psicomotricidade e Gestão Escolar">Psicomotricidade e Gestão Escolar</p>
<p value="Psicomotricidade e Ludicidade">Psicomotricidade e Ludicidade</p>
<p value="Psicomotricidade, Orientação e Supervisão Escolar">Psicomotricidade, Orientação e Supervisão Escolar</p>
<p value="Psicopedagogia">Psicopedagogia</p>
<p value="Psicopedagogia - Aspectos Teóricos">Psicopedagogia - Aspectos Teóricos</p>
<p value="Psicopedagogia com Ênfase em Educação Inclusiva">Psicopedagogia com Ênfase em Educação Inclusiva</p>
<p value="Psicopedagogia e Educação Especial">Psicopedagogia e Educação Especial</p>
<p value="Psicopedagogia e Educação Inclusiva">Psicopedagogia e Educação Inclusiva</p>
<p value="Psicopedagogia e Educação Infantil">Psicopedagogia e Educação Infantil</p>
<p value="Psicopedagogia e Gestão Escolar">Psicopedagogia e Gestão Escolar</p>
<p value="Psicopedagogia Educacional">Psicopedagogia Educacional</p>
<p value="Psicopedagogia Institucional">Psicopedagogia Institucional</p>
<p value="Psicopedagogia Institucional e Clínica - 600 Horas">Psicopedagogia Institucional e Clínica - 600 Horas</p>
<p value="Psicopedagogia Institucional, Clínica e Hospitalar">Psicopedagogia Institucional, Clínica e Hospitalar</p>
<p value="Química Ambiental">Química Ambiental</p>
<p value="Retórica e Oratória em Língua Portuguesa">Retórica e Oratória em Língua Portuguesa</p>
<p value="Revisão de Texto">Revisão de Texto</p>
<p value="Secretariado Escolar">Secretariado Escolar</p>
<p value="Serviço Social na Educação">Serviço Social na Educação</p>
<p value="Sociologia da Educação e Cultura">Sociologia da Educação e Cultura</p>
<p value="Sociologia Econômica Política e Urbana">Sociologia Econômica Política e Urbana</p>
<p value="Supervisão e Orientação Educacional">Supervisão e Orientação Educacional</p>
<p value="Supervisão Escolar">Supervisão Escolar</p>
<p value="Tecnologias Aplicadas à Educação Presencial">Tecnologias Aplicadas à Educação Presencial</p>
<p value="Tecnologias e Educação a Distância">Tecnologias e Educação a Distância</p>
<p value="Teoria da Literatura e Produção de Texto">Teoria da Literatura e Produção de Texto</p>
<p value="Trabalho e Ergonomia">Trabalho e Ergonomia</p>
<p value="Transtorno Borderline e Terapia Cognitivo-Comportamental">Transtorno Borderline e Terapia Cognitivo-Comportamental</p>
<p value="Transtornos Globais do Desenvolvimento (TGD)">Transtornos Globais do Desenvolvimento (TGD)</p>
<p value="Treinamento Desportivo">Treinamento Desportivo</p>
<p value="Treinamento Especializado e Funcional para Corrida">Treinamento Especializado e Funcional para Corrida</p>
<p value="Treinamento Físico para a Terceira Idade">Treinamento Físico para a Terceira Idade</p>
<p value="Treinamento Funcional para a Saúde e Condicionamento">Treinamento Funcional para a Saúde e Condicionamento</p>
<p value="Voleibol">Voleibol</p>

                    </div>
                    </>
                    : courses === "Empresarial" ?
                    <>
                     <h4>67 OPÇÕES ENCONTRADAS</h4>
                    <div className="listSelected">

<p value="Administração de Casas Legislativas">Administração de Casas Legislativas</p>
<p value="Administração de Recursos Humanos no Setor Público">Administração de Recursos Humanos no Setor Público</p>
<p value="Administração e Contabilidade Escolar">Administração e Contabilidade Escolar</p>
<p value="Administração e Finanças Educacionais">Administração e Finanças Educacionais</p>
<p value="Administração e Marketing Desportivo">Administração e Marketing Desportivo</p>
<p value="Administração Escolar: Orientação e Supervisão">Administração Escolar: Orientação e Supervisão</p>
<p value="Administração Patrimonial em Organizações Públicas">Administração Patrimonial em Organizações Públicas</p>
<p value="Auditoria em Organizações do Setor Público">Auditoria em Organizações do Setor Público</p>
<p value="Coaching">Coaching</p>
<p value="Contabilidade Consultiva">Contabilidade Consultiva</p>
<p value="Contabilidade Governamental">Contabilidade Governamental</p>
<p value="Contabilidade Previdenciária">Contabilidade Previdenciária</p>
<p value="Contabilidade, Direito e Economia com Ênfase na Gestão Pública">Contabilidade, Direito e Economia com Ênfase na Gestão Pública</p>
<p value="Custos no Setor Público">Custos no Setor Público</p>
<p value="Docência em Administração">Docência em Administração</p>
<p value="Docência em Administração Pública">Docência em Administração Pública</p>
<p value="Docência em Contabilidade">Docência em Contabilidade</p>
<p value="Economia do Setor Público">Economia do Setor Público</p>
<p value="Gestão de Estoques e Logística em E-Commerce">Gestão de Estoques e Logística em E-Commerce</p>
<p value="Gestão e Planejamento Estratégico com Ênfase em Gestão Empresarial">Gestão e Planejamento Estratégico com Ênfase em Gestão Empresarial</p>
<p value="Gestão em Saúde e Administração Hospitalar">Gestão em Saúde e Administração Hospitalar</p>
<p value="Gestão Empresarial com Ênfase em Responsabilidade Social">Gestão Empresarial com Ênfase em Responsabilidade Social</p>
<p value="Gestão Escolar Integrada com Ênfase em Administração, Coordenação, Inspeção, Supervisão e Orientação Educacional">Gestão Escolar Integrada com Ênfase em Administração, Coordenação, Inspeção, Supervisão e Orientação Educacional</p>
<p value="Gestão Financeira e Orçamentária em Organizações Públicas">Gestão Financeira e Orçamentária em Organizações Públicas</p>
<p value="MBA em Administração de Empresas">MBA em Administração de Empresas</p>
<p value="MBA em Administração de Recursos Humanos">MBA em Administração de Recursos Humanos</p>
<p value="MBA em Administração e Contabilidade Tributária">MBA em Administração e Contabilidade Tributária</p>
<p value="MBA em Administração Financeira e Orçamentária">MBA em Administração Financeira e Orçamentária</p>
<p value="MBA em Administração, Contabilidade e Economia">MBA em Administração, Contabilidade e Economia</p>
<p value="MBA em Administração, Contabilidade e Finanças">MBA em Administração, Contabilidade e Finanças</p>
<p value="MBA em Contabilidade Empresarial e Societária">MBA em Contabilidade Empresarial e Societária</p>
<p value="MBA em Empreendedorismo e Finanças">MBA em Empreendedorismo e Finanças</p>
<p value="MBA em Finanças de Mercado">MBA em Finanças de Mercado</p>
<p value="MBA em Finanças e Banking">MBA em Finanças e Banking</p>
<p value="MBA em Gerenciamento de Recursos Financeiros">MBA em Gerenciamento de Recursos Financeiros</p>
<p value="MBA em Gestão da Cadeia de Suprimentos">MBA em Gestão da Cadeia de Suprimentos</p>
<p value="MBA em Gestão da Produção em Logística">MBA em Gestão da Produção em Logística</p>
<p value="MBA em Gestão da Qualidade e Produtividade Logística">MBA em Gestão da Qualidade e Produtividade Logística</p>
<p value="MBA em Gestão da Tecnologia em Logística">MBA em Gestão da Tecnologia em Logística</p>
<p value="MBA em Gestão de Estratégia Empresarial">MBA em Gestão de Estratégia Empresarial</p>
<p value="MBA em Gestão de Logística">MBA em Gestão de Logística</p>
<p value="MBA em Gestão de Logística e Mercados">MBA em Gestão de Logística e Mercados</p>
<p value="MBA em Gestão de Marcas e Produtos">MBA em Gestão de Marcas e Produtos</p>
<p value="MBA em Gestão de Transportes e Operações Logísticas">MBA em Gestão de Transportes e Operações Logísticas</p>
<p value="MBA em Gestão de Turismo">MBA em Gestão de Turismo</p>
<p value="MBA em Gestão de Turismo e Hospitalidade">MBA em Gestão de Turismo e Hospitalidade</p>
<p value="MBA em Gestão de Varejo Bancário">MBA em Gestão de Varejo Bancário</p>
<p value="MBA em Gestão do Atacado e Varejo">MBA em Gestão do Atacado e Varejo</p>
<p value="MBA em Gestão do Capital Intelectual e Retenção de Talentos">MBA em Gestão do Capital Intelectual e Retenção de Talentos</p>
<p value="MBA em Gestão Empresarial e Logística">MBA em Gestão Empresarial e Logística</p>
<p value="MBA em Gestão Estratégica de Compras">MBA em Gestão Estratégica de Compras</p>
<p value="MBA em Gestão Estratégica de Negócios">MBA em Gestão Estratégica de Negócios</p>
<p value="MBA em Gestão Financeira">MBA em Gestão Financeira</p>
<p value="MBA em Gestão Logística">MBA em Gestão Logística</p>
<p value="MBA em Gestão Tributária">MBA em Gestão Tributária</p>
<p value="MBA em Governança Corporativa">MBA em Governança Corporativa</p>
<p value="MBA em Logística Empresarial">MBA em Logística Empresarial</p>
<p value="MBA em Shipping">MBA em Shipping</p>
<p value="MBA Executivo em Gestão Bancária CPA-20">MBA Executivo em Gestão Bancária CPA-20</p>
<p value="MBA Executivo em Gestão Comercial, Marketing e Vendas">MBA Executivo em Gestão Comercial, Marketing e Vendas</p>
<p value="MBA Executivo em Gestão Empresarial, Logística e Qualidade">MBA Executivo em Gestão Empresarial, Logística e Qualidade</p>
<p value="MBA Executivo em Gestão Industrial, Logística e Qualidade">MBA Executivo em Gestão Industrial, Logística e Qualidade</p>
<p value="Planejamento e Orçamento Público">Planejamento e Orçamento Público</p>
<p value="Planejamento Estratégico">Planejamento Estratégico</p>
<p value="Psicologia Organizacional e do Trabalho">Psicologia Organizacional e do Trabalho</p>
<p value="Secretariado Executivo">Secretariado Executivo</p>
<p value="Secretariado Executivo Bilíngue">Secretariado Executivo Bilíngue</p>

                    </div>
                    </>
                    : courses === "Engenharias" ?
                    <>
                     <h4>30 OPÇÕES ENCONTRADAS</h4>
                    <div className="listSelected">

<p value="Agricultura e Agronegócio">Agricultura e Agronegócio</p>
<p value="Engenharia Agronômica">Engenharia Agronômica</p>
<p value="Engenharia Ambiental">Engenharia Ambiental</p>
<p value="Engenharia Ambiental e Indicadores de Qualidade">Engenharia Ambiental e Indicadores de Qualidade</p>
<p value="Engenharia da Manutenção e Segurança">Engenharia da Manutenção e Segurança</p>
<p value="Engenharia da Qualidade">Engenharia da Qualidade</p>
<p value="Engenharia da Qualidade com Ênfase em Gestão">Engenharia da Qualidade com Ênfase em Gestão</p>
<p value="Engenharia da Qualidade e Responsabilidade Social">Engenharia da Qualidade e Responsabilidade Social</p>
<p value="Engenharia de Automação e Eletrônica Industrial">Engenharia de Automação e Eletrônica Industrial</p>
<p value="Engenharia de Avaliações e Perícias">Engenharia de Avaliações e Perícias</p>
<p value="Engenharia de Desenvolvimento de Projetos Eletrônicos">Engenharia de Desenvolvimento de Projetos Eletrônicos</p>
<p value="Engenharia de Produção">Engenharia de Produção</p>
<p value="Engenharia de Produção com Ênfase em Gestão">Engenharia de Produção com Ênfase em Gestão</p>
<p value="Engenharia de Produção e Gerenciamento de Projetos">Engenharia de Produção e Gerenciamento de Projetos</p>
<p value="Engenharia de Suprimentos">Engenharia de Suprimentos</p>
<p value="Engenharia e Gerenciamento de Manutenção">Engenharia e Gerenciamento de Manutenção</p>
<p value="Engenharia Elétrica">Engenharia Elétrica</p>
<p value="Engenharia Elétrica com Ênfase em Instalações Elétricas Industriais">Engenharia Elétrica com Ênfase em Instalações Elétricas Industriais</p>
<p value="Engenharia Elétrica com Ênfase em Instalações Elétricas Residenciais">Engenharia Elétrica com Ênfase em Instalações Elétricas Residenciais</p>
<p value="Engenharia Elétrica com Ênfase em Sistema de Automação">Engenharia Elétrica com Ênfase em Sistema de Automação</p>
<p value="Engenharia Ferroviária">Engenharia Ferroviária</p>
<p value="Governança e Gestão da Tecnologia da Informação">Governança e Gestão da Tecnologia da Informação</p>
<p value="MBA em Gestão de Obras na Construção Civil">MBA em Gestão de Obras na Construção Civil</p>
<p value="MBA em Orçamento, Planejamento e Controle na Construção Civil">MBA em Orçamento, Planejamento e Controle na Construção Civil</p>
<p value="MBA em Projetos Aplicados à Construção Civil">MBA em Projetos Aplicados à Construção Civil</p>
<p value="MBA Executivo em Engenharia de Produção">MBA Executivo em Engenharia de Produção</p>
<p value="Modernização, Infraestrutura e Gestão Portuária">Modernização, Infraestrutura e Gestão Portuária</p>
<p value="Química Ambiental">Química Ambiental</p>
<p value="Tecnologia de Celulose e Papel">Tecnologia de Celulose e Papel</p>
<p value="Vigilância em Saúde Ambiental e Sanitária">Vigilância em Saúde Ambiental e Sanitária</p>
<p value="Agricultura e Agronegócio">Agricultura e Agronegócio</p>
<p value="Engenharia Agronômica">Engenharia Agronômica</p>
<p value="Engenharia Ambiental">Engenharia Ambiental</p>
<p value="Engenharia Ambiental e Indicadores de Qualidade">Engenharia Ambiental e Indicadores de Qualidade</p>
<p value="Engenharia da Manutenção e Segurança">Engenharia da Manutenção e Segurança</p>
<p value="Engenharia da Qualidade">Engenharia da Qualidade</p>
<p value="Engenharia da Qualidade com Ênfase em Gestão">Engenharia da Qualidade com Ênfase em Gestão</p>
<p value="Engenharia da Qualidade e Responsabilidade Social">Engenharia da Qualidade e Responsabilidade Social</p>
<p value="Engenharia de Automação e Eletrônica Industrial">Engenharia de Automação e Eletrônica Industrial</p>
<p value="Engenharia de Avaliações e Perícias">Engenharia de Avaliações e Perícias</p>
<p value="Engenharia de Desenvolvimento de Projetos Eletrônicos">Engenharia de Desenvolvimento de Projetos Eletrônicos</p>
<p value="Engenharia de Produção">Engenharia de Produção</p>
<p value="Engenharia de Produção com Ênfase em Gestão">Engenharia de Produção com Ênfase em Gestão</p>
<p value="Engenharia de Produção e Gerenciamento de Projetos">Engenharia de Produção e Gerenciamento de Projetos</p>
<p value="Engenharia de Suprimentos">Engenharia de Suprimentos</p>
<p value="Engenharia e Gerenciamento de Manutenção">Engenharia e Gerenciamento de Manutenção</p>
<p value="Engenharia Elétrica">Engenharia Elétrica</p>
<p value="Engenharia Elétrica com Ênfase em Instalações Elétricas Industriais">Engenharia Elétrica com Ênfase em Instalações Elétricas Industriais</p>
<p value="Engenharia Elétrica com Ênfase em Instalações Elétricas Residenciais">Engenharia Elétrica com Ênfase em Instalações Elétricas Residenciais</p>
<p value="Engenharia Elétrica com Ênfase em Sistema de Automação">Engenharia Elétrica com Ênfase em Sistema de Automação</p>
<p value="Engenharia Ferroviária">Engenharia Ferroviária</p>
<p value="Governança e Gestão da Tecnologia da Informação">Governança e Gestão da Tecnologia da Informação</p>
<p value="MBA em Gestão de Obras na Construção Civil">MBA em Gestão de Obras na Construção Civil</p>
<p value="MBA em Orçamento, Planejamento e Controle na Construção Civil">MBA em Orçamento, Planejamento e Controle na Construção Civil</p>
<p value="MBA em Projetos Aplicados à Construção Civil">MBA em Projetos Aplicados à Construção Civil</p>
<p value="MBA Executivo em Engenharia de Produção">MBA Executivo em Engenharia de Produção</p>
<p value="Modernização, Infraestrutura e Gestão Portuária">Modernização, Infraestrutura e Gestão Portuária</p>
<p value="Química Ambiental">Química Ambiental</p>
<p value="Tecnologia de Celulose e Papel">Tecnologia de Celulose e Papel</p>
<p value="Vigilância em Saúde Ambiental e Sanitária">Vigilância em Saúde Ambiental e Sanitária</p>

                    </div>
                    </>
                    : courses === "Gestão Pública" ?
                    <>
                     <h4>137 OPÇÕES ENCONTRADAS</h4>
                    <div className="listSelected">

<p value="Administração Patrimonial em Organizações Públicas">Administração Patrimonial em Organizações Públicas</p>
<p value="Assistência Social e Saúde Pública">Assistência Social e Saúde Pública</p>
<p value="Auditoria em Organizações do Setor Público">Auditoria em Organizações do Setor Público</p>
<p value="Biblioteconomia">Biblioteconomia</p>
<p value="Biossegurança e Saúde Pública">Biossegurança e Saúde Pública</p>
<p value="Business Intelligence">Business Intelligence</p>
<p value="Coaching">Coaching</p>
<p value="Contabilidade, Direito e Economia com Ênfase na Gestão Pública">Contabilidade, Direito e Economia com Ênfase na Gestão Pública</p>
<p value="Docência em Gestão Financeira">Docência em Gestão Financeira</p>
<p value="Docência em Gestão Pública">Docência em Gestão Pública</p>
<p value="Formação de Gestores de Contratos">Formação de Gestores de Contratos</p>
<p value="Gerenciamento em Atenção Básica da Saúde">Gerenciamento em Atenção Básica da Saúde</p>
<p value="Gestão Ambiental">Gestão Ambiental</p>
<p value="Gestão Comercial">Gestão Comercial</p>
<p value="Gestão Contábil">Gestão Contábil</p>
<p value="Gestão da Qualidade de Software">Gestão da Qualidade de Software</p>
<p value="Gestão da Qualidade Hospitalar">Gestão da Qualidade Hospitalar</p>
<p value="Gestão da Saúde e Meio Ambiente">Gestão da Saúde e Meio Ambiente</p>
<p value="Gestão da Tecnologia da Informação">Gestão da Tecnologia da Informação</p>
<p value="Gestão das Políticas Sociais">Gestão das Políticas Sociais</p>
<p value="Gestão de Assistência Domiciliar Home Care">Gestão de Assistência Domiciliar Home Care</p>
<p value="Gestão de Bibliotecas Públicas">Gestão de Bibliotecas Públicas</p>
<p value="Gestão de Estoques e Logística em E-Commerce">Gestão de Estoques e Logística em E-Commerce</p>
<p value="Gestão de Museus com Ênfase em Cultura">Gestão de Museus com Ênfase em Cultura</p>
<p value="Gestão de Organizações do Poder Judiciário e do Ministério Público">Gestão de Organizações do Poder Judiciário e do Ministério Público</p>
<p value="Gestão de Pessoas e Desenvolvimento Gerencial">Gestão de Pessoas e Desenvolvimento Gerencial</p>
<p value="Gestão de Planos de Saúde">Gestão de Planos de Saúde</p>
<p value="Gestão de Projetos Sociais">Gestão de Projetos Sociais</p>
<p value="Gestão de Spas e Salões de Beleza">Gestão de Spas e Salões de Beleza</p>
<p value="Gestão do Conhecimento Médico">Gestão do Conhecimento Médico</p>
<p value="Gestão do Ensino Superior Público e Privado">Gestão do Ensino Superior Público e Privado</p>
<p value="Gestão do Sistema Prisional">Gestão do Sistema Prisional</p>
<p value="Gestão do SUAS - Sistema Único de Assistência Social">Gestão do SUAS - Sistema Único de Assistência Social</p>
<p value="Gestão do SUAS e Serviço Social">Gestão do SUAS e Serviço Social</p>
<p value="Gestão e Docência no Ensino Superior">Gestão e Docência no Ensino Superior</p>
<p value="Gestão e Legislação do Trânsito">Gestão e Legislação do Trânsito</p>
<p value="Gestão e Planejamento Estratégico com Ênfase em Gestão Empresarial">Gestão e Planejamento Estratégico com Ênfase em Gestão Empresarial</p>
<p value="Gestão e Tecnologia na Produção de Sementes">Gestão e Tecnologia na Produção de Sementes</p>
<p value="Gestão em Biossegurança">Gestão em Biossegurança</p>
<p value="Gestão em Saúde e Administração Hospitalar">Gestão em Saúde e Administração Hospitalar</p>
<p value="Gestão em Secretariado Hospitalar">Gestão em Secretariado Hospitalar</p>
<p value="Gestão em Segurança Pública">Gestão em Segurança Pública</p>
<p value="Gestão Empresarial com Ênfase em Responsabilidade Social">Gestão Empresarial com Ênfase em Responsabilidade Social</p>
<p value="Gestão Escolar Integrada com Ênfase em Administração, Coordenação, Inspeção, Supervisão e Orientação Educacional">Gestão Escolar Integrada com Ênfase em Administração, Coordenação, Inspeção, Supervisão e Orientação Educacional</p>
<p value="Gestão Financeira e Orçamentária em Organizações Públicas">Gestão Financeira e Orçamentária em Organizações Públicas</p>
<p value="Gestão Integrada e Social, NTEP e FAP">Gestão Integrada e Social, NTEP e FAP</p>
<p value="Gestão Previdenciária e Regimes Próprios de Previdência">Gestão Previdenciária e Regimes Próprios de Previdência</p>
<p value="Gestão, Auditoria e Perícia Ambiental">Gestão, Auditoria e Perícia Ambiental</p>
<p value="Legislação de Trânsito">Legislação de Trânsito</p>
<p value="LLM em Direito Empresarial">LLM em Direito Empresarial</p>
<p value="MBA em Contabilidade e Finanças Empresariais">MBA em Contabilidade e Finanças Empresariais</p>
<p value="MBA em Contabilidade Gerencial e Internacional">MBA em Contabilidade Gerencial e Internacional</p>
<p value="MBA em Contabilidade Pública e do Terceiro Setor">MBA em Contabilidade Pública e do Terceiro Setor</p>
<p value="MBA em Contabilidade Tributária e Financeira">MBA em Contabilidade Tributária e Financeira</p>
<p value="MBA em Empreendedorismo e Finanças">MBA em Empreendedorismo e Finanças</p>
<p value="MBA em Empreendedorismo e Marketing">MBA em Empreendedorismo e Marketing</p>
<p value="MBA em Empreendedorismo, Marketing e Finanças">MBA em Empreendedorismo, Marketing e Finanças</p>
<p value="MBA em Finanças e Banking">MBA em Finanças e Banking</p>
<p value="MBA em Gerenciamento de Recursos Financeiros">MBA em Gerenciamento de Recursos Financeiros</p>
<p value="MBA em Gestão Comercial de Produtos e Serviços de Instituições Financeiras">MBA em Gestão Comercial de Produtos e Serviços de Instituições Financeiras</p>
<p value="MBA em Gestão da Cadeia de Suprimentos">MBA em Gestão da Cadeia de Suprimentos</p>
<p value="MBA em Gestão da Produção em Logística">MBA em Gestão da Produção em Logística</p>
<p value="MBA em Gestão da Qualidade e Produtividade Logística">MBA em Gestão da Qualidade e Produtividade Logística</p>
<p value="MBA em Gestão de Academias Fitness e Wellness">MBA em Gestão de Academias Fitness e Wellness</p>
<p value="MBA em Gestão de Centros de Educação Infantil">MBA em Gestão de Centros de Educação Infantil</p>
<p value="MBA em Gestão de Contabilidade e Finanças Empresariais">MBA em Gestão de Contabilidade e Finanças Empresariais</p>
<p value="MBA em Gestão de Escolas Públicas">MBA em Gestão de Escolas Públicas</p>
<p value="MBA em Gestão de Estratégia Empresarial">MBA em Gestão de Estratégia Empresarial</p>
<p value="MBA em Gestão de Eventos">MBA em Gestão de Eventos</p>
<p value="MBA em Gestão de Logística e Mercados">MBA em Gestão de Logística e Mercados</p>
<p value="MBA em Gestão de Negócios Imobiliários">MBA em Gestão de Negócios Imobiliários</p>
<p value="MBA em Gestão de Pessoas">MBA em Gestão de Pessoas</p>
<p value="MBA em Gestão de Pessoas e Liderança">MBA em Gestão de Pessoas e Liderança</p>
<p value="MBA em Gestão de Recursos Humanos">MBA em Gestão de Recursos Humanos</p>
<p value="MBA em Gestão de Transportes e Operações Logísticas">MBA em Gestão de Transportes e Operações Logísticas</p>
<p value="MBA em Gestão de Turismo">MBA em Gestão de Turismo</p>
<p value="MBA em Gestão de Varejo Bancário">MBA em Gestão de Varejo Bancário</p>
<p value="MBA em Gestão do Atacado e Varejo">MBA em Gestão do Atacado e Varejo</p>
<p value="MBA em Gestão do Capital Intelectual e Retenção de Talentos">MBA em Gestão do Capital Intelectual e Retenção de Talentos</p>
<p value="MBA em Gestão do Esporte">MBA em Gestão do Esporte</p>
<p value="MBA em Gestão e Retenção de Talentos">MBA em Gestão e Retenção de Talentos</p>
<p value="MBA em Gestão em Vendas">MBA em Gestão em Vendas</p>
<p value="MBA em Gestão Empresarial">MBA em Gestão Empresarial</p>
<p value="MBA em Gestão Empresarial e Logística">MBA em Gestão Empresarial e Logística</p>
<p value="MBA em Gestão Estratégica de Pessoas">MBA em Gestão Estratégica de Pessoas</p>
<p value="MBA em Gestão Estratégica de Projetos">MBA em Gestão Estratégica de Projetos</p>
<p value="MBA em Gestão Farmacêutica">MBA em Gestão Farmacêutica</p>
<p value="MBA em Gestão Financeira">MBA em Gestão Financeira</p>
<p value="MBA em Gestão Logística">MBA em Gestão Logística</p>
<p value="MBA em Gestão Municipal">MBA em Gestão Municipal</p>
<p value="MBA em Gestão Pública">MBA em Gestão Pública</p>
<p value="MBA em Gestão Tributária">MBA em Gestão Tributária</p>
<p value="MBA em Logística e Modais de Transporte">MBA em Logística e Modais de Transporte</p>
<p value="MBA em Logística Empresarial">MBA em Logística Empresarial</p>
<p value="MBA em Regulação">MBA em Regulação</p>
<p value="MBA Executivo em Desenvolvimento Profissional">MBA Executivo em Desenvolvimento Profissional</p>
<p value="MBA Executivo em Gestão Aeroportuária">MBA Executivo em Gestão Aeroportuária</p>
<p value="MBA Executivo em Gestão Ambiental e Sustentabilidade Empresarial">MBA Executivo em Gestão Ambiental e Sustentabilidade Empresarial</p>
<p value="MBA Executivo em Gestão Bancária CPA">MBA Executivo em Gestão Bancária CPA</p>
<p value="MBA Executivo em Gestão Bancária CPA-20">MBA Executivo em Gestão Bancária CPA-20</p>
<p value="MBA Executivo em Gestão Bancária Financeira e Controladoria">MBA Executivo em Gestão Bancária Financeira e Controladoria</p>
<p value="MBA Executivo em Gestão Comercial - Marketing e Vendas">MBA Executivo em Gestão Comercial - Marketing e Vendas</p>
<p value="MBA Executivo em Gestão Comercial, Varejo e Serviços">MBA Executivo em Gestão Comercial, Varejo e Serviços</p>
<p value="MBA Executivo em Gestão da Psicologia Organizacional">MBA Executivo em Gestão da Psicologia Organizacional</p>
<p value="MBA Executivo em Gestão de Clínicas e Consultórios">MBA Executivo em Gestão de Clínicas e Consultórios</p>
<p value="MBA Executivo em Gestão de Clínicas e Consultórios Veterinários">MBA Executivo em Gestão de Clínicas e Consultórios Veterinários</p>
<p value="MBA Executivo em Gestão de Cooperativas">MBA Executivo em Gestão de Cooperativas</p>
<p value="MBA Executivo em Gestão de Investimentos">MBA Executivo em Gestão de Investimentos</p>
<p value="MBA Executivo em Gestão de Metrôs e Transporte Ferroviário">MBA Executivo em Gestão de Metrôs e Transporte Ferroviário</p>
<p value="MBA Executivo em Gestão de Negócios em Alimentação">MBA Executivo em Gestão de Negócios em Alimentação</p>
<p value="MBA Executivo em Gestão de Negócios em Gastronomia">MBA Executivo em Gestão de Negócios em Gastronomia</p>
<p value="MBA Executivo em Gestão de Negócios Internacionais">MBA Executivo em Gestão de Negócios Internacionais</p>
<p value="MBA Executivo em Gestão de Pessoas">MBA Executivo em Gestão de Pessoas</p>
<p value="MBA Executivo em Gestão de Pessoas, Desenvolvimento Gerencial e Coaching">MBA Executivo em Gestão de Pessoas, Desenvolvimento Gerencial e Coaching</p>
<p value="MBA Executivo em Gestão de Processos">MBA Executivo em Gestão de Processos</p>
<p value="MBA Executivo em Gestão de Projetos">MBA Executivo em Gestão de Projetos</p>
<p value="MBA Executivo em Gestão de Restaurantes">MBA Executivo em Gestão de Restaurantes</p>
<p value="MBA Executivo em Gestão do Esporte">MBA Executivo em Gestão do Esporte</p>
<p value="MBA Executivo em Gestão Empresarial">MBA Executivo em Gestão Empresarial</p>
<p value="MBA Executivo em Gestão Empresarial, Logística e Qualidade">MBA Executivo em Gestão Empresarial, Logística e Qualidade</p>
<p value="MBA Executivo em Gestão Estratégica de Comércio Exterior">MBA Executivo em Gestão Estratégica de Comércio Exterior</p>
<p value="MBA Executivo em Gestão Estratégica de Inovação Tecnológica e Propriedade Intelectual - MP">MBA Executivo em Gestão Estratégica de Inovação Tecnológica e Propriedade Intelectual - MP</p>
<p value="MBA Executivo em Gestão Financeira, Controladoria e Auditoria">MBA Executivo em Gestão Financeira, Controladoria e Auditoria</p>
<p value="MBA Executivo em Gestão Hospitalar">MBA Executivo em Gestão Hospitalar</p>
<p value="Métodos e Gestão na Conservação de Alimentos">Métodos e Gestão na Conservação de Alimentos</p>
<p value="Modernização, Infraestrutura e Gestão Portuária">Modernização, Infraestrutura e Gestão Portuária</p>
<p value="Planejamento e Gestão do Trânsito">Planejamento e Gestão do Trânsito</p>
<p value="Planejamento e Orçamento Público">Planejamento e Orçamento Público</p>
<p value="Política Social e Gestão de Serviços Sociais">Política Social e Gestão de Serviços Sociais</p>
<p value="Pregão Eletrônico">Pregão Eletrônico</p>
<p value="Processo Administrativo Disciplinar e Sindicância">Processo Administrativo Disciplinar e Sindicância</p>
<p value="Psicologia de Grupo e Desenvolvimento de Equipes">Psicologia de Grupo e Desenvolvimento de Equipes</p>
<p value="Segurança Pública">Segurança Pública</p>
<p value="Segurança Pública e Cidadania">Segurança Pública e Cidadania</p>
<p value="Segurança Pública e Inteligência">Segurança Pública e Inteligência</p>
<p value="Serviço Social - Gestão das Políticas e Projetos Sociais">Serviço Social - Gestão das Políticas e Projetos Sociais</p>
<p value="Vigilância em Saúde Ambiental e Sanitária">Vigilância em Saúde Ambiental e Sanitária</p>


                    </div>
                    </>
                    : courses === "MBA Executivo" ?
                    <>
                     <h4>101 OPÇÕES ENCONTRADAS</h4>
                    <div className="listSelected">

<p value="Coaching">Coaching</p>
<p value="Gestão Financeira e Orçamentária em Organizações Públicas">Gestão Financeira e Orçamentária em Organizações Públicas</p>
<p value="MBA em Administração de Empresas">MBA em Administração de Empresas</p>
<p value="MBA em Administração de Recursos Humanos">MBA em Administração de Recursos Humanos</p>
<p value="MBA em Administração e Contabilidade Tributária">MBA em Administração e Contabilidade Tributária</p>
<p value="MBA em Administração Financeira e Orçamentária">MBA em Administração Financeira e Orçamentária</p>
<p value="MBA em Administração, Contabilidade e Economia">MBA em Administração, Contabilidade e Economia</p>
<p value="MBA em Auditoria e Finanças">MBA em Auditoria e Finanças</p>
<p value="MBA em Auditoria e Perícia Contábil">MBA em Auditoria e Perícia Contábil</p>
<p value="MBA em Big Data">MBA em Big Data</p>
<p value="MBA em Comportamento do Consumidor">MBA em Comportamento do Consumidor</p>
<p value="MBA em Contabilidade Empresarial e Societária">MBA em Contabilidade Empresarial e Societária</p>
<p value="MBA em Contabilidade Gerencial e Internacional">MBA em Contabilidade Gerencial e Internacional</p>
<p value="MBA em Contabilidade Pública e do Terceiro Setor">MBA em Contabilidade Pública e do Terceiro Setor</p>
<p value="MBA em Contabilidade Tributária e Financeira">MBA em Contabilidade Tributária e Financeira</p>
<p value="MBA em Data Warehouse e Business Intelligence">MBA em Data Warehouse e Business Intelligence</p>
<p value="MBA em Empreendedorismo e Finanças">MBA em Empreendedorismo e Finanças</p>
<p value="MBA em Empreendedorismo e Marketing">MBA em Empreendedorismo e Marketing</p>
<p value="MBA em Empreendedorismo, Marketing e Finanças">MBA em Empreendedorismo, Marketing e Finanças</p>
<p value="MBA em Finanças Corporativas">MBA em Finanças Corporativas</p>
<p value="MBA em Finanças de Mercado">MBA em Finanças de Mercado</p>
<p value="MBA em Finanças e Banking">MBA em Finanças e Banking</p>
<p value="MBA em Gerenciamento de Recursos Financeiros">MBA em Gerenciamento de Recursos Financeiros</p>
<p value="MBA em Gestão Comercial de Produtos e Serviços de Instituições Financeiras">MBA em Gestão Comercial de Produtos e Serviços de Instituições Financeiras</p>
<p value="MBA em Gestão Contábil">MBA em Gestão Contábil</p>
<p value="MBA em Gestão da Cadeia de Suprimentos">MBA em Gestão da Cadeia de Suprimentos</p>
<p value="MBA em Gestão da Informação">MBA em Gestão da Informação</p>
<p value="MBA em Gestão da Produção em Logística">MBA em Gestão da Produção em Logística</p>
<p value="MBA em Gestão da Qualidade e Produtividade Logística">MBA em Gestão da Qualidade e Produtividade Logística</p>
<p value="MBA em Gestão de Academias Fitness e Wellness">MBA em Gestão de Academias Fitness e Wellness</p>
<p value="MBA em Gestão de Centros de Educação Infantil">MBA em Gestão de Centros de Educação Infantil</p>
<p value="MBA em Gestão de Contabilidade e Finanças Empresariais">MBA em Gestão de Contabilidade e Finanças Empresariais</p>
<p value="MBA em Gestão de Estratégia Empresarial">MBA em Gestão de Estratégia Empresarial</p>
<p value="MBA em Gestão de Eventos">MBA em Gestão de Eventos</p>
<p value="MBA em Gestão de Logística">MBA em Gestão de Logística</p>
<p value="MBA em Gestão de Logística e Mercados">MBA em Gestão de Logística e Mercados</p>
<p value="MBA em Gestão de Logística e Operações">MBA em Gestão de Logística e Operações</p>
<p value="MBA em Gestão de Marcas e Produtos">MBA em Gestão de Marcas e Produtos</p>
<p value="MBA em Gestão de Marketing">MBA em Gestão de Marketing</p>
<p value="MBA em Gestão de Negócios Imobiliários">MBA em Gestão de Negócios Imobiliários</p>
<p value="MBA em Gestão de Pessoas">MBA em Gestão de Pessoas</p>
<p value="MBA em Gestão de Pessoas e Desenvolvimento Gerencial">MBA em Gestão de Pessoas e Desenvolvimento Gerencial</p>
<p value="MBA em Gestão de Pessoas e Liderança">MBA em Gestão de Pessoas e Liderança</p>
<p value="MBA em Gestão de Recursos Humanos">MBA em Gestão de Recursos Humanos</p>
<p value="MBA em Gestão de Transportes e Operações Logísticas">MBA em Gestão de Transportes e Operações Logísticas</p>
<p value="MBA em Gestão de Turismo">MBA em Gestão de Turismo</p>
<p value="MBA em Gestão de Turismo e Hospitalidade">MBA em Gestão de Turismo e Hospitalidade</p>
<p value="MBA em Gestão de Varejo Bancário">MBA em Gestão de Varejo Bancário</p>
<p value="MBA em Gestão do Atacado e Varejo">MBA em Gestão do Atacado e Varejo</p>
<p value="MBA em Gestão do Capital Intelectual e Retenção de Talentos">MBA em Gestão do Capital Intelectual e Retenção de Talentos</p>
<p value="MBA em Gestão e Retenção de Talentos">MBA em Gestão e Retenção de Talentos</p>
<p value="MBA em Gestão em Vendas">MBA em Gestão em Vendas</p>
<p value="MBA em Gestão Empresarial e Logística">MBA em Gestão Empresarial e Logística</p>
<p value="MBA em Gestão Estratégica de Compras">MBA em Gestão Estratégica de Compras</p>
<p value="MBA em Gestão Estratégica de Marketing">MBA em Gestão Estratégica de Marketing</p>
<p value="MBA em Gestão Estratégica de Negócios">MBA em Gestão Estratégica de Negócios</p>
<p value="MBA em Gestão Estratégica de Pessoas">MBA em Gestão Estratégica de Pessoas</p>
<p value="MBA em Gestão Estratégica de Pessoas e Talentos">MBA em Gestão Estratégica de Pessoas e Talentos</p>
<p value="MBA em Gestão Estratégica de Projetos">MBA em Gestão Estratégica de Projetos</p>
<p value="MBA em Gestão Farmacêutica">MBA em Gestão Farmacêutica</p>
<p value="MBA em Gestão Financeira">MBA em Gestão Financeira</p>
<p value="MBA em Gestão Logística">MBA em Gestão Logística</p>
<p value="MBA em Gestão Municipal">MBA em Gestão Municipal</p>
<p value="MBA em Gestão Pública">MBA em Gestão Pública</p>
<p value="MBA em Gestão Tributária">MBA em Gestão Tributária</p>
<p value="MBA em Governança Corporativa">MBA em Governança Corporativa</p>
<p value="MBA em Logística e Modais de Transporte">MBA em Logística e Modais de Transporte</p>
<p value="MBA em Logística Empresarial">MBA em Logística Empresarial</p>
<p value="MBA em Marketing">MBA em Marketing</p>
<p value="MBA em Marketing de Serviços e Relacionamento">MBA em Marketing de Serviços e Relacionamento</p>
<p value="MBA em Marketing Digital Global e de Relacionamento">MBA em Marketing Digital Global e de Relacionamento</p>
<p value="MBA em Marketing e Varejo">MBA em Marketing e Varejo</p>
<p value="MBA em Marketing Esportivo">MBA em Marketing Esportivo</p>
<p value="MBA em Regulação">MBA em Regulação</p>
<p value="MBA em Secretariado Executivo">MBA em Secretariado Executivo</p>
<p value="MBA em Shipping">MBA em Shipping</p>
<p value="MBA Executivo em Desenvolvimento Profissional">MBA Executivo em Desenvolvimento Profissional</p>
<p value="MBA Executivo em Gestão Aeroportuária">MBA Executivo em Gestão Aeroportuária</p>
<p value="MBA Executivo em Gestão Bancária CPA">MBA Executivo em Gestão Bancária CPA</p>
<p value="MBA Executivo em Gestão Bancária Financeira e Controladoria">MBA Executivo em Gestão Bancária Financeira e Controladoria</p>
<p value="MBA Executivo em Gestão Comercial - Marketing e Vendas">MBA Executivo em Gestão Comercial - Marketing e Vendas</p>
<p value="MBA Executivo em Gestão Comercial Varejo e Serviços">MBA Executivo em Gestão Comercial Varejo e Serviços</p>
<p value="MBA Executivo em Gestão da Psicologia Organizacional">MBA Executivo em Gestão da Psicologia Organizacional</p>
<p value="MBA Executivo em Gestão de Clínicas e Consultórios">MBA Executivo em Gestão de Clínicas e Consultórios</p>
<p value="MBA Executivo em Gestão de Clínicas e Consultórios Veterinários">MBA Executivo em Gestão de Clínicas e Consultórios Veterinários</p>
<p value="MBA Executivo em Gestão de Cooperativas">MBA Executivo em Gestão de Cooperativas</p>
<p value="MBA Executivo em Gestão de Metrôs e Transporte Ferroviário">MBA Executivo em Gestão de Metrôs e Transporte Ferroviário</p>
<p value="MBA Executivo em Gestão de Negócios em Alimentação">MBA Executivo em Gestão de Negócios em Alimentação</p>
<p value="MBA Executivo em Gestão de Negócios em Gastronomia">MBA Executivo em Gestão de Negócios em Gastronomia</p>
<p value="MBA Executivo em Gestão de Pessoas">MBA Executivo em Gestão de Pessoas</p>
<p value="MBA Executivo em Gestão de Pessoas, Desenvolvimento Gerencial e Coaching">MBA Executivo em Gestão de Pessoas, Desenvolvimento Gerencial e Coaching</p>
<p value="MBA Executivo em Gestão de Processos">MBA Executivo em Gestão de Processos</p>
<p value="MBA Executivo em Gestão de Restaurantes">MBA Executivo em Gestão de Restaurantes</p>
<p value="MBA Executivo em Gestão Empresarial">MBA Executivo em Gestão Empresarial</p>
<p value="MBA Executivo em Gestão Estratégica de Comércio Exterior">MBA Executivo em Gestão Estratégica de Comércio Exterior</p>
<p value="MBA Executivo em Gestão Estratégica de Marketing, Planejamento e Inteligência Competitiva">MBA Executivo em Gestão Estratégica de Marketing, Planejamento e Inteligência Competitiva</p>
<p value="MBA Executivo em Gestão Financeira, Controladoria e Auditoria">MBA Executivo em Gestão Financeira, Controladoria e Auditoria</p>
<p value="MBA Executivo em Gestão Hospitalar">MBA Executivo em Gestão Hospitalar</p>
<p value="MBA Executivo em Marketing Esportivo">MBA Executivo em Marketing Esportivo</p>
<p value="MBA Executivo em Segurança Privada: Safety e Security">MBA Executivo em Segurança Privada: Safety e Security</p>
<p value="Modernização, Infraestrutura e Gestão Portuária">Modernização, Infraestrutura e Gestão Portuária</p>

                    </div>
                    </>
                    : courses === "Saúde" ?
                    <>
                     <h4>312 OPÇÕES ENCONTRADAS</h4>
                    <div className="listSelected">


<p value="Acupuntura">Acupuntura</p>
<p value="Anatomia do Aparelho Locomotor">Anatomia do Aparelho Locomotor</p>
<p value="Anatomia e Patologia Associada">Anatomia e Patologia Associada</p>
<p value="Anatomia Funcional">Anatomia Funcional</p>
<p value="Anatomia Humana">Anatomia Humana</p>
<p value="Assistência Social e Saúde Pública">Assistência Social e Saúde Pública</p>
<p value="Atenção Primária à Saúde com Ênfase em Saúde da Família">Atenção Primária à Saúde com Ênfase em Saúde da Família</p>
<p value="Atendimento de Emergência Pré-Hospitalar">Atendimento de Emergência Pré-Hospitalar</p>
<p value="Atendimento Odontológico de Pacientes com Necessidades Especiais">Atendimento Odontológico de Pacientes com Necessidades Especiais</p>
<p value="Atividade Física e Saúde na Terceira Idade">Atividade Física e Saúde na Terceira Idade</p>
<p value="Auditoria em Saúde">Auditoria em Saúde</p>
<p value="Auditoria em Serviço de Enfermagem">Auditoria em Serviço de Enfermagem</p>
<p value="Avaliação da Aptidão Física">Avaliação da Aptidão Física</p>
<p value="Avaliação Física e Funcional do Idoso">Avaliação Física e Funcional do Idoso</p>
<p value="Avaliação Física e Prescrição de Exercício com Ênfase em Academias">Avaliação Física e Prescrição de Exercício com Ênfase em Academias</p>
<p value="Avaliação Física, Ortopédica, Esportiva e Funcional">Avaliação Física, Ortopédica, Esportiva e Funcional</p>
<p value="Avaliação Psicológica e Psicodiagnóstico">Avaliação Psicológica e Psicodiagnóstico</p>
<p value="Biomecânica da Atividade Física na Saúde e Reabilitação">Biomecânica da Atividade Física na Saúde e Reabilitação</p>
<p value="Biomedicina">Biomedicina</p>
<p value="Biomedicina Estética">Biomedicina Estética</p>
<p value="Biossegurança e Saúde Pública">Biossegurança e Saúde Pública</p>
<p value="Ciências Neurológicas, Deficiências Múltiplas e Surdocegueira">Ciências Neurológicas, Deficiências Múltiplas e Surdocegueira</p>
<p value="Ciências Políticas com Ênfase em Serviço Social">Ciências Políticas com Ênfase em Serviço Social</p>
<p value="Citologia Oncótica">Citologia Oncótica</p>
<p value="Clínica Médica de Pequenos Animais">Clínica Médica de Pequenos Animais</p>
<p value="Controle de Infecção Hospitalar">Controle de Infecção Hospitalar</p>
<p value="Cuidados Paliativos">Cuidados Paliativos</p>
<p value="Dependência Química">Dependência Química</p>
<p value="Dermatologia Veterinária">Dermatologia Veterinária</p>
<p value="Direito Hospitalar">Direito Hospitalar</p>
<p value="Direito Médico e Hospitalar">Direito Médico e Hospitalar</p>
<p value="Disfunção Temporomandibular e Dores Orofaciais">Disfunção Temporomandibular e Dores Orofaciais</p>
<p value="Docência do Ensino Superior e Neuropsicologia">Docência do Ensino Superior e Neuropsicologia</p>
<p value="Docência em Ciências da Saúde">Docência em Ciências da Saúde</p>
<p value="Docência em Ciências do Esporte">Docência em Ciências do Esporte</p>
<p value="Docência em Enfermagem">Docência em Enfermagem</p>
<p value="Docência em Fisioterapia">Docência em Fisioterapia</p>
<p value="Dor e Inflamação">Dor e Inflamação</p>
<p value="Educação e Psicologia">Educação e Psicologia</p>
<p value="Educação Especial com Ênfase em Transtornos Globais de Desenvolvimento (TGD) e Altas Habilidades">Educação Especial com Ênfase em Transtornos Globais de Desenvolvimento (TGD) e Altas Habilidades</p>
<p value="Educação Especial e Neuropsicopedagogia">Educação Especial e Neuropsicopedagogia</p>
<p value="Educação Especial e Psicomotricidade">Educação Especial e Psicomotricidade</p>
<p value="Educação Especial Inclusiva e Transtorno do Espectro Autista (TEA)">Educação Especial Inclusiva e Transtorno do Espectro Autista (TEA)</p>
<p value="Educação Física Hospitalar">Educação Física Hospitalar</p>
<p value="Educação Hospitalar">Educação Hospitalar</p>
<p value="Educação Infantil, Neurociência e Aprendizagem">Educação Infantil, Neurociência e Aprendizagem</p>
<p value="Emergências Médicas em Odontologia">Emergências Médicas em Odontologia</p>
<p value="Enfermagem de Urgência e Emergência">Enfermagem de Urgência e Emergência</p>
<p value="Enfermagem do Trabalho">Enfermagem do Trabalho</p>
<p value="Enfermagem e Saúde do Idoso">Enfermagem e Saúde do Idoso</p>
<p value="Enfermagem e Serviço Social">Enfermagem e Serviço Social</p>
<p value="Enfermagem em Centro Cirúrgico e Central de Material">Enfermagem em Centro Cirúrgico e Central de Material</p>
<p value="Enfermagem em Dermatologia">Enfermagem em Dermatologia</p>
<p value="Enfermagem em Estomaterapia">Enfermagem em Estomaterapia</p>
<p value="Enfermagem em Geriatria e Gerontologia">Enfermagem em Geriatria e Gerontologia</p>
<p value="Enfermagem em Hematologia, Hemoterapia e Terapia de Suporte">Enfermagem em Hematologia, Hemoterapia e Terapia de Suporte</p>
<p value="Enfermagem em Nefrologia">Enfermagem em Nefrologia</p>
<p value="Enfermagem em Psiquiatria e Saúde Mental">Enfermagem em Psiquiatria e Saúde Mental</p>
<p value="Enfermagem em Radiologia e Imaginologia">Enfermagem em Radiologia e Imaginologia</p>
<p value="Enfermagem em Saúde da Família">Enfermagem em Saúde da Família</p>
<p value="Enfermagem em Saúde do Trabalhador">Enfermagem em Saúde do Trabalhador</p>
<p value="Enfermagem em UTI">Enfermagem em UTI</p>
<p value="Enfermagem em UTI Pediátrica e Neonatal">Enfermagem em UTI Pediátrica e Neonatal</p>
<p value="Epidemiologia">Epidemiologia</p>
<p value="Era Digital e Impactos na Saúde, Educação e Comportamento Social">Era Digital e Impactos na Saúde, Educação e Comportamento Social</p>
<p value="Estética e Cosmetologia">Estética e Cosmetologia</p>
<p value="Estudos de Diagnósticos em Enfermagem">Estudos de Diagnósticos em Enfermagem</p>
<p value="Estudos em Acupuntura">Estudos em Acupuntura</p>
<p value="Estudos em Alergia e Imunologia">Estudos em Alergia e Imunologia</p>
<p value="Estudos em Anatomia Craniofacial Aplicada à Odontologia">Estudos em Anatomia Craniofacial Aplicada à Odontologia</p>
<p value="Estudos em Cardiologia">Estudos em Cardiologia</p>
<p value="Estudos em Cirurgia Cardiovascular">Estudos em Cirurgia Cardiovascular</p>
<p value="Estudos em Cirurgia Geral">Estudos em Cirurgia Geral</p>
<p value="Estudos em Cirurgia Plástica">Estudos em Cirurgia Plástica</p>
<p value="Estudos em Clínica Médica">Estudos em Clínica Médica</p>
<p value="Estudos em Dermatologia">Estudos em Dermatologia</p>
<p value="Estudos em Dermatologia Capilar">Estudos em Dermatologia Capilar</p>
<p value="Estudos em Dermatologia Clínica">Estudos em Dermatologia Clínica</p>
<p value="Estudos em Dermatologia Corporal">Estudos em Dermatologia Corporal</p>
<p value="Estudos em Dermatologia Facial">Estudos em Dermatologia Facial</p>
<p value="Estudos em Dermatologia Veterinária">Estudos em Dermatologia Veterinária</p>
<p value="Estudos em Endocrinologia">Estudos em Endocrinologia</p>
<p value="Estudos em Enfermagem">Estudos em Enfermagem</p>
<p value="Estudos em Enfermagem Ambulatorial e Hospitalar">Estudos em Enfermagem Ambulatorial e Hospitalar</p>
<p value="Estudos em Enfermagem e Saúde Coletiva">Estudos em Enfermagem e Saúde Coletiva</p>
<p value="Estudos em Enfermagem e Saúde do Trabalhador">Estudos em Enfermagem e Saúde do Trabalhador</p>
<p value="Estudos em Enfermagem em Terapia Intensiva">Estudos em Enfermagem em Terapia Intensiva</p>
<p value="Estudos em Enfermagem no Atendimento ao Idoso">Estudos em Enfermagem no Atendimento ao Idoso</p>
<p value="Estudos em Enfermagem Oncológica">Estudos em Enfermagem Oncológica</p>
<p value="Estudos em Enfermagem Psiquiátrica">Estudos em Enfermagem Psiquiátrica</p>
<p value="Estudos em Epidemiologia: Covid-19">Estudos em Epidemiologia: Covid-19</p>
<p value="Estudos em Estética Corporal">Estudos em Estética Corporal</p>
<p value="Estudos em Estética Dental">Estudos em Estética Dental</p>
<p value="Estudos em Estética e Cosmetologia">Estudos em Estética e Cosmetologia</p>
<p value="Estudos em Estética Facial">Estudos em Estética Facial</p>
<p value="Estudos em Farmacologia">Estudos em Farmacologia</p>
<p value="Estudos em Farmacologia Homeopática">Estudos em Farmacologia Homeopática</p>
<p value="Estudos em Farmacologia Odontológica">Estudos em Farmacologia Odontológica</p>
<p value="Estudos em Farmacologia Veterinária">Estudos em Farmacologia Veterinária</p>
<p value="Estudos em Fisiologia Oral">Estudos em Fisiologia Oral</p>
<p value="Estudos em Fisioterapia">Estudos em Fisioterapia</p>
<p value="Estudos em Gastroenterologia">Estudos em Gastroenterologia</p>
<p value="Estudos em Genética">Estudos em Genética</p>
<p value="Estudos em Geriatria e Gerontologia">Estudos em Geriatria e Gerontologia</p>
<p value="Estudos em Ginecologia">Estudos em Ginecologia</p>
<p value="Estudos em Hematologia e Bioquímica Veterinária">Estudos em Hematologia e Bioquímica Veterinária</p>
<p value="Estudos em Hematologia e Hemoterapia">Estudos em Hematologia e Hemoterapia</p>
<p value="Estudos em Imaginologia">Estudos em Imaginologia</p>
<p value="Estudos em Infectologia">Estudos em Infectologia</p>
<p value="Estudos em Mastologia">Estudos em Mastologia</p>
<p value="Estudos em Medicina da Família e Comunidade">Estudos em Medicina da Família e Comunidade</p>
<p value="Estudos em Medicina de Emergência">Estudos em Medicina de Emergência</p>
<p value="Estudos em Medicina do Sono">Estudos em Medicina do Sono</p>
<p value="Estudos em Medicina e Saúde Esportiva">Estudos em Medicina e Saúde Esportiva</p>
<p value="Estudos em Medicina Física e Reabilitação">Estudos em Medicina Física e Reabilitação</p>
<p value="Estudos em Medicina Intensiva">Estudos em Medicina Intensiva</p>
<p value="Estudos em Medicina Legal e Perícia Médica">Estudos em Medicina Legal e Perícia Médica</p>
<p value="Estudos em Microbiologia Veterinária">Estudos em Microbiologia Veterinária</p>
<p value="Estudos em Nefrologia">Estudos em Nefrologia</p>
<p value="Estudos em Nefrologia e Hipertensão">Estudos em Nefrologia e Hipertensão</p>
<p value="Estudos em Neonatologia">Estudos em Neonatologia</p>
<p value="Estudos em Neurologia e Neurocirurgia">Estudos em Neurologia e Neurocirurgia</p>
<p value="Estudos em Nutrição">Estudos em Nutrição</p>
<p value="Estudos em Nutrição Aplicada à Enfermagem">Estudos em Nutrição Aplicada à Enfermagem</p>
<p value="Estudos em Nutrição Esportiva">Estudos em Nutrição Esportiva</p>
<p value="Estudos em Nutrologia">Estudos em Nutrologia</p>
<p value="Estudos em Obstetrícia">Estudos em Obstetrícia</p>
<p value="Estudos em Odontologia">Estudos em Odontologia</p>
<p value="Estudos em Odontologia e Saúde Coletiva">Estudos em Odontologia e Saúde Coletiva</p>
<p value="Estudos em Odontologia Esportiva">Estudos em Odontologia Esportiva</p>
<p value="Estudos em Odontologia Estética">Estudos em Odontologia Estética</p>
<p value="Estudos em Odontologia Integrada">Estudos em Odontologia Integrada</p>
<p value="Estudos em Odontologia Legal">Estudos em Odontologia Legal</p>
<p value="Estudos em Odontologia para Bebês">Estudos em Odontologia para Bebês</p>
<p value="Estudos em Odontologia Restauradora">Estudos em Odontologia Restauradora</p>
<p value="Estudos em Oftalmologia">Estudos em Oftalmologia</p>
<p value="Estudos em Oncologia">Estudos em Oncologia</p>
<p value="Estudos em Ortopedia e Traumatologia">Estudos em Ortopedia e Traumatologia</p>
<p value="Estudos em Otorrinolaringologia">Estudos em Otorrinolaringologia</p>
<p value="Estudos em Parasitologia Veterinária">Estudos em Parasitologia Veterinária</p>
<p value="Estudos em Patologia Oral">Estudos em Patologia Oral</p>
<p value="Estudos em Pediatria">Estudos em Pediatria</p>
<p value="Estudos em Periodontia">Estudos em Periodontia</p>
<p value="Estudos em Pneumologia">Estudos em Pneumologia</p>
<p value="Estudos em Psicopatologia">Estudos em Psicopatologia</p>
<p value="Estudos em Psiquiatria">Estudos em Psiquiatria</p>
<p value="Estudos em Psiquiatria do Esporte">Estudos em Psiquiatria do Esporte</p>
<p value="Estudos em Psiquiatria Forense">Estudos em Psiquiatria Forense</p>
<p value="Estudos em Psiquiatria Geriátrica">Estudos em Psiquiatria Geriátrica</p>
<p value="Estudos em Psiquiatria na Infância e Adolescência">Estudos em Psiquiatria na Infância e Adolescência</p>
<p value="Estudos em Radiologia">Estudos em Radiologia</p>
<p value="Estudos em Radioterapia e Medicina Nuclear">Estudos em Radioterapia e Medicina Nuclear</p>
<p value="Estudos em Reumatologia">Estudos em Reumatologia</p>
<p value="Estudos em Saúde Bucal">Estudos em Saúde Bucal</p>
<p value="Estudos em Saúde da Família">Estudos em Saúde da Família</p>
<p value="Estudos em Segurança e Medicina do Trabalho">Estudos em Segurança e Medicina do Trabalho</p>
<p value="Estudos em Terapêutica Odontológica">Estudos em Terapêutica Odontológica</p>
<p value="Estudos em Terapêutica Veterinária">Estudos em Terapêutica Veterinária</p>
<p value="Estudos em Tricologia">Estudos em Tricologia</p>
<p value="Estudos em Urologia">Estudos em Urologia</p>
<p value="Exercício Físico nos Distúrbios da Coluna Vertebral">Exercício Físico nos Distúrbios da Coluna Vertebral</p>
<p value="Farmácia Clínica e Hospitalar">Farmácia Clínica e Hospitalar</p>
<p value="Farmacologia e Terapêutica Veterinária">Farmacologia e Terapêutica Veterinária</p>
<p value="Fisiologia do Exercício">Fisiologia do Exercício</p>
<p value="Fisioterapia Dermato-Funcional">Fisioterapia Dermato-Funcional</p>
<p value="Fisioterapia do Trabalho e Ergonomia">Fisioterapia do Trabalho e Ergonomia</p>
<p value="Fisioterapia em Terapia Intensiva">Fisioterapia em Terapia Intensiva</p>
<p value="Fisioterapia Esportiva">Fisioterapia Esportiva</p>
<p value="Fisioterapia Gerontológica e Geriátrica">Fisioterapia Gerontológica e Geriátrica</p>
<p value="Fisioterapia Hospitalar">Fisioterapia Hospitalar</p>
<p value="Fisioterapia na Saúde da Mulher">Fisioterapia na Saúde da Mulher</p>
<p value="Fisioterapia Neurológica Adulta">Fisioterapia Neurológica Adulta</p>
<p value="Fisioterapia Respiratória">Fisioterapia Respiratória</p>
<p value="Fitoterapia Aplicada à Estética e Prática Esportiva">Fitoterapia Aplicada à Estética e Prática Esportiva</p>
<p value="Fitoterapia Aplicada à Nutrição Clínica">Fitoterapia Aplicada à Nutrição Clínica</p>
<p value="Fonoaudiologia do Trabalho">Fonoaudiologia do Trabalho</p>
<p value="Fonoaudiologia Educacional">Fonoaudiologia Educacional</p>
<p value="Fonoaudiologia em Saúde Coletiva">Fonoaudiologia em Saúde Coletiva</p>
<p value="Geoprocessamento e Saúde">Geoprocessamento e Saúde</p>
<p value="Gerenciamento em Atenção Básica da Saúde">Gerenciamento em Atenção Básica da Saúde</p>
<p value="Gerontologia e Saúde Mental">Gerontologia e Saúde Mental</p>
<p value="Gestão da Qualidade Hospitalar">Gestão da Qualidade Hospitalar</p>
<p value="Gestão da Saúde e Meio Ambiente">Gestão da Saúde e Meio Ambiente</p>
<p value="Gestão das Políticas Sociais">Gestão das Políticas Sociais</p>
<p value="Gestão de Assistência Domiciliar Home Care">Gestão de Assistência Domiciliar Home Care</p>
<p value="Gestão de Planos de Saúde">Gestão de Planos de Saúde</p>
<p value="Gestão de Projetos Sociais">Gestão de Projetos Sociais</p>
<p value="Gestão de Serviços de Enfermagem">Gestão de Serviços de Enfermagem</p>
<p value="Gestão de Spas e Salões de Beleza">Gestão de Spas e Salões de Beleza</p>
<p value="Gestão do Conhecimento Médico">Gestão do Conhecimento Médico</p>
<p value="Gestão do SUAS - Sistema Único de Assistência Social">Gestão do SUAS - Sistema Único de Assistência Social</p>
<p value="Gestão do SUAS e Serviço Social">Gestão do SUAS e Serviço Social</p>
<p value="Gestão em Saúde e Administração Hospitalar">Gestão em Saúde e Administração Hospitalar</p>
<p value="Gestão em Secretariado Hospitalar">Gestão em Secretariado Hospitalar</p>
<p value="Gestão Integrada e Social, NTEP e FAP">Gestão Integrada e Social, NTEP e FAP</p>
<p value="Gestão Social: Políticas Sociais, Redes e Defesa de Direito">Gestão Social: Políticas Sociais, Redes e Defesa de Direito</p>
<p value="Hematologia">Hematologia</p>
<p value="Humanização da Saúde Pública">Humanização da Saúde Pública</p>
<p value="Imunologia Clínica">Imunologia Clínica</p>
<p value="Inspeção Veterinária">Inspeção Veterinária</p>
<p value="Intervenção em Pediatria">Intervenção em Pediatria</p>
<p value="Investigação Criminal e Neuropsicologia Forense">Investigação Criminal e Neuropsicologia Forense</p>
<p value="Investigação Criminal e Psicologia Forense">Investigação Criminal e Psicologia Forense</p>
<p value="Legislação Profissional em Saúde">Legislação Profissional em Saúde</p>
<p value="Ler e Dort: da Prevenção ao Tratamento">Ler e Dort: da Prevenção ao Tratamento</p>
<p value="Mamografia">Mamografia</p>
<p value="MBA em Gestão de Academias Fitness e Wellness">MBA em Gestão de Academias Fitness e Wellness</p>
<p value="MBA em Gestão Farmacêutica">MBA em Gestão Farmacêutica</p>
<p value="MBA Executivo em Gestão da Psicologia Organizacional">MBA Executivo em Gestão da Psicologia Organizacional</p>
<p value="MBA Executivo em Gestão Hospitalar">MBA Executivo em Gestão Hospitalar</p>
<p value="MBA Executivo em Hotelaria Hospitalar">MBA Executivo em Hotelaria Hospitalar</p>
<p value="Medicina do Esporte">Medicina do Esporte</p>
<p value="Microbiologia Avançada">Microbiologia Avançada</p>
<p value="Motricidade e Desenvolvimento Motor na Infância">Motricidade e Desenvolvimento Motor na Infância</p>
<p value="Musculação: Condicionamento Físico Prevenção e Reabilitação de Lesões">Musculação: Condicionamento Físico Prevenção e Reabilitação de Lesões</p>
<p value="Nefrologia Multiprofissional">Nefrologia Multiprofissional</p>
<p value="Negócios em Estética">Negócios em Estética</p>
<p value="Neuroaprendizagem">Neuroaprendizagem</p>
<p value="Neuroimagem">Neuroimagem</p>
<p value="Neuropsicologia">Neuropsicologia</p>
<p value="Neuropsicologia Clínica e Orientação Escolar">Neuropsicologia Clínica e Orientação Escolar</p>
<p value="Neuropsicologia e Problemas de Aprendizagem">Neuropsicologia e Problemas de Aprendizagem</p>
<p value="Neuropsicopedagogia com Ênfase em Educação Especial e Inclusiva">Neuropsicopedagogia com Ênfase em Educação Especial e Inclusiva</p>
<p value="Neuropsicopedagogia e Educação Infantil">Neuropsicopedagogia e Educação Infantil</p>
<p value="Neuropsicopedagogia e Psicanálise Clínica">Neuropsicopedagogia e Psicanálise Clínica</p>
<p value="Nutrição Animal">Nutrição Animal</p>
<p value="Nutrição Aplicada à Estética">Nutrição Aplicada à Estética</p>
<p value="Nutrição Clínica">Nutrição Clínica</p>
<p value="Nutrição Clínica Esportiva">Nutrição Clínica Esportiva</p>
<p value="Nutrição com Ênfase em Obesidade e Emagrecimento">Nutrição com Ênfase em Obesidade e Emagrecimento</p>
<p value="Nutrição e Saúde Pública">Nutrição e Saúde Pública</p>
<p value="Odontologia do Trabalho">Odontologia do Trabalho</p>
<p value="Odontologia e Saúde Pública">Odontologia e Saúde Pública</p>
<p value="Pedagogia Hospitalar">Pedagogia Hospitalar</p>
<p value="Perícia em Saúde Auditiva do Trabalhador">Perícia em Saúde Auditiva do Trabalhador</p>
<p value="Personal Training – Metodologia para o Treinamento Personalizado">Personal Training – Metodologia para o Treinamento Personalizado</p>
<p value="Política Social e Gestão de Serviços Sociais">Política Social e Gestão de Serviços Sociais</p>
<p value="Prescrição da Atividade Física em Situações Especiais de Saúde e Lesões">Prescrição da Atividade Física em Situações Especiais de Saúde e Lesões</p>
<p value="Promoção e Prevenção em Saúde Bucal">Promoção e Prevenção em Saúde Bucal</p>
<p value="Psicanálise">Psicanálise</p>
<p value="Psicanálise Clínica">Psicanálise Clínica</p>
<p value="Psico-Oncologia">Psico-Oncologia</p>
<p value="Psicogerontologia">Psicogerontologia</p>
<p value="Psicologia da Aprendizagem do Desenvolvimento e da Personalidade">Psicologia da Aprendizagem do Desenvolvimento e da Personalidade</p>
<p value="Psicologia da Saúde">Psicologia da Saúde</p>
<p value="Psicologia de Grupo e Desenvolvimento de Equipes">Psicologia de Grupo e Desenvolvimento de Equipes</p>
<p value="Psicologia de Trânsito">Psicologia de Trânsito</p>
<p value="Psicologia do Trabalho">Psicologia do Trabalho</p>
<p value="Psicologia e a Síndrome da Alienação Parental">Psicologia e a Síndrome da Alienação Parental</p>
<p value="Psicologia e Transtornos do Espectro Autista">Psicologia e Transtornos do Espectro Autista</p>
<p value="Psicologia Escolar e Inclusão">Psicologia Escolar e Inclusão</p>
<p value="Psicologia Forense e Jurídica">Psicologia Forense e Jurídica</p>
<p value="Psicologia Hospitalar">Psicologia Hospitalar</p>
<p value="Psicologia Humanista com Abordagem Centrada na Pessoa">Psicologia Humanista com Abordagem Centrada na Pessoa</p>
<p value="Psicologia Infantil">Psicologia Infantil</p>
<p value="Psicologia Organizacional e do Trabalho">Psicologia Organizacional e do Trabalho</p>
<p value="Psicologia Sexual">Psicologia Sexual</p>
<p value="Psicologia Social">Psicologia Social</p>
<p value="Psicopatologia e Dependência Química">Psicopatologia e Dependência Química</p>
<p value="Psicopatologia e Psicodiagnóstico Infantil">Psicopatologia e Psicodiagnóstico Infantil</p>
<p value="Psicopedagogia">Psicopedagogia</p>
<p value="Psicopedagogia - Aspectos Teóricos">Psicopedagogia - Aspectos Teóricos</p>
<p value="Psicopedagogia com Ênfase em Educação Inclusiva">Psicopedagogia com Ênfase em Educação Inclusiva</p>
<p value="Psicopedagogia e Educação Especial">Psicopedagogia e Educação Especial</p>
<p value="Psicopedagogia e Educação Inclusiva">Psicopedagogia e Educação Inclusiva</p>
<p value="Psicopedagogia e Educação Infantil">Psicopedagogia e Educação Infantil</p>
<p value="Psicopedagogia Institucional">Psicopedagogia Institucional</p>
<p value="Psicopedagogia Institucional e Clínica - 600 Horas">Psicopedagogia Institucional e Clínica - 600 Horas</p>
<p value="Psicopedagogia Institucional, Clínica e Hospitalar">Psicopedagogia Institucional, Clínica e Hospitalar</p>
<p value="Psicoterapia em Intervenção de Crises e Prevenção do Suicídio">Psicoterapia em Intervenção de Crises e Prevenção do Suicídio</p>
<p value="Psicoterapias">Psicoterapias</p>
<p value="Radiologia Odontológica e Imaginologia">Radiologia Odontológica e Imaginologia</p>
<p value="Reabilitação Cardiopulmonar">Reabilitação Cardiopulmonar</p>
<p value="Regulação, Controle, Avaliação e Auditoria na Saúde">Regulação, Controle, Avaliação e Auditoria na Saúde</p>
<p value="Ressonância Magnética">Ressonância Magnética</p>
<p value="Saúde Bucal">Saúde Bucal</p>
<p value="Saúde Bucal e Odontopediatria">Saúde Bucal e Odontopediatria</p>
<p value="Saúde Coletiva">Saúde Coletiva</p>
<p value="Saúde Indígena">Saúde Indígena</p>
<p value="Saúde Infanto juvenil">Saúde Infanto juvenil</p>
<p value="Saúde Mental">Saúde Mental</p>
<p value="Saúde Ocupacional">Saúde Ocupacional</p>
<p value="Segurança do Paciente e Qualidade em Serviços de Saúde">Segurança do Paciente e Qualidade em Serviços de Saúde</p>
<p value="Segurança e Saúde Ocupacional">Segurança e Saúde Ocupacional</p>
<p value="Serviço Social e Dependência Química">Serviço Social e Dependência Química</p>
<p value="Serviço Social e Previdência">Serviço Social e Previdência</p>
<p value="Serviço Social e Saúde Mental">Serviço Social e Saúde Mental</p>
<p value="Serviço Social em Saúde Coletiva">Serviço Social em Saúde Coletiva</p>
<p value="Serviço Social em Situações de Desastre">Serviço Social em Situações de Desastre</p>
<p value="Tanatologia Sobre a Morte e o Morrer">Tanatologia Sobre a Morte e o Morrer</p>
<p value="Técnicas em Estética">Técnicas em Estética</p>
<p value="Teoria Psicanalítica">Teoria Psicanalítica</p>
<p value="Terapia de Casal">Terapia de Casal</p>
<p value="Terapia Familiar">Terapia Familiar</p>
<p value="Terapias Integrativas e Complementares">Terapias Integrativas e Complementares</p>
<p value="Tomografia Computadorizada">Tomografia Computadorizada</p>
<p value="Trabalho e Ergonomia">Trabalho e Ergonomia</p>
<p value="Trabalho Social com Família e Comunidades">Trabalho Social com Família e Comunidades</p>
<p value="Transtorno Borderline e Terapia Cognitivo-Comportamental">Transtorno Borderline e Terapia Cognitivo-Comportamental</p>
<p value="Transtorno do Espectro Autista (TEA) e Transtornos Globais do Desenvolvimento (TGD)">Transtorno do Espectro Autista (TEA) e Transtornos Globais do Desenvolvimento (TGD)</p>
<p value="Transtornos Alimentares, Obesidade e Cirurgia Bariátrica">Transtornos Alimentares, Obesidade e Cirurgia Bariátrica</p>
<p value="Transtornos Globais do Desenvolvimento (TGD)">Transtornos Globais do Desenvolvimento (TGD)</p>
<p value="Tratamento de Síndromes Psiquiátricas">Tratamento de Síndromes Psiquiátricas</p>
<p value="Tratamento do Transtorno Bipolar">Tratamento do Transtorno Bipolar</p>
<p value="Tratamento dos Transtornos de Ansiedade e Síndrome do Pânico">Tratamento dos Transtornos de Ansiedade e Síndrome do Pânico</p>
<p value="Tratamento em Síndrome de Tourette">Tratamento em Síndrome de Tourette</p>
<p value="Treinamento Especializado e Funcional para Corrida">Treinamento Especializado e Funcional para Corrida</p>
<p value="Urgência, Emergência e Atendimento Pré-Hospitalar">Urgência, Emergência e Atendimento Pré-Hospitalar</p>
<p value="Vigilância em Saúde Ambiental e Sanitária">Vigilância em Saúde Ambiental e Sanitária</p>
<p value="Vigilância em Saúde Epidemiológica">Vigilância em Saúde Epidemiológica</p>
<p value="Violência Doméstica">Violência Doméstica</p>
<p value="Zoologia e Saúde Pública">Zoologia e Saúde Pública</p>

                    </div>
                    </>
                    : courses === "Psicologia e Serviço Social" ?
                    <>
                     <h4>113 OPÇÕES ENCONTRADAS</h4>
                    <div className="listSelected">


<p value="Assistência Social e Saúde Pública">Assistência Social e Saúde Pública</p>
<p value="Atenção Primária à Saúde com Ênfase em Saúde da Família">Atenção Primária à Saúde com Ênfase em Saúde da Família</p>
<p value="Avaliação Psicológica e Psicodiagnóstico">Avaliação Psicológica e Psicodiagnóstico</p>
<p value="Ciência Política">Ciência Política</p>
<p value="Ciências Políticas com Ênfase em Serviço Social">Ciências Políticas com Ênfase em Serviço Social</p>
<p value="Cuidados Paliativos">Cuidados Paliativos</p>
<p value="Dependência Química">Dependência Química</p>
<p value="Direito Educacional">Direito Educacional</p>
<p value="Direito Internacional">Direito Internacional</p>
<p value="Direito Previdenciário">Direito Previdenciário</p>
<p value="Direitos Difusos e Coletivos">Direitos Difusos e Coletivos</p>
<p value="Direitos Humanos e Questões Étnico-Sociais">Direitos Humanos e Questões Étnico-Sociais</p>
<p value="Direitos Humanos Internacionais">Direitos Humanos Internacionais</p>
<p value="Direitos Sociais e Assistente Social">Direitos Sociais e Assistente Social</p>
<p value="Direitos Sociais e Competências Profissionais do Assistente Social">Direitos Sociais e Competências Profissionais do Assistente Social</p>
<p value="Docência do Ensino Superior e Neuropsicologia">Docência do Ensino Superior e Neuropsicologia</p>
<p value="Educação e Psicologia">Educação e Psicologia</p>
<p value="Educação Especial com Ênfase em Transtornos Globais de Desenvolvimento (TGD) e Altas Habilidades">Educação Especial com Ênfase em Transtornos Globais de Desenvolvimento (TGD) e Altas Habilidades</p>
<p value="Educação Especial e Neuropsicopedagogia">Educação Especial e Neuropsicopedagogia</p>
<p value="Educação Especial e Psicomotricidade">Educação Especial e Psicomotricidade</p>
<p value="Educação Especial Inclusiva e Transtorno do Espectro Autista (TEA)">Educação Especial Inclusiva e Transtorno do Espectro Autista (TEA)</p>
<p value="Educação Infantil, Anos Iniciais e Neuropsicopedagogia">Educação Infantil, Anos Iniciais e Neuropsicopedagogia</p>
<p value="Educação Infantil, Neurociência e Aprendizagem">Educação Infantil, Neurociência e Aprendizagem</p>
<p value="Enfermagem e Serviço Social">Enfermagem e Serviço Social</p>
<p value="Epidemiologia">Epidemiologia</p>
<p value="Estudos em Psicopatologia">Estudos em Psicopatologia</p>
<p value="Filosofia e Direitos Humanos">Filosofia e Direitos Humanos</p>
<p value="Gerenciamento em Atenção Básica da Saúde">Gerenciamento em Atenção Básica da Saúde</p>
<p value="Gestão das Políticas Sociais">Gestão das Políticas Sociais</p>
<p value="Gestão de Projetos Sociais">Gestão de Projetos Sociais</p>
<p value="Gestão do SUAS - Sistema Único de Assistência Social">Gestão do SUAS - Sistema Único de Assistência Social</p>
<p value="Gestão do SUAS e Serviço Social">Gestão do SUAS e Serviço Social</p>
<p value="Gestão Social: Políticas Sociais, Redes e Defesa de Direito">Gestão Social: Políticas Sociais, Redes e Defesa de Direito</p>
<p value="Identidade, Cultura, Políticas Sociais e Serviço Social">Identidade, Cultura, Políticas Sociais e Serviço Social</p>
<p value="Investigação Criminal e Neuropsicologia Forense">Investigação Criminal e Neuropsicologia Forense</p>
<p value="Investigação Criminal e Psicologia Forense">Investigação Criminal e Psicologia Forense</p>
<p value="Lúdico e Psicomotricidade na Educação Infantil">Lúdico e Psicomotricidade na Educação Infantil</p>
<p value="MBA Executivo em Gestão da Psicologia Organizacional">MBA Executivo em Gestão da Psicologia Organizacional</p>
<p value="Motricidade e Desenvolvimento Motor na Infância">Motricidade e Desenvolvimento Motor na Infância</p>
<p value="Nefrologia Multiprofissional">Nefrologia Multiprofissional</p>
<p value="Neuroaprendizagem">Neuroaprendizagem</p>
<p value="Neuroimagem">Neuroimagem</p>
<p value="Neuropsicologia">Neuropsicologia</p>
<p value="Neuropsicologia Clínica e Orientação Escolar">Neuropsicologia Clínica e Orientação Escolar</p>
<p value="Neuropsicologia e Problemas de Aprendizagem">Neuropsicologia e Problemas de Aprendizagem</p>
<p value="Neuropsicopedagogia Clínica">Neuropsicopedagogia Clínica</p>
<p value="Neuropsicopedagogia com Ênfase em Educação Especial e Inclusiva">Neuropsicopedagogia com Ênfase em Educação Especial e Inclusiva</p>
<p value="Neuropsicopedagogia e Desenvolvimento Humano">Neuropsicopedagogia e Desenvolvimento Humano</p>
<p value="Neuropsicopedagogia e Educação Infantil">Neuropsicopedagogia e Educação Infantil</p>
<p value="Neuropsicopedagogia e Psicanálise Clínica">Neuropsicopedagogia e Psicanálise Clínica</p>
<p value="Neuropsicopedagogia Educação Especial Inclusiva">Neuropsicopedagogia Educação Especial Inclusiva</p>
<p value="Neuropsicopedagogia Institucional Inclusiva, Orientação e Supervisão Escolar">Neuropsicopedagogia Institucional Inclusiva, Orientação e Supervisão Escolar</p>
<p value="Pedagogia Social e Elaboração de Projetos">Pedagogia Social e Elaboração de Projetos</p>
<p value="Política Social e Gestão de Serviços Sociais">Política Social e Gestão de Serviços Sociais</p>
<p value="Psicanálise">Psicanálise</p>
<p value="Psicanálise Clínica">Psicanálise Clínica</p>
<p value="Psico-Oncologia">Psico-Oncologia</p>
<p value="Psicogerontologia">Psicogerontologia</p>
<p value="Psicologia da Aprendizagem do Desenvolvimento e da Personalidade">Psicologia da Aprendizagem do Desenvolvimento e da Personalidade</p>
<p value="Psicologia da Saúde">Psicologia da Saúde</p>
<p value="Psicologia de Grupo e Desenvolvimento de Equipes">Psicologia de Grupo e Desenvolvimento de Equipes</p>
<p value="Psicologia do Esporte">Psicologia do Esporte</p>
<p value="Psicologia do Trabalho">Psicologia do Trabalho</p>
<p value="Psicologia e a Síndrome da Alienação Parental">Psicologia e a Síndrome da Alienação Parental</p>
<p value="Psicologia e Transtornos do Espectro Autista">Psicologia e Transtornos do Espectro Autista</p>
<p value="Psicologia Escolar e Educacional">Psicologia Escolar e Educacional</p>
<p value="Psicologia Escolar e Inclusão">Psicologia Escolar e Inclusão</p>
<p value="Psicologia Hospitalar">Psicologia Hospitalar</p>
<p value="Psicologia Humanista com Abordagem Centrada na Pessoa">Psicologia Humanista com Abordagem Centrada na Pessoa</p>
<p value="Psicologia Infantil">Psicologia Infantil</p>
<p value="Psicologia Organizacional e do Trabalho">Psicologia Organizacional e do Trabalho</p>
<p value="Psicologia Sexual">Psicologia Sexual</p>
<p value="Psicologia Social">Psicologia Social</p>
<p value="Psicomotricidade">Psicomotricidade</p>
<p value="Psicomotricidade com Ênfase em Educação Inclusiva">Psicomotricidade com Ênfase em Educação Inclusiva</p>
<p value="Psicomotricidade com Ênfase em Educação Infantil">Psicomotricidade com Ênfase em Educação Infantil</p>
<p value="Psicomotricidade com Ênfase em Gestão Escolar">Psicomotricidade com Ênfase em Gestão Escolar</p>
<p value="Psicomotricidade com Ênfase em Ludicidade">Psicomotricidade com Ênfase em Ludicidade</p>
<p value="Psicomotricidade e Educação Inclusiva">Psicomotricidade e Educação Inclusiva</p>
<p value="Psicomotricidade e Educação Infantil">Psicomotricidade e Educação Infantil</p>
<p value="Psicomotricidade e Gestão Escolar">Psicomotricidade e Gestão Escolar</p>
<p value="Psicomotricidade e Ludicidade">Psicomotricidade e Ludicidade</p>
<p value="Psicomotricidade, Orientação e Supervisão Escolar">Psicomotricidade, Orientação e Supervisão Escolar</p>
<p value="Psicopatologia e Dependência Química">Psicopatologia e Dependência Química</p>
<p value="Psicopatologia e Psicodiagnóstico Infantil">Psicopatologia e Psicodiagnóstico Infantil</p>
<p value="Psicopedagogia">Psicopedagogia</p>
<p value="Psicopedagogia - Aspectos Teóricos">Psicopedagogia - Aspectos Teóricos</p>
<p value="Psicopedagogia com Ênfase em Educação Inclusiva">Psicopedagogia com Ênfase em Educação Inclusiva</p>
<p value="Psicopedagogia e Educação Especial">Psicopedagogia e Educação Especial</p>
<p value="Psicopedagogia e Educação Inclusiva">Psicopedagogia e Educação Inclusiva</p>
<p value="Psicopedagogia e Educação Infantil">Psicopedagogia e Educação Infantil</p>
<p value="Psicopedagogia Institucional">Psicopedagogia Institucional</p>
<p value="Psicopedagogia Institucional e Clínica - 600 Horas">Psicopedagogia Institucional e Clínica - 600 Horas</p>
<p value="Psicopedagogia Institucional, Clínica e Hospitalar">Psicopedagogia Institucional, Clínica e Hospitalar</p>
<p value="Psicoterapia em Intervenção de Crises e Prevenção do Suicídio">Psicoterapia em Intervenção de Crises e Prevenção do Suicídio</p>
<p value="Psicoterapias">Psicoterapias</p>
<p value="Saúde Mental">Saúde Mental</p>
<p value="Serviço Social - Gestão das Políticas e Projetos Sociais">Serviço Social - Gestão das Políticas e Projetos Sociais</p>
<p value="Serviço Social e Previdência">Serviço Social e Previdência</p>
<p value="Serviço Social e Saúde Mental">Serviço Social e Saúde Mental</p>
<p value="Serviço Social em Saúde Coletiva">Serviço Social em Saúde Coletiva</p>
<p value="Serviço Social em Situações de Desastre">Serviço Social em Situações de Desastre</p>
<p value="Tanatologia Sobre a Morte e o Morrer">Tanatologia Sobre a Morte e o Morrer</p>
<p value="Teoria Psicanalítica">Teoria Psicanalítica</p>
<p value="Terapia de Casal">Terapia de Casal</p>
<p value="Terapia FamiliarTerapias Integrativas e Complementares">Terapia FamiliarTerapias Integrativas e Complementares</p>
<p value="Trabalho Social com Família e Comunidades">Trabalho Social com Família e Comunidades</p>
<p value="Transtorno Borderline e Terapia Cognitivo-Comportamental">Transtorno Borderline e Terapia Cognitivo-Comportamental</p>
<p value="Transtorno do Espectro Autista (TEA) e Transtornos Globais do Desenvolvimento (TGD)">Transtorno do Espectro Autista (TEA) e Transtornos Globais do Desenvolvimento (TGD)</p>
<p value="Transtornos Alimentares, Obesidade e Cirurgia Bariátrica">Transtornos Alimentares, Obesidade e Cirurgia Bariátrica</p>
<p value="Tratamento do Transtorno Bipolar">Tratamento do Transtorno Bipolar</p>
<p value="Tratamento dos Transtornos de Ansiedade e Síndrome do Pânico">Tratamento dos Transtornos de Ansiedade e Síndrome do Pânico</p>

                    </div>
                    </>
                    :
                    <h4>Selecione a área de interesse</h4>
                    }
                </div>



                </div>

                
                
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

                {/* <div className="grade">
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
                </div> */}

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

export { CoursePos }


