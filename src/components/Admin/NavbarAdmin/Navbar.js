import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import LogoImg from '../../assets/images/logo.png'

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
    
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
         <img src={LogoImg} alt="Logo CPA Educacional" />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Dasboard
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
              Categorias
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/courses'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Cursos <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <a
               href='https://ead.cpaedu.com.br/loja_virtual/index.php'
              className='nav-links'
              target="_blank" rel="noreferrer"
              onClick={closeMobileMenu}
            >
              Sliders
            </a>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Depoimentos
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Informações
            </Link>
          </li>
          <li>
          <a href="https://wa.me/5522999942800?text=Olá. Gostaria de saber mais detalhes sobre os cursos"
          className='nav-links-mobile'
          onClick={closeMobileMenu}
          target="_blank" rel="noreferrer">
            Participar do sorteio
            </a>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
