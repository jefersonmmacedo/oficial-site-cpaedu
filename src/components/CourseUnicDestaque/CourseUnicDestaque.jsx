import './courseUnicDestaque.css';
import {IoSchool, IoBook} from "react-icons/io5"

function CourseUnicDestaque(image, course, category, modalidade) {
    return (
        <div className="CourseUnicDestaque">
            <div className="image">
                <img src={image} alt={image} />
            </div>
            <h3>{course} - {category}</h3>

            <div className="info">
                <div className="icon">
                    <IoSchool />
                </div>
                <div className="text">
                    <h3>FORMAÇÃO</h3>
                    <h4>{category}</h4>
                </div>
            </div>
            <div className="info">
                <div className="icon">
                    
                </div>
                <div className="text">
                    <h3>MODALIDADE</h3>
                    <h4>{modalidade}</h4>
                </div>
            </div>
        </div>
    )
}

export { CourseUnicDestaque }