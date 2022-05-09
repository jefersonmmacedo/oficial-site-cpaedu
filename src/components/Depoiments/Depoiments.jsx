import { collection, getDocs } from "firebase/firestore";
import db from '../../services/firebaseConnection';
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "./depoiments.css"

function Depoiments() {

    const [depoiments, setDepoiments] = useState([]);

    useEffect(() => {
    async function loadCondadatos() {
        const querySnapshot = await getDocs(collection(db, "depoiments"));  
        const list = []
        querySnapshot.forEach((doc) => {
      //      console.log(`${doc.id} => ${doc.data()}`);
          const data = {
            id: doc.id,
            name: doc.data().name,
            image: doc.data().image,
            course: doc.data().course,
            depoiment: doc.data().depoiment,
            }
            
            // console.log(data)
            list.push(data)
          });
          setDepoiments(list)
    }

    loadCondadatos()
}, [])


const newDepoiments = depoiments.slice(0,5)

var settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
 

    return (
        <Slider {...settings}>
        {newDepoiments.map((depoiment) => {
           return (
            <div className="depoimentUnic" key={depoiment.id}>
            <div className="image">
                <img src={depoiment.image} alt={depoiment.name} />
            </div>
            <div className="text">
            <h3>{depoiment.depoiment}</h3>                </div>
            <div className="name">
                <h4>{depoiment.name}</h4>
            </div>
            <div className="course">
            <p>{depoiment.course}</p>
            </div>
            </div>
           )
        })}
    </Slider>
    )
}

export {Depoiments}