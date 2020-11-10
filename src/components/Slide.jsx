import React, { memo } from 'react'
import styled from 'styled-components'
import visuel from '../img/illustrations/visuel.png'
import gateau from '../img/illustrations/gateau.png'
import equipe from '../img/illustrations/equipe.png'
import proximite from '../img/illustrations/proximite.png'

export const SlideStyled = styled.section`
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  width: 100%;

  .container {
    display: flex;
    flex-direction: column-reverse;
    /* width: 85%; */

    .content {
      z-index: 10;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 auto;
      padding: 20px 0 0;
      width: auto;
      padding: 0 5%;
      background-color: var(--blue-light);

      h1 {
        margin-top: 10px;
        font-size: 30px;
        font-weight: 700;
        font-family: 'Montserrat';
      }

      h2 {
        font-size: 40px;
        font-weight: 700;
        color: var(--blue);
        font-family: 'Montserrat';
        margin-bottom: 10px;
      }

      p {
        line-height: 1.3;
      }
    }

    .illustration {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 auto;
      padding: 20px 0;
      width: auto;

      img {
        width: 320px;
      }
    }
  }

  @media (min-width: 768px) {
    .container {
      width: 85%;

      .content {
        background-color: transparent;
        padding: 0;
      }
    }
  }

  @media (min-width: 1024px) {
    align-items: center;
    height: calc(100% - 90px);

    .container {
      z-index: 100;
      display: flex;
      margin-top: -12%;
      flex-direction: row;
    
      .content {
        width: 50%;
        margin-top: 100px;  

        h1 {
          font-size: 50px;
        }

        h2 {
          font-size: 80px;
          margin-bottom: 15px;
        }

        p {
          font-size: 18px;
        }
      }

      .illustration {
        width: 50%;

        img {
          width: 450px;
          align-self: center;
        }
      }
    }
  }
`

export default memo(function Slide ({content}) {
    const {title, subTitle, text, illustration} = content.content;

    const displayGoodImg = (i) => {
      switch (i) {
        case "visuel":
          return visuel
        case "gateau":
          return gateau
        case "equipe":
          return equipe
        case "proximite":
          return proximite
        default:
          return ""
      }
    }

    return (
      <SlideStyled>
        <div className="container">
          <div className="content">
            <h1>{title}</h1>
            <h2>{subTitle}</h2>
            <p>{text}</p>
          </div>
          <div className="illustration">
            <img src={displayGoodImg(illustration)} alt="illustration"/>
          </div>
        </div>
      </SlideStyled>
    )
  }
)