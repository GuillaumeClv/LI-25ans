import React, { useState } from 'react'
import styled, { css }     from 'styled-components'
import candle1 from '../img/bougies/bougie1.png'
import candle2 from '../img/bougies/bougie2.png'
import candle3 from '../img/bougies/bougie3.png'
import flame1  from '../img/bougies/flamme1.svg'
import flame2  from '../img/bougies/flamme2.svg'
import extinct from '../img/bougies/flamme_eteinte.svg'

export const CandleStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 7.5px;
  height: 180px;
  width: 20px;
  transition: all .2s;
  z-index: 100;
  cursor: pointer;

  @keyframes rustling { 
    from { transform: translateY(-1%) translateX(0); } 
    to   { transform: translateY( 3%) translateX(1%); } 
  }

  @keyframes rustling-reverse { 
    from { transform: translateY( 1%) translateX(0); }
    to   { transform: translateY(-3%) translateX(1%); } 
  }

  &:nth-child(odd) {
    .fire {
      .flame2 {
        animation: .2s linear .5s infinite alternate rustling;
      }
    }
  }

  &:nth-child(even) {
    .fire {
      .flame2 {
        animation: .2s linear .5s infinite alternate rustling-reverse;
      }
    }
  }

  .fire {
    position: relative;

    .flame1, 
    .flame2, 
    .extinct {
      position: absolute;
      top: 13px;
    }

    .flame1,
    .extinct {
      left: 6px;
      top: 30px;
    }

    ${
      (p) => {
        if (p.state) {
          return css`
            .flame2, .flame1 {
              display: block;
            }

            .extinct {
              display: none;
            }
          `
        } else {
          return css`
            .flame2, .flame1 {
              display: none;
            }

            .extinct {
              display: block;
            }
          `
        }
      }
    }
  }

  .base {
    width: 90%;
  }
`

export default function Candle({candleCounter, colorCount}) {
  const [state, setState] = useState(true)
  
  const candleImage = (c) => {
    switch (c) {
      case 1:
        return candle1
      case 2:
        return candle2
      case 3:
        return candle3
      default:
        return candle1
    }
  }

  const handleMouseOver = () => {
    if (state) {
      candleCounter(state)
      setState(false)
    }
  }

  return ( 
    <CandleStyled state={state} onMouseOver={handleMouseOver}>
      <div className="fire" >
        <img className="flame2"  src={flame2}  alt="exterieur de la flamme" />
        <img className="flame1"  src={flame1}  alt="interieur de la famme" />
        <img className="extinct" src={extinct} alt="flamme éteinte" />
      </div>
      <img className="base" src={candleImage(colorCount)} alt="bougie verte" />
    </CandleStyled>
  )
}