import './contactWhatsapp.css'
import {useState} from 'react'
import {FiFacebook, FiInstagram} from 'react-icons/fi'

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
       <div className="image"></div>
        <div className="icons">
        <a href="https://www.facebook.com/cpaeducacao" target="_blank" rel="noreferrer"><p> <FiFacebook /></p></a>
        <a href="https://www.instagram.com/cpaeducacao/" target="_blank" rel="noreferrer"><p><FiInstagram /></p></a>
            </div>
        </div>
    )
}

export {ContactWhatsapp}