import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import Navbar2 from "../../components/Nav/Navbar";
import db from '../../services/firebaseConnection';
import "./blogPage.css"

function BlogPage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function loadCondadatos() {
            const querySnapshot = await getDocs(collection(db, "posts"));  
            const list = []
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
              const data = {
                id: doc.id,
                title: doc.data().title,
                image: doc.data().image,
                manchete: doc.data().manchete,
                text: doc.data().text,
                category: doc.data().category,
                }
                
                console.log(data)
                list.push(data)
              });
              setPosts(list)
        }
    
        loadCondadatos()
    }, [])

    if(posts) {
        posts.sort(function(a,b) {
            if(a.date > b.date ) {
                return -1
            } else {
                return true
            }
        })
    }

    
    return(
        <div className="BlogPage">
                        <Navbar2 />
                        <h1>Blog</h1>

                        <div className="Main">
                        <div className="notices">                 
              {posts.map((depoiment) => {
           return (
            <div className="noticesAll" key={depoiment.id}>
            <div className="image">
            <a href={`/blog/post/${depoiment.title}`}>
                <img src={depoiment.image} alt={depoiment.name} />
                </a>
            </div>
            <div className="text">
            <div className="depoiment">
            <h4><a href={`/blog/post/${depoiment.title}`}>{depoiment.title}</a></h4>
            </div>
            <div className="name">
                <h5>{depoiment.manchete}</h5>
            </div>
            <div className="course">
            <p>{depoiment.category}</p>
            </div>
            </div>
            </div>
           )
        })}
                         </div>
                            {/* <div className="categories">

                            </div> */}
                        </div>

        <Footer />
        </div>
    )
}

export { BlogPage }