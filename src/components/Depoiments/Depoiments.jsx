import "./depoiments.css"

function Depoiments() {
    return (
        <div className="depoiments">
            <div className="depoimentUnic">
                <div className="image">
                    <img src="https://faculdadeanclivepa.edu.br/wp-content/uploads/2021/06/topo-aluno-2.jpg" alt="Aluno do curso" />
                </div>
                <div className="text">
                <h3>"Terminei minha pós, nessa instituição que só me deu alegrias, todas as dificuldades que tive, foram logo resolvidas, as disciplinas excelentes, um atendimento maravilhoso!!
Só tenho a agradecer a vocês que me ajudaram a chegar até aqui!"</h3>                </div>
                <div className="name">
                    <h4>Brígida Garcia</h4>
                </div>
                <div className="course">
                <p>Pós graduanda em Neuropsicopedagogia em Desenvolvimento Humano</p>
                </div>
            </div>
        </div>
    )
}

export {Depoiments}