import Navbar2 from "../../../../components/Admin/Nav/Navbar"
import { SliderForm } from "../../../../components/Admin/Sliders/SliderForm/SliderForm";

function NewSliders () {
    return (
        <div className="newSliders">
                                 <Navbar2 />
                <SliderForm />
        </div>
    )
}

export { NewSliders }