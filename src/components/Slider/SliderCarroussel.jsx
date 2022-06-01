import { useState } from "react";
import Slider from "react-slick";
import slider1 from '../../assets/images/carroussel/slider1.png';
import slider2 from '../../assets/images/carroussel/slider2.png';
import slider3 from '../../assets/images/carroussel/slider3.png';
import "./sliderCarroussel.css"




function SliderCarroussel() {

  const [carroussel, setCarroucel] = useState([
    {
      link: "https://google.com.br",
      image:slider1,
      alt: "Imagem do slider carroussel"
    },
    {
      link: "https://google.com.br",
      image:slider2,
      alt: "Imagem do slider carroussel"
    },
    {
      link: "https://google.com.br",
      image:slider3,
      alt: "Imagem do slider carroussel"
    }
  ]); 

  var settings = {
    arrows: false,
    autoplay: true,
    vertical: true,
    rtl: true,
    slickPrev: true,
    autoplaySpeed: 5000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
 
  return (
    <Slider {...settings}>
      {carroussel.map((list) => {
        return (
      <div className="slider-carrousel">
      <a href={list.link}>
        <img src={list.image} alt={list.âlt} />
      </a>
      </div>
        )
      })}

    </Slider>
  )
}

export { SliderCarroussel }