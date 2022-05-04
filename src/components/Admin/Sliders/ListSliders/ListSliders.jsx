import Navbar2 from '../../Nav/Navbar';
import './listSliders.css';
import slider1 from '../../../../assets/images/carroussel/slider1.png'
import slider2 from '../../../../assets/images/carroussel/slider2.png'
import slider3 from '../../../../assets/images/carroussel/slider3.png'

function ListSliders() {

    const Sliders = [
        {"titulo" : "Slider 1",
        "imagem": slider1
        },

        {"titulo" : "Slider 2",
        "imagem": slider2
    },

        {"titulo" : "Slider 3",
        "imagem": slider3
    },
    ]
    return (
        <div className="ListSliders">
                     <Navbar2 />
                     <h1>Sliders</h1>
<div className="link">
<a href="/adm/slidernew">Novo slider</a>
</div>

{Sliders.map((Slider) => {
  return (
      <div className="SlidersUnic" key={Slider.id}>
          <div className="text">
               <img src={Slider.imagem} alt="Slider.imagem"  height="50px"/>
               <h5>-</h5>
               <h5>{Slider.titulo}</h5>
          </div>
          <div className="button">
              <button>Editar</button>
              <button>Deletar</button>
          </div>
      </div>
  )
})}
          
        </div>
    )
}

export {ListSliders}