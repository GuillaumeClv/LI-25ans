import React, { useState } from 'react'
import styled  from 'styled-components'
import cardTop from '../img/cardTop.jpg'

export const CardStyled = styled.div`
  display: block;
  margin: 10px 3%;
  background: url( ${ cardTop } ) repeat-x 15px top #fff;
  box-shadow: 0 5px 15px 0 rgba(0,0,0,.1);
  width: 94%;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  height: auto;
  

  .cardContent {
    padding: 40px 20px;
    font-size: 20px;

    p:first-child {
      font-weight: 600;
      margin-bottom: 10px;
      line-height: 1.3;

      span {
        color: var(--corail); 
      }
    }

    .desc {
      font-family: 'OpenSansRegular';
      font-size: 14px;
      line-height: 1.3;

      a {
        color: var(--blue);
        text-decoration: none;
      }
    }
  }

  img {
    margin: 0 auto;
    display: block;
    width: 100%;
  }

  &.close {
    img {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    width: 350px;
    height: 150px;
    transform: translateY(40px);
    margin: 0;
    margin-left: 15px;
    transition: all .3s;

    .desc {
      opacity: 0;
      visibility: hidden;
    }

    &:hover {
      height: auto;
      transform: translateY(0px);

      .desc {
        opacity: 1;
        visibility: visible;
      }

      img {
        margin-bottom: 10px;
      }
    }

    &.open {
      height: auto;

      .desc {
        opacity: 1;
        visibility: visible;
      }
    }
  }
`

export default function Card({cardId, content}) {
  const {date, title, desc, image} = content;

  return (
    <CardStyled cardId={cardId} >
      <div className="cardContent">
        <p><span>{date}</span> {title}</p>
        <p className="desc" dangerouslySetInnerHTML={{__html: desc}}></p>
      </div>
      <img src={image} alt="illustration" />
    </CardStyled>
  )
} 