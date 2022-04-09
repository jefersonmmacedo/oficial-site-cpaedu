import { useState } from "react";
import "./depoiments.css"

function Depoiments() {


    const depoiments = [
        {
            id: "1",
            image: "https://faculdadeanclivepa.edu.br/wp-content/uploads/2021/06/topo-aluno-2.jpg",
            depiment: "Terminei minha pós, nessa instituição que só me deu alegrias, todas as dificuldades que tive, foram logo resolvidas, as disciplinas excelentes, um atendimento maravilhoso!! Só tenho a agradecer a vocês que me ajudaram a chegar até aqui!",
            name: "Brígida Garcia",
            course: "Pós graduanda em Neuropsicopedagogia em Desenvolvimento Humano",
    },
        {
            id: "2",
            image: "https://faculdadeanclivepa.edu.br/wp-content/uploads/2021/06/topo-aluno-2.jpg",
            depiment: "Terminei minha pós, nessa instituição que só me deu alegrias, todas as dificuldades que tive, foram logo resolvidas, as disciplinas excelentes, um atendimento maravilhoso!! Só tenho a agradecer a vocês que me ajudaram a chegar até aqui!",
            name: "Vanderlei Gomes",
            course: "Curso Bateria",
    },
        {
            id: "3",
            image: "https://faculdadeanclivepa.edu.br/wp-content/uploads/2021/06/topo-aluno-2.jpg",
            depiment: "Terminei minha pós, nessa instituição que só me deu alegrias, todas as dificuldades que tive, foram logo resolvidas, as disciplinas excelentes, um atendimento maravilhoso!! Só tenho a agradecer a vocês que me ajudaram a chegar até aqui!",
            name: "Angela Motta",
            course: "Graduanda Administração",
    },
        {
            id: "4",
            image: "https://faculdadeanclivepa.edu.br/wp-content/uploads/2021/06/topo-aluno-2.jpg",
            depiment: "Terminei minha pós, nessa instituição que só me deu alegrias, todas as dificuldades que tive, foram logo resolvidas, as disciplinas excelentes, um atendimento maravilhoso!! Só tenho a agradecer a vocês que me ajudaram a chegar até aqui!",
            name: "Ana Carolina",
            course: "GRaduada em Advocacia",
    },
        {
            id: "5",
            image: "https://faculdadeanclivepa.edu.br/wp-content/uploads/2021/06/topo-aluno-2.jpg",
            depiment: "Terminei minha pós, nessa instituição que só me deu alegrias, todas as dificuldades que tive, foram logo resolvidas, as disciplinas excelentes, um atendimento maravilhoso!! Só tenho a agradecer a vocês que me ajudaram a chegar até aqui!",
            name: "Jeferson Santos",
            course: "Pós graduando em Análise e desenvolvimento de sistemas",
    },
        {
            id: "6",
            image: "https://faculdadeanclivepa.edu.br/wp-content/uploads/2021/06/topo-aluno-2.jpg",
            depiment: "Terminei minha pós, nessa instituição que só me deu alegrias, todas as dificuldades que tive, foram logo resolvidas, as disciplinas excelentes, um atendimento maravilhoso!! Só tenho a agradecer a vocês que me ajudaram a chegar até aqui!",
            name: "Marcos Souza",
            course: "Graduando em Psicologia",
    },
    ];


    const [depoimentSelected, setDepoimentSelected] = useState(depoiments[0]);
    console.log(depoimentSelected)



    function handleCircle(id) {
        const filter = depoiments.filter(depoiment => id === depoiment.id);
        setDepoimentSelected(filter[0])
    }

    return (
        <div className="depoiments">
                <div className="depoimentUnic">
                <div className="image">
                    <img src={depoimentSelected.image} alt={depoimentSelected.name} />
                </div>
                <div className="text">
                <h3>{depoimentSelected.depiment}</h3>                </div>
                <div className="name">
                    <h4>{depoimentSelected.name}</h4>
                </div>
                <div className="course">
                <p>{depoimentSelected.course}</p>
                </div>
            </div>


            <div className="select">
                    {depoiments.map((indice) => {
                        return (
                            <>
                            <button key={indice.id} onClick={() =>{ handleCircle(indice.id)}}> {indice.id}</button>
                        </>
                        )
                    }) }
            </div>
        </div>
    )
}

export {Depoiments}