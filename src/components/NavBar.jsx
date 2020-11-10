import React  from 'react'
import styled from 'styled-components'
import logo       from '../img/logoLi.svg'

export const NavBarStyles = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 10;
  height: 90px;
  font-family: 'OpenSansBold';

  .logo {
    padding: 20px;
    height: 40px;
    ${p => { if (p.display === "home") return "opacity: 0;" }}
  }
`

export default function Navbar({display}) {
  return (
    <NavBarStyles display={display}>
      <a href="https://www.logic-immo.com/">
        <img
          className="logo"
          src={logo}
          alt="logo"
        />
      </a>
    </NavBarStyles>
  )
}
