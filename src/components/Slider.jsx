import React, { useState } from 'react'
import styled         from 'styled-components'
import Timeline       from './Timeline'
import Slide          from './Slide'
import Arrow          from './Arrow'
import Canvas         from './Canvas'
import CardsContainer from './CardsContainer'

export const SliderStyled = styled.section`

  @keyframes apparition {
    from {
      opacity: 0;
      transform: translateY(500px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: auto;
  transition: all .3s ease;
  visibility: visible;
  opacity: 1;
  transform: translateY(0);
  transition: visibility 0s, opacity .3s linear, transform .3s linear;
  animation: apparition .3s normal ease;
  padding-top: 90px;
  font-family: 'OpenSansSemiBold';
 
  @media (min-width: 1024px) {
    overflow: hidden;
    position: relative;
    height: calc(100vh - 80px);
  }
`;

export default function Slider (props) {
  const [state, setState] = useState({
    translate: 0,
    transition: 0.45,
    activeIndex : 0
  })
  const slider = props.content.slides
  const getWidth = () => window.innerWidth
  const {activeIndex} = state

  /**
   *  Fonctions
  */
  const nextSlide = () => {
    if (activeIndex === slider.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0
      })
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getWidth()
    })
  }

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (slider.length - 1) * getWidth(),
        activeIndex: slider.length - 1
      })
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * getWidth()
    })
  }

  /**
   *  Render
  */
  return (
    <SliderStyled>
      <Slide content={slider[activeIndex]} />

      <Timeline
        translate  = {state.translate}
        transition = {state.transition}
        width      = {getWidth() * slider.length}
      />

      <CardsContainer
        content={slider[activeIndex]}
        activeIndex={state.activeIndex} 
      />

      <Canvas/>

      <Arrow direction="left"  handleClick={prevSlide} activeIndex={state.activeIndex} />
      <Arrow direction="right" handleClick={nextSlide} />
    </SliderStyled>
  )
}