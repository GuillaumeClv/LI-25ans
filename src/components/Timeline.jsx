import React from 'react'
import styled from 'styled-components'
import background from '../img/timeline.svg'

export const TimelineContainer = styled.aside`
  /* background-color: var(--blue-light); */

  @media (min-width: 1024px) {
    position: absolute;
    bottom: 0;
  }
`

export const TimelineStyled = styled.div`
  display: flex;
  margin-top: -100%;
  height: 300px;
  width: ${p => p.width}px;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: contain;
  transform: translateX(-${p => p.translate}px);
  transition: transform ease-out ${p => p.transition}s;

  @media (min-width: 768px) {
    margin-top: -30%; 
  }
  
  @media (min-width: 1024px) {
    margin-top: 0;
    background-size: contain;
  }
`

export default function Timeline(props) {
  const {translate, transition, width} = props
  return (
    <TimelineContainer>
      <TimelineStyled 
        translate  = {translate}
        transition = {transition}
        width      = {width}
      />
    </TimelineContainer>
  )
}