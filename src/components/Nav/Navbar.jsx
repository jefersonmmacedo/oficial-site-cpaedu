import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import LogoImg from '../../assets/images/logo.png'

const Nav = styled.nav`
  width: 100%;
  height: 65px;
  border-bottom: 1px solid #f1f1f1;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 97;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(4px);
  font-size: 14px;
  color: var(--Primary)


  .logo {
    padding: 15px 0;
  }
  .logo a img {
    height: 50px;
  }
`

const Navbar2 = () => {
  return (
    <Nav>
      <div className="logo">
        <a href="/">
      <img src={LogoImg} alt="Logo CPA Educacional" />
        </a>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar2
