import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slider1 from '../../assets/images/carroussel/slider1.png';
import slider2 from '../../assets/images/carroussel/slider2.png';
import slider3 from '../../assets/images/carroussel/slider3.png';
import "./slider.css"


function Slider() {
    const ministuras = []
    
    function renderThumbs(children) {
       return children
    }
    return (
        <div className="slider" >
             <Carousel autoPlay={true} infiniteLoop={true} onChange={renderThumbs}>
                <div>
                    <img src={slider1} />
                </div>
                <div>
                    <img src={slider2} />
                </div>
                <div>
                    <img src={slider3} />
                </div>
            </Carousel>
        </div>
    )
}

export { Slider }