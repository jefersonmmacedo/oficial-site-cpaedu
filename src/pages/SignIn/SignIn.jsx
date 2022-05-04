import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./signIn.css"

function SignIn() {
    const Local = localStorage.getItem("cpaedu");
    const userLocal = JSON.parse(Local)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const mylogin =  process.env.REACT_APP_LOGIN_SITE;
    const mypassword = process.env.REACT_APP_PASSWORD_SITE;

    useEffect(() => {
        function redirectToPage() {
            if(userLocal !== "" || userLocal !== undefined) {
                window.open("/adm/dashboard", "_self")
            }
        }

        redirectToPage()
    }, [])

    function handleSubmit(e) {
        e.preventDefault()
        if(username !== mylogin) {
            toast.error("Nome de Usuário Errado!");
            return
        }
        if(password !== mypassword) {
            toast.error("Senha errada!");
            return
        }

        const data = {username, password}
        localStorage.setItem("cpaedu", JSON.stringify(data));     
        window.open("/adm/dashboard", "_self")
    }

    return (
        <div className="signIn">
            <form action="">
            <h3>Acesso a administração</h3>
            <input type="text" placeholder="Usuário" value={username} onChange={(e) => {setUsername(e.target.value)}}/>
            <input type="password" placeholder="********" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
            
            <button onClick={handleSubmit}>Entrar</button>
            </form>

            <a href="">Ir para o site oficial</a>
        </div>
    )
}

export { SignIn }