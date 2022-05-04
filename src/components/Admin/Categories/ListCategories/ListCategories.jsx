import Navbar2 from '../../Nav/Navbar';
import './listCategories.css';

function ListCategories() {

    const Categories = [
        {"nome" : "Música",
        "curso": "Ensino Médio EJA",
        },

        {"nome" : "GRaduação",
        "curso": "Graduação"},

        {"nome" : "EJA",
        "curso": "2 Graduação"},
    ]
    
    return (
        <div className="ListCategories">
        <Navbar2 />
<h1>Categoria</h1>
<div className="link">
<a href="/adm/categorynew">Nova categoria</a>
</div>

{Categories.map((depoiment) => {
  return (
      <div className="CategoriesUnic" key={depoiment.id}>
          <div className="text">
               <h5>{depoiment.nome}</h5>
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

export {ListCategories}