import React   from 'react'
import styled  from 'styled-components'
import candle1 from '../img/bougies/big.png'
import flame1  from '../img/bougies/flamme1.svg'
import flame2  from '../img/bougies/flamme2.svg'

export const CandleBigStyled = styled.div`
  z-index: 100;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: -34px 7.5px 0;
  height: 180px;
  transition: all .2s;
  
  @keyframes rustling { 
    from { transform: translateY( 1%) translateX(0); }
    to   { transform: translateY(-3%) translateX(1%); } 
  }

  .fires {
    display: flex;
    justify-content: space-evenly;
    margin-left: -17px;
    width: 100%;
  }
  
  .fire {
    position: relative;

    .flame2 {
      animation: .2s linear .5s infinite alternate rustling;
    }

    .flame1, 
    .flame2, 
    .extinct {
      position: absolute;
      top: -5px;
    }

    .flame1,
    .extinct {
      left: 6px;
      top: 12px;
    }
  }
`

export default function CandleBig ({isDisplayed}) {
  const handleClick = () => {
    isDisplayed("slider")
  }

  return (
    <CandleBigStyled onClick={handleClick}>
      <div className="fires">
        <div className="fire">
          <img className="flame2"  src={flame2}  alt="exterieur de la flamme" />
          <img className="flame1"  src={flame1}  alt="interieur de la famme" />
        </div>
        <div className="fire">
          <img className="flame2"  src={flame2}  alt="exterieur de la flamme" />
          <img className="flame1"  src={flame1}  alt="interieur de la famme" />
        </div>
      </div>
      <img className="base" src={candle1} alt="bougie verte" />
    </CandleBigStyled>
  )
}