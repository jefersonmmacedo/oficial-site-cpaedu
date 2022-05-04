import { InformationsForm } from "../../../components/Admin/Informations/InformationsForm/InformationsForm";
import Navbar2 from "../../../components/Admin/Nav/Navbar";

function Informations() {
    return (
        <div className="informations">
                                 <Navbar2 />
            <InformationsForm />
        </div>
    )
}

export { Informations }