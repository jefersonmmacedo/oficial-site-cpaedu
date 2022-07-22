import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {IoLogoWhatsapp} from 'react-icons/io5'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }
  li a{
    text-decoration: none;
    color: var(--Primary);
    font-weight: 500;
  }
  li a:hover{
    color: var(--White);
  }
  button {
    display: flex;
    padding: 5px 10px;
    background-color: var(--Primary);
    border-radius: 6px;
    margin : 20px 0;
    color: var(--White);
    border: none;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;

  }

  button:hover{
    background-color: var(--Blue);
  }
  .btn {
    display: flex;
    padding: 5px 10px;
    background-color: var(--Yellow);
    border-radius: 6px;
    margin : 20px 0;
    color: var(--White);
    border: none;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;

  }

  btn:hover{
    background-color: var(--Blue);
  }


  @media (max-width: 950px) {
    flex-flow: column nowrap;
    background: rgba(81, 42, 121, 0.95);
    backdrop-filter: blur(4px);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      padding: 5px;
      margin: -20px 10px;
    }
    li a {
      color: var(--White);
    }
    li a:hover {
      color: var(--Magenta);
    }

    button{
      background-color: var(--Blue);
      margin-left: 10px;
      margin-right: 10px;
    }
    button svg {
      margin-right: 10px;
    }

    button:hover{
      background-color: var(--Yellow);
    }
  }
    .btn{
      background-color:  var(--Yellow);
      margin-left: 10px;
      margin-right: 10px;
    }
    .btn svg {
      margin-right: 10px;
    }

    .btn:hover{
      background-color: var(--Blue);
    }
  }
`;

function HandleOpen(e) {
  e.preventDefault();

  window.open("https://wa.me/5522999942800?text=Olá. Gostaria de saber mais detalhes sobre cursos")
}
function HandleOpenStudent(e) {
  e.preventDefault();

  window.open("/areadoaluno", "_self")
}


const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
       <li className='nav-item'>
            <Link to='/'>
              Início
            </Link>
          </li>
       <li className='nav-item'>
            <Link to='/sobre'>
              Quem Somos
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/cursos/selecione' >
              Cursos
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/depoimentos' >
              Depoimentos
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/parceiros' >
              Parceiros
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/contato' >
              Contato
            </Link>
          </li>
          <li className='nav-item'>
            <a href="https://ead.cpaedu.com.br/loja_virtual/index.php" target="_blank"  rel="noreferrer">
              Loja Virtual
            </a>
          </li>
          <button onClick={HandleOpen}>
            <IoLogoWhatsapp /> &nbsp; Atendimento
          </button>
          <button className="btn" onClick={HandleOpenStudent}>
          Área do aluno
          </button>

          
    </Ul>
  )
}

export default RightNav
