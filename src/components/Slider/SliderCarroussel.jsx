import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from '../../services/firebaseConnection';
import Slider from "react-slick";
import "./sliderCarroussel.css"




function SliderCarroussel() {
  const [carroussel, setCarroucel] = useState([]); 

  useEffect(() => {
    async function loadCondadatos() {
        const querySnapshot = await getDocs(collection(db, "sliders"));  
        const list = []
        querySnapshot.forEach((doc) => {
           // console.log(`${doc.id} => ${doc.data()}`);
          const data = {
            id: doc.id,
            title: doc.data().title,
            availability: doc.data().title,
            image: doc.data().image,
            link: doc.data().link,
            position: doc.data().position,
            }
            
          console.log(data)
            list.push(data)
          });
          setCarroucel(list)
    }

    loadCondadatos()
}, [])

console.log(carroussel)


const NewCarroussel = carroussel.sort(function(a,b) {
  if(a.position < b.position ) {
      return -1
  } else {
      return true
  }
})

console.log(NewCarroussel)

  var settings = {
    arrows: false,
    autoplay: true,
    vertical: true,
    rtl: true,
    slickPrev: true,
    autoplaySpeed: 10000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
 
  return (
    <Slider {...settings}>
      {NewCarroussel.map((list) => {
        return (
      <div className="slider-carrousel">
      <a href={list.link}>
        <img src={list.image} alt={list.title + "" + list.position} />
      </a>
      </div>
        )
      })}

    </Slider>
  )
}

export { SliderCarroussel }