import { DepoimentsForm } from "../../../../components/Admin/Depoiments/DepoimentsForm/DepoimentsForm"
import Navbar2 from "../../../../components/Admin/Nav/Navbar"
import "./newDepoiments.css"
function NewDepoiments () {
    return (
        <div className="newDepoiments">
                                 <Navbar2 />
                <DepoimentsForm />
        </div>
    )
}

export { NewDepoiments }