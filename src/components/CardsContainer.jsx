import React, { memo, useRef } from 'react'
import styled from 'styled-components'
import Card   from './Card'

export const CardsStyled = styled.section`
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 30px;
  height: auto;
  background-color: var(--blue-light);

  @media (min-width: 1024px) {
    position: absolute;
    bottom: 0;
    margin: 0 auto;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    background-color: transparent;

    > div {
      @keyframes transition {
        0%   { transform: translateY(40px); }
        50%  { transform: translateY(20px); }
        100% { transform: translateY(40px); }
      }

      &:nth-child(1){
        animation: transition .3s ease .1s;
      }
      &:nth-child(2){
        animation: transition .3s ease .4s;
      }
      &:nth-child(3){
        animation: transition .3s ease .7s;
      }
    }
  }
`

export default memo(function CardsContainer(props) {
  const containerRef = useRef(null)
  const {cards} = props.content
  const time = Date.now()

  return (
    <CardsStyled  ref={containerRef}>
      { // Affiche les cards
        cards.map((card, i) => (
          <Card
            key={time + "-" + i}
            content={card} 
            cardId={i}
          />
        ))
      }
    </ CardsStyled>
  )
})
