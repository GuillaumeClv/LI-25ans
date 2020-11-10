import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CandleContainer from './CandleContainer'
import logo from '../img/logov2.svg'
import wind from '../img/wind.svg'
import homeBG from '../img/illustrations/home-bg.png'

export const HomeStyled = styled.div`
  padding-top: 50px;
  height: 60vh;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: top left;
  transition: all .5s ease-out;
  font-family: 'Montserrat';
  background-image: url(${homeBG});
  background-size: 50%;
  
  &.hide {
    display: none;
    transition: display 1s;
  }

  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: inherit;

    .logo {
      width: 300px;
      margin-bottom: 10px;
    }

    h1 {
      font-size: 27px;
      font-weight: 600;

      span {
        color: var(--blue);
      }
    }
  }

  .footer {
    z-index: 1;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    cursor: pointer;

    .wind {
      margin-bottom: 20px;
    }

    p {
      text-align: center;
      line-height: 1.3;
      font-size: 14px;
    }
  }

  @media (min-width: 768px) {
    background-size: contain;

    .header {
      .logo {
        width: 400px;
      }

      h1 {
        font-size: 38px;
      }
    }
    
    .footer {
      .wind{
        transition: transform .2s linear;

        &:hover {
          transform: translateY(-10px);
        }
      }
    }
  }
`

export default function Home({display, setDisplay}) {
  const [hide, setHide] = useState("")

  useEffect( () => display === "home" ? setHide("") : setHide("hide"), [display])

  return (
    <HomeStyled className={hide}>
      <div className="header">
        <img className="logo" src={logo} alt="logo de logic-immo"/>
        <h1>fête ses <span>25 ans</span> !</h1>
      </div>

      <CandleContainer isDisplayed={setDisplay} />

      <div className="footer" onClick={() => setDisplay("slider")}>
        <img className="wind" src={wind} alt="wind" />
        <p>Soufflez nos bougies <br/> pour découvrir notre histoire</p>
      </div>
    </ HomeStyled>
  )
}