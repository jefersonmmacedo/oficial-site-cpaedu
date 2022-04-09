import './depoimentsForm.css';

function DepoimentsForm() {

    function handleDepoimentsForm(e) {
        e.preventDefault()
        console.log("Informações")
    }
    
    return (
        <div className="depoimentsForm">
           <h1>Cadastrar depoimento</h1>
            <div className="form-depoimentsForm">
                <form action="" onSubmit={handleDepoimentsForm}>
                    <input type="text" placeholder="Nome do aluno" />
                    <input type="text" placeholder="Curso" />
                   <textarea name="" id="" cols="30" rows="10" placeholder="Depoimento"></textarea>
                    <button type="submit">Cadastrar depoimento</button>
                </form>
            </div>
        </div>
    )
}

export {DepoimentsForm}