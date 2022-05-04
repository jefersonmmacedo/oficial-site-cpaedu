import Navbar2 from "../Nav/Navbar"
import "./dashboard.css"

function Dashboard() {
    return (
        <div className="dashboard">
            <Navbar2 />
            <h1>Seja bem vindo. O que deseja fazer hoje?</h1>
            <div className="blocks">
                <div className="blockUnic">
                    <h3>Categorias</h3>
                    <p>X Novas Categorias Criadas</p>
                    <a href="#">Nova Categoria</a>
                </div>
                
                <div className="blockUnic">
                    <h3>Cursos</h3>
                    <p>X Novos Cursos Criadas</p>
                    <a href="#">Novo curso</a>
                </div>
                <div className="blockUnic">
                    <h3>Depoimentos</h3>
                    <p>X Novos Depoimentos Criadas</p>
                    <a href="#">Novo depoimento</a>
                </div>
                <div className="blockUnic">
                    <h3>Sliders</h3>
                    <p>X Novos Sliders Criadas</p>
                    <a href="#">Novo slider</a>
                </div>
                <div className="blockUnic">
                    <h3>Informações</h3>
                    <p>Deseja editar as informações?</p>
                    <a href="#">Editar Informações</a>
                </div>
            </div>
        </div>
    )
}

export { Dashboard }