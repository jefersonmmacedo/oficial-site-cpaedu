import "./categories.css"
import noteImg from '../../assets/images/1.png'
import note2Img from '../../assets/images/2.png'
import musicImg from '../../assets/images/3.png'
import smartPhoneImg from '../../assets/images/4.png'
import note3Img from '../../assets/images/5.png'
import noteMessage from '../../assets/images/6.png'
import tabletImg from '../../assets/images/7.png'
import lousaImg  from '../../assets/images/8.png'
import {IoArrowForward} from 'react-icons/io5'

function Categories() {
    return (
        <div className="categories">
            <div className="title">
       <h1>OUSE IR ALÉM</h1> 
<h4>Conheça nossos cursos e formações e começa a estudar hoje mesmo</h4>
                </div>
                <div className="itens">
                    <div className="categorie1">
                        <div className="text">
                            <div className="image">
                    <img src={musicImg} alt="Música" />
                                </div>
                        <h3>Música</h3>
                        <p>Realize seu sonho de aprender a tocar um instrumento musical, cantar com técnica vocal e até mesmo reger um coro.</p>
                            </div>
                        <a href="https://wa.me/5522999942800?text=Olá. Gostaria de saber mais detalhes sobre os cursos de Música" target="_blank">Entre em contato <IoArrowForward/></a>
                      </div>
                    <div className="categorie2">
                        <div className="text">
                            <div className="image">
                        <img src={lousaImg} alt="Mercado de trabalho" />
                                </div>
                        <h3>Aperfeiçoamento profissional EAD</h3>
                        <p>Cursos de aperfeiçoamento profissional. Formato tradicional com formação de turmas, teoria e prática com professor e estágio supervisionado. </p>
                            </div>
                        <a href="https://wa.me/5522999942800?text=Olá. Gostaria de saber mais detalhes sobre os cursos de Mercado de trabalho" target="_blank">Entre em contato <IoArrowForward/></a>
                        </div>
                    <div className="categorie3">
                        <div className="text">
                            <div className="image">
                    <img src={tabletImg} alt="" />
                                </div>
                        <h3>Ensino Médio - EJA EAD</h3>
                        <p>A Educação de Jovens e Adultos (EJA) é destinada a quem tem 18 anos ou mais e não conseguiu concluir os estudos na idade própria, nos cursos de Ensino Fundamental e Médio.</p>
                            </div>
                        <a href="https://wa.me/5522999942800?text=Olá. Gostaria de saber mais detalhes sobre Ensino Médio - EJA EAD" target="_blank">Entre em contato <IoArrowForward/></a>
                        </div>
                    <div className="categorie4">
                        <div className="text">
                            <div className="image">
                    <img src={noteMessage} alt="" />
                                </div>
                        <h3>Cursos Técnicos EAD</h3>
                        <p>Acelere sua entrada no mercado de trabalho, prepare-se para lidar com uma sociedade desenvolvida tecnologicamente</p>
                            </div>
                        <a href="https://wa.me/5522999942800?text=Olá. Gostaria de saber mais detalhes sobre Técnicos EAD" target="_blank">Entre em contato <IoArrowForward/></a>
                        </div>
                    <div className="categorie1">
                        <div className="text">
                            <div className="image">
                        <img src={note3Img} alt="" />
                                </div>
                        <h3>Graduação EAD</h3>
                        <p>A nossa proposta pedagógica inclui foco na área de seu interesse, por meio de estudos indicados em videoaulas, material didático em PDF e impresso.</p>
                            </div>
                          <a href="https://wa.me/5522999942800?text=Olá. Gostaria de saber mais detalhes sobre Graduação EAD" target="_blank">Entre em contato <IoArrowForward/></a>
                        </div>
                    <div className="categorie2">
                        <div className="text">
                            <div className="image">
                    <img src={note2Img} alt="" />
                                </div>
                        <h3>Pós-graduação EAD</h3>
                        <p>Aprofunde seus conhecimentos, mantenha-se atualizado, adquira novas competências. Conclusão a partir de 4 meses.</p>
                            </div>
                          <a href="https://wa.me/5522999942800?text=Olá. Gostaria de saber mais detalhes sobre Pós Graduação EAD" target="_blank">Entre em contato <IoArrowForward/></a>
                        </div>
                    <div className="categorie3">
                        <div className="text">
                            <div className="image">
                    <img src={noteImg} alt="" />
                                </div>
                        <h3>2º Curso Superior EAD</h3>
                        <p>Invista em seu futuro profissional e tenha mais de uma graduação em seu currículo. Conclusão a partir de 6 meses.</p>
                            </div>
                          <a href="https://wa.me/5522999942800?text=Olá. Gostaria de saber mais detalhes sobre 2º Curso Superior EAD" target="_blank">Entre em contato <IoArrowForward/></a>
                        </div>
                    <div className="categorie4">
                        <div className="text">
                            <div className="image">
                    <img src={smartPhoneImg} alt="" />
                                </div>
                        <h3>Acesse Nossa Loja Virtual</h3>
                        <p>Torne seu currículo mais atraente para o mercado de trabalho, invista em sua qualificação profissional.</p>
                            </div>
                          <a href="https://ead.cpaedu.com.br/loja_virtual/index.php" target="_blank">Entre em contato <IoArrowForward/></a>
                        </div>
                    </div>
            </div>
    )
}

export {Categories}