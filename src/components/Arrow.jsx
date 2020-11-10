import React     from 'react'
import styled    from 'styled-components'
import leftArrow from '../img/chevron.svg'

export const ArrowStyled = styled.div`
  z-index: 1000;
  position: absolute;
  top: 33vh;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  transition: transform ease-in 0.1s;
  user-select: none;
  cursor: pointer;

  ${ p => p.direction === 'right' ? `right: 12px` : `left: 12px` };
  ${ p => { if (p.activeIndex === 0 && p.direction === 'left') return 'display: none;' }};

  img {
    width: 20px;
    ${ p => p.direction === 'left' ? `transform: rotate(180deg)` : `` };
  }

  @media (min-width: 768px) {
    top: 44vh;
    height: 70px;
    width: 70px;

    img {
      width: 30px;
    }
  }
`

export default function Arrow ({direction, handleClick, activeIndex}) {
  return (
    <ArrowStyled
      onClick={handleClick} 
      direction={direction}
      activeIndex={activeIndex}
    >
      <img src={leftArrow} alt={leftArrow} />
    </ArrowStyled>
  )
}
