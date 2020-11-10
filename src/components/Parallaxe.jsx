import React  from 'react'
import styled from 'styled-components'
import ParallaxMousemove from 'react-parallax-mousemove'
import particuler1       from '../img/particules/particules1.png'
import particuler2       from '../img/particules/particules2.png'

export const ParallaxeStyled = styled.div`
  display: none;
  position: fixed;
  left: 35%;
  transform: translateX(-50%);
  pointer-events: none;

  > div {
    > div {
      position: absolute;
      right: 120px;
      height: 100%;
      transform: translate(15%, 15%);
      opacity: 0.5;

      &:first-child {
        top: 10%;
      }
    }
  }

  @media (min-width: 768px) {
    display: block;
  }
`

export default function Parallaxe() {
  const config = {
    xFactor: 0.5,
    yFactor: 0.5,
    springSettings: {
      stiffness: 100,
      damping: 30
    }
  }

  const config2 = {
    xFactor: 0.25,
    yFactor: 0.25,
    springSettings: {
      stiffness: 100,
      damping: 30
    }
  }

  return (
    <ParallaxeStyled>
      <ParallaxMousemove>
        <ParallaxMousemove.Layer config={config}>
          <img src={particuler1} alt="particules de fond"/>
        </ParallaxMousemove.Layer>
        <ParallaxMousemove.Layer config={config2}>
          <img src={particuler2} alt="particules de fond"/>
        </ParallaxMousemove.Layer>
      </ParallaxMousemove>
    </ParallaxeStyled>
  )
}