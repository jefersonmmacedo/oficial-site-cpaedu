import "./EJA.css"
import avaliação from '../../assets/images/EJA/avaliação.jpg';
import documentação from '../../assets/images/EJA/documentação.jpg';
import classificação from '../../assets/images/EJA/classificação.jpg';
import método from '../../assets/images/EJA/método.jpg';
import { Footer } from "../../components/Footer/Footer";
import Navbar2 from "../../components/Nav/Navbar";

import {IoHourglassOutline, IoCalendarOutline, IoTimeOutline} from 'react-icons/io5'


function EJA() {
    return (
        <div className="EJA">
                        <Navbar2 />
            <h1>ENSINO MÉDIO A DISTÂNCIA - EJA INTEGRADO AO CURSO TÉCNICO EM ADMINISTRAÇÃO</h1>

            <div className="Block1">
                <div className="image">
                <h3>MÉTODOS DE ESTUDO</h3>
                <img src={método} alt="método" />
                </div>
                <div className="text">
                    <p><b>MÉTODO DE ESTUDO ATRAVÉS DE PLATAFORMA ONLINE:</b></p>
                    <p>O conteúdo teórico para estudo referente a cada fase/disciplina ficará disponível ao aluno através do acesso à plataforma de estudos, assim como as videoaulas indicadas disponíveis na internet. As avaliações de cada disciplina serão realizadas no Polo. Assim que se sentir preparado para realizar cada avaliação, o aluno deverá comparecer no Polo e solicitar o desbloqueio de sua avaliação na secretaria do curso e realizar a prova de forma presencial, através de sua plataforma de estudos online no Polo, obedecendo o tempo máximo de 50 minutos.</p>
                    <p><b>MÉTODO DE ESTUDO ATRAVÉS DE CONTEÚDOS EM PDF OU MATERIAIS IMPRESSOS:</b></p>
                    <p>No ato da matrícula o aluno solicitará o conteúdo impresso ou em PDF de cada disciplina, assim como o simulado com exercícios e gabaritos impressos para estudo.  Assim que se sentir preparado para realizar cada avaliação, o aluno deverá comparecer no Polo e solicitar a avaliação de cada disciplina que deseja concluir. Será entregue prova impressa para aplicação presencial, obedecendo o tempo máximo de 50 minutos para a realização de cada avaliação.</p>
                </div>
            </div>
            <div className="Block2">
                <div className="text">
                    <p>Para a conclusão do curso o aluno realizará 34 avaliações, presenciais,  referente 1ª, 2ª e 3ª fases/anos + Curso Técnico em Administração, cada avaliação possui 10 questões objetivas. O aluno será considerado aprovado obtendo a média mínima de 50% de acertos em cada área de conhecimento.</p>
                </div>
                <div className="image">
                <h3>AVALIAÇÕES</h3>
                <img src={avaliação} alt="Avaliação" />
                </div>
            </div>
            <div className="Block1">
                <div className="image">
                <h3>DOCUMENTAÇÃO E VALIDAÇÃO DO CERTIFICADO</h3>
                <img src={documentação} alt="documentação" />
                </div>
                <div className="text">
                    <p>Após a realização de todas as avaliações, com média mínima alcançada em cada área de conhecimento, o aluno poderá solicitar a Declaração de Conclusão que será entregue em no máximo 7 dias. Em no máximo 90 dias corridos será entregue o Certificado de Conclusão, Histórico Escolar, Diário Oficial e Declaração de Autenticidade originais ao aluno concluinte.</p>
                    <p>Certificação comprovada pelos órgãos competentes, através do parceiro institucional Centro de Ensino Educa Nexus - João Pessoa - PB, credenciado para oferta do EJA EAD Profissionalizante, através da Resolução 043 e 044 - CEE/PB, certificado válido em todo território nacional.</p>
                </div>
            </div>
            <div className="Block2">
                <div className="text">
                    <p>Nosso método para oferta da EJA possui credenciamento e autorização para matricularmos o aluno direto no Ensino Médio, independentemente de ter concluído ou não o Ensino Fundamental, assim como ocorre no programa Encceja. De acordo com a Alínea "c" do Inciso II do Artigo 24 da Lei nº 9.394 de 20 de dezembro de 1996.</p>
                </div>
                <div className="image">
                <h3>CLASSIFICAÇÃO EM SÉRIE/ETAPA DO ENSINO FUNDAMENTAL PARA ACESSO AO ENSINO MÉDIO</h3>
                <img src={classificação} alt="classificação" />
                </div>
            </div>

            <div className="block3">
                <div className="itens">
                    <IoHourglassOutline size={30} />
                    <p><b>Nível: Ensino Médio <br /> Fases: 1ª, 2ª e 3ª</b></p>
                </div>
                <div className="itens">
                   <IoCalendarOutline size={30} />
                   <p><b>Conclusão a partir <br /> de 3 meses</b></p>
                </div>
                <div className="itens">
                   <IoTimeOutline size={30} />
                   <p><b>Estude no <br /> seu tempo</b></p>
                </div>
            </div>

            <div className="button">
                <a href="">Faça sua pré-matrícula</a>
            </div>
            <Footer />
        </div>
    )
}

export { EJA }