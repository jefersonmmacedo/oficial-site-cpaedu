import Navbar2 from '../../Nav/Navbar';
import './listCourse.css';

function ListCourse() {

    const Courses = [
        {"nome" : "Violão",
        "valor": "R$ 99,99",
        "promocao": "R$ 69,99",
        "Availability":"Disponível"
        },

        {"nome" : "Bateria",
        "valor": "R$ 99,99",
        "promocao": "R$ 79,99",
        "Availability":"Aguardar"
    },

        {"nome" : "C. Baixo",
        "valor": "R$ 109,99",
        "promocao": "R$ 89,99",
        "Availability":"Disponível"
    },
    ]
    
    return (
        <div className="ListCourses">
        <Navbar2 />
<h1>Curso</h1>
<div className="link">
<a href="/adm/coursenew">Novo curso</a>
</div>

{Courses.map((depoiment) => {
  return (
      <div className="CoursesUnic" key={depoiment.id}>
          <div className="text">
               <h5>{depoiment.nome}</h5>
               <h5>-</h5>
               <h5>Valor: {depoiment.valor}</h5>
               <h5>-</h5>
               <h5>Promocional: {depoiment.promocao}</h5>
               <h5>-</h5>
               <select>
                   <option value={depoiment.Availability}>{depoiment.Availability}</option>
                   <option value={depoiment.Availability === "Disponível"? "Aguardar": "Disponível"}>{depoiment.Availability === "Disponível"? "Aguardar": "Disponível"}</option>
               </select>
          </div>
          <div className="button">
              <button>Atualizar</button>
              <button>Editar</button>
              <button>Deletar</button>
          </div>
      </div>
  )
})}

</div>
    )
}

export {ListCourse}