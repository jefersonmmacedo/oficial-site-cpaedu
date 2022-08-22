import { NewPost } from "../../../../components/Admin/Blog/NewPost/NewPosts";
import Navbar2 from "../../../../components/Admin/Nav/Navbar";
import "./newPost2.css"

function NewPost2() {
    return (
        <div className="NewPost2">
        <Navbar2 />
        <NewPost />
    </div>
    )
}

export {NewPost2}