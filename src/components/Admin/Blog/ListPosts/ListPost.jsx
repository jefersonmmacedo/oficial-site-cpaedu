import Navbar2 from '../../Nav/Navbar';
import { collection, getDocs, query, where, doc, deleteDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import db from '../../../../services/firebaseConnection';
import { useState, useEffect } from 'react';
import {IoTrashOutline, IoRefreshOutline, IoCreateOutline, IoSearchOutline} from 'react-icons/io5';
import './listPost.css';

function ListPost() {

  const [idPost, setIdPost] = useState('');
  const [title, setTitle] = useState('');
  const [manchete, setManchete] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState("");
  const [text, setText] = useState("");

    const [posts, sePosts] = useState([]);
    const [search, setSearch] = useState("")

    useEffect(() => {
      async function loadCondadatos() {
          const querySnapshot = await getDocs(collection(db, "posts"));  
          const list = []
          querySnapshot.forEach((doc) => {
             // console.log(`${doc.id} => ${doc.data()}`);
            const data = {
              id: doc.id,
              title: doc.data().title,
              image: doc.data().image,
              manchete: doc.data().manchete,
              category: doc.data().category,
              text: doc.data().text,
              date: doc.data().date
              }
              
            console.log(data)
              list.push(data)
            });
            sePosts(list)
      }
  
      loadCondadatos()
  }, []);

  async function handleDeleteCategory(id) {

    const deletar = window.confirm("Deseja deletar a categoria?");
    if(deletar === true) {
      await deleteDoc(doc(db, "posts", id));
      toast.info("Post Deletado.");
      
      window.location.reload(false)
    } 


  }
  async function handleEditCategory(title) {
     
      window.open(`/adm/postedit/${title}`, "_self")

  }

  // const searchLower = search.toLowerCase()
  // const Filterposts = search !== "" ? posts?.filter((course) => (course.title.toLowerCase().includes(searchLower))) : posts
  
  // Filterposts.sort(function (postsA, postsB) {
  //     if (postsA.name == postsB.name)
  //       return 0;
  //     if (postsA.name < postsB.name)
  //       return -1
  //     if (postsA.name > postsB.name)
  //       return 1
  //   });

  if(posts) {
    posts.sort(function(a,b) {
        if(a.date > b.date ) {
            return -1
        } else {
            return true
        }
    })
}

    
    return (
        <div className="ListPost">
        <Navbar2 />
<h1>Blog</h1>
<div className="link">
<a href="/adm/post">Novo post</a>
</div>

<div className="Search">
        <form>
            <button>
                <IoSearchOutline />
            </button>
            <input type="text" placeholder="Digite o que deseja estudar" value={search.toLowerCase()} onChange={(e) => setSearch(e.target.value)}/>
        </form>
        </div>

{posts.map((category) => {
  return (
      <div className="PostUnic" key={category.id}>
        <div className="image">
          <img src={category.image} alt={category.title} />
        </div>
          <div className="text">
               <h3>{category.title}</h3>
               <h5>{category.manchete}</h5>
               <h5>Categoria: {category.category}</h5>
          </div>
          <div className="button">
          <button onClick={() => {handleEditCategory(category.title)}}><IoCreateOutline/></button>
              <button onClick={() => {handleDeleteCategory(category.id)}}><IoTrashOutline/></button>
          </div>
      </div>
  )
})}

</div>
    )
}

export {ListPost}