import React, { Fragment, useEffect, useState } from 'react'
import styled from 'styled-components'
import Candle from './Candle'
import CandleBig from './CandleBig'

export const CandleContainerStyled = styled.div`
  display: none;

  > div {
    &:nth-child(even) {
    }

    &:nth-child(odd) {
      margin-top: -33px;
    }

    &:nth-child(3n) {
      margin-top: -100px;
    }
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin-top: -130px;
    height: 300px;
    width: 100%;
  }
`

export const MobileOnly = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -100px;

  @media (min-width: 1024px) {
    display: none;
  }
`

/**
 * Génère un entier en 1 et 3 
 * @param {Number} max
 * @returns {Number}
 */
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}

/**
 * Génère un tableau de 25 entiers
 * @returns {Number[]}
 */
const colorChoices = () => {
  let result = []
  for ( let i = 0; i <= 25; i++ ) {
    result.push(getRandomInt(3))
  }
  return result
}

const colorTabs = colorChoices();

/**
 * Composant CandleContainer
 */
export default function Candlecontainer({isDisplayed}) {
  const arr = []
  const candleQuantity = 25
  const [count, setCount] = useState(candleQuantity)

  const counter = (candleState) => {
    if (candleState) {
      setCount(count - 1)
    }
  }

  useEffect( () => {
    if (count < 1) {
      isDisplayed("slider")
      setCount(25)
    }
  }, [count, isDisplayed])

  for ( let i = 1; i <= candleQuantity; i++ ) {
    arr.push(
      <Candle 
        id={i}
        key={i}
        candleCounter={counter}
        colorCount={colorTabs[i]}
      />
    )
  }

  return (
    <Fragment>
      <CandleContainerStyled>
        {arr}
      </CandleContainerStyled>
      <MobileOnly>
        <CandleBig isDisplayed={isDisplayed} />
      </MobileOnly>
    </Fragment>
  )
}