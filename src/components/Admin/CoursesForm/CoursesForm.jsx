import './coursesForm.css';

function CoursesForm() {

    function handleCoursesForm(e) {
        e.preventDefault()
        console.log("Informações")
    }
    
    return (
        <div className="coursesForm">
           <h1>Cadastrar depoimento</h1>
            <div className="form-CoursesForm">
                <form action="" onSubmit={handleCoursesForm}>
                    <input type="text" placeholder="Nome do curso" />
                    <input type="text" placeholder="Descrição" />

                    <select name="" id="">
                        <option value="">Categoria</option>
                        <option value="">EAD</option>
                        <option value="">Graduação</option>
                    </select>
                    <input type="text" placeholder="Imagem" />
                    <input type="text" placeholder="Link do Vídeo" />

                    <div className="carga">
                    <input type="text" placeholder="Duração" />
                    <select name="" id="">
                        <option value="">Tempo</option>
                        <option value="">Horas</option>
                        <option value="">Dias</option>
                        <option value="">Semanas</option>
                        <option value="">Meses</option>
                    </select>
                    </div>

                    <div className="tempo">
                    <input type="text" placeholder="Descrição" />
                    <select name="" id="">
                        <option value="">Tempo</option>
                        <option value="">Horas</option>
                        <option value="">Dias</option>
                        <option value="">Semanas</option>
                        <option value="">Meses</option>
                    </select>
                    </div>

                    <select name="" id="">
                        <option value="">Onde comprar</option>
                        <option value="">Loja virtual</option>
                        <option value="">Whatsapp</option>
                    </select>

                   <textarea name="" id="" cols="30" rows="10" placeholder="Grade Currícular"></textarea>
                   <textarea name="" id="" cols="30" rows="10" placeholder="Vantagens"></textarea>
                   <textarea name="" id="" cols="30" rows="10" placeholder="Outras informações"></textarea>
                    <button type="submit">Cadastrar depoimento</button>
                </form>
            </div>
        </div>
    )
}

export {CoursesForm}