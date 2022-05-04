import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }
  li a{
    text-decoration: none;
    color: #fff;
  }
  button {
    display: flex;
    padding: 10px 10px;
    background-color: #fff;
    border-radius: 6px;
    margin : 20px 0;
    color: var(--Primary);
    border: none;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }


  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;

function HandleOpen(e) {
  e.preventDefault();

  window.open("https://wa.me/5522999942800?text=Olá. Gostaria de saber mais detalhes sobre cursos")
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
            <Link to='/cursos' >
              Cursos
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/contato' >
              Contato
            </Link>
          </li>
          <li className='nav-item'>
            <Link to="https://ead.cpaedu.com.br/loja_virtual/index.php" target="_blank" >
              Loja Virtual
            </Link>
          </li>
          <button onClick={HandleOpen}>
            Atendimento
          </button>

         
    </Ul>
  )
}

export default RightNav
