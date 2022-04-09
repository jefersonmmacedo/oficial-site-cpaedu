import './contactWhatsapp.css'
import {useState} from 'react'

function ContactWhatsapp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [courses, setCourses] = useState("");

    function handleCourses(e) {
        setCourses(e.target.value)
    }

    function handleMessage(e) {
        e.preventDefault()

        const text = `Olá, me chamo ${name}! %0AGostaria de saber mais detalhes sobre seus cursos.%0A%0ATenho interesse nos cursos de ${courses}.%0A%0AMinhas informações de contato%0ATelefone: ${phone}%0AE-mail: ${email}.`
        const text2 = `Olá, me chamo ${name}! %0AGostaria de saber mais detalhes sobre seus cursos.%0A%0A.%0A%0AMinhas informações de contato%0ATelefone: ${phone}%0AE-mail: ${email}.`
        console.log("Click")
        console.log(name)
        console.log(email)
        console.log(phone)
        console.log(courses)

        if(courses === "Outros") {
            window.open("https://wa.me/5522999942800?text=" + text2,
            '_blank')

        } else {

            window.open("https://wa.me/5522999942800?text=" + text,
            '_blank')
        }
    }

    return (
        <div className="whatsapp">
        <h1>Entre em conato</h1>
        <form action="" onSubmit={handleMessage}>
            <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} required/>
            <input type="email" placeholder="Email" value={email} onChange={(e) =>  setEmail(e.target.value)} required/>
            <input type="text" placeholder="Telefone" value={phone} onChange={(e) =>  setPhone(e.target.value)} required/>
            <select value={courses} onChange={handleCourses} required>
                <option value="">Qual curso deseja?</option>
                <option value="Música">Música</option>
                <option value="Cursos Profissionalizantes">Cursos Profissionalizantes</option>
                <option value="Ensino Médio - EJA EAD">Ensino Médio - EJA EAD</option>
                <option value="Cursos Técnicos EAD">Cursos Técnicos EAD</option>
                <option value="Graduação EAD">Graduação EAD</option>
                <option value="Pós-graduação EAD">Pós-graduação EAD</option>
                <option value="2º Curso Superior EAD">2º Curso Superior EAD</option>
                <option value="Outros">Outros</option>
            </select>
            <button>Enviar mensagem</button>
        </form>
        </div>
    )
}

export {ContactWhatsapp}