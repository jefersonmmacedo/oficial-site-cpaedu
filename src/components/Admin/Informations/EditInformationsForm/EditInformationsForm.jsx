import './informationsForm.css';

function InformationsForm() {

    function handleInformationsForm(e) {
        e.preventDefault()
        console.log("Informações")
    }
    
    return (
        <div className="informationsForm">
           <h3>Informações do site</h3>
                <form action="" onSubmit={handleInformationsForm}>
                    <div className="contactInformations">
                        <h4>Informações de contato</h4>
                    <input type="text" placeholder="E-mail" />
                    <div className="double">
                    <input type="text" placeholder="Telefone" />
                    <input type="text" placeholder="Whatssapp - ex.: 2199999-8888" />
                    </div>
                    <br />
                    <h5>Informações de endereço</h5>
                    <div className="triple">
                    <input type="text" placeholder="Rua" />
                    <input type="text" placeholder="Número" />
                    <input type="text" placeholder="Bairro" />
                    </div>
                    <div className="triple">
                    <input type="text" placeholder="Cidade" />
                    <input type="text" placeholder="UF" />
                    <input type="text" placeholder="CEP" />
                    </div>
                    <input type="text" placeholder="Referência" />
                    <br />
                    <h5>Redes sociais</h5>
                    <div className="double">
                    <input type="text" placeholder="Instagram" />
                    <input type="text" placeholder="Facebook" />
                    </div>
                    </div>
                    <div className="historyInformations">
                    <br />
                    <h4>Informações sobre a história</h4>
                    <br />
                    <h5>história</h5>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Nossa história" ></textarea>
                    <br />
                    <h5>Missão</h5>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Missão" ></textarea>
                    <br />
                    <h5>Visão</h5>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Visão" ></textarea>
                    <br />
                    <h5>Valores</h5>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Valores" ></textarea>
                    </div>
                    <button type="submit">Enviar informações</button>
                </form>
        </div>
    )
}

export {InformationsForm}