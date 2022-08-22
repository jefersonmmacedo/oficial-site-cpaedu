import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from '../../services/firebaseConnection';
import "./blogHome.css"

function BlogHome() {
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
                date: doc.data().date,
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

    

    const limitData = posts?.slice(0, 3)
    return(
        <div className="BlogHome">
                        <h1>Blog</h1>

                        <div className="notices">                 
              {limitData.map((depoiment) => {
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
                <h5>{depoiment.manchete.substring(0, 80)}...</h5>
            </div>
            <div className="course">
            <p>Categoria: {depoiment.category}</p>
            </div>
            </div>
            </div>
           )
        })}
                        </div>
        </div>
    )
}

export { BlogHome }