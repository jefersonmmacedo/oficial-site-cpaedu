import { Footer } from "../../components/Footer/Footer";
import Navbar2 from "../../components/Nav/Navbar";
import { collection, query, where, getDocs } from "firebase/firestore";
import db from '../../services/firebaseConnection';
import "./postUnic.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Modal from 'react-modal';
import ReactHtmlParser from "react-html-parser";


function PostUnic() {
    const {namepost} = useParams();
    const [modalIsOpen, setIsOpen] = useState(false);

    console.log(namepost);
    const [idPost, setIdPost] = useState('');
    const [title, setTitle] = useState('');
    const [manchete, setManchete] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState("");
    const [text, setText] = useState("");



useEffect(() => {
    async function setDocCourse() {
        const q = query(collection(db, "posts"), where("title", "==", namepost));
        console.log("Olá, Mundo")
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          setIdPost(doc.id);
            setCategory(doc.data().category);
            setImage(doc.data().image); 
            setTitle(doc.data().title) 
            setText(doc.data().text) 
            setManchete(doc.data().manchete) 
        });
    }
    setDocCourse()
}, [namepost])



Modal.setAppElement('#root');
    return (
        <>
             <Navbar2 />
        <div className="PostUnic">
                <div className="title">
                    <div className="text">
                    <h1>{title}</h1>
                    <h3>{manchete}</h3>
                    <h5>{category}</h5>
                    </div>
                </div>
                <div className="subscript">
                    <div className="image">
                        <img src={image} alt={title} />
                    </div>
                </div>

                <div className="aboutCourse">
                    <div className="text">
                        {ReactHtmlParser(text)}
                        <br />
                    </div>

                </div>
        </div>
            <Footer />
        </>
    )
}

export { PostUnic }


