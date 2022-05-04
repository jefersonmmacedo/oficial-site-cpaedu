import { CategoriesForm } from "../../../../components/Admin/Categories/CategoriesForm/CategoriesForm"
import Navbar2 from "../../../../components/Admin/Nav/Navbar"

function NewCategories () {
    return (
        <div className="newCategories">
                                 <Navbar2 />
                <CategoriesForm />
        </div>
    )
}

export { NewCategories }