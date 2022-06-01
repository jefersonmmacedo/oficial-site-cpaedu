import "./elementsHome.css";
import {IoSchoolOutline, IoMusicalNoteOutline, IoTrendingUpOutline, IoBusinessOutline} from 'react-icons/io5'

function ElementsHome() {
    return (
        <div className="ElementsHome">
            <div className="bar"></div>
            <h1><b>MOTIVOS PARA ESCOLHER</b> A CPAEDU</h1>
            <div className="elements">
                <div className="itensElements">
                    <IoMusicalNoteOutline />
                    <h4><b>MUSICA E REALIZAÇÃO PESSOAL</b></h4>
                    <h4>Realize seu sonho de aprender a tocar um instrumento musical, cantar com técnica vocal e até mesmo reger um coro.</h4>
                </div>
                <div className="itensElements">
                <IoSchoolOutline />
                    <h4><b>ENSINO MÉDIO - EJA</b></h4>
                    <h4>A Educação de Jovens e Adultos (EJA) é destinada a quem tem 18 anos ou mais e não conseguiu concluir os estudos na idade própria, nos cursos de Ensino Fundamental e Médio.  </h4>
                </div>
                <div className="itensElements">
                <IoBusinessOutline />
                    <h4><b>TÉCNICOS E PROFISSIONALIZANTES</b></h4>
                    <h4>Formato tradicional com formação de turmas, teoria e prática com professor e estágio supervisionado. </h4>
                </div>
                <div className="itensElements">
                <IoTrendingUpOutline />
                    <h4><b>GRADUAÇÕES E PÓS GRADUAÇÕES</b></h4>
                    <h4>A nossa proposta pedagógica inclui foco na área de seu interesse, por meio de estudos indicados em videoaulas, material didático em PDF e impresso. </h4>
                </div>
            </div>
            <a href="/contato" >INSCREVA-SE AGORA</a>
        </div>
    )
}

export { ElementsHome }


