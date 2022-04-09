import './informationsForm.css';

function InformationsForm() {

    function handleInformationsForm(e) {
        e.preventDefault()
        console.log("Informações")
    }
    
    return (
        <div className="informationsForm">
           <h1>Informações do site</h1>
            <div className="form-informationsForm">
                <form action="" onSubmit={handleInformationsForm}>
                    <input type="text" placeholder="E-mail" />
                    <input type="text" placeholder="Telefone" />
                    <input type="text" placeholder="Whatisapp - ex.: 2199999-8888" />
                    <input type="text" placeholder="Endereço" />
                    <button type="submit">Enviar informações</button>
                </form>
            </div>
        </div>
    )
}

export {InformationsForm}