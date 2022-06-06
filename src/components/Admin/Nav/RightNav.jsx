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
    background-color: blue;
    border-radius: 6px;
    margin : 15px 0;
    color: #fff;
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

function handleOficialSite(e) {
  e.preventDefault();

  window.open("https://www.cpaedu.com.br/")
}

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
       <li className='nav-item'>
            <Link to='/adm/dashboard'>
              Dashboard
            </Link>
          </li>
       <li className='nav-item'>
            <Link to='/adm/category'>
              Categorias
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/adm/course' >
              Cursos
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/adm/depoiment' >
              Depoimentos
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/adm/slider' >
              Sliders
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/adm/informations' >
              Informações
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/adm/dashboard' >
              LandingPage
            </Link>
          </li>
          <button onClick={handleOficialSite}>
            Site Oficial
          </button>

         
    </Ul>
  )
}

export default RightNav
