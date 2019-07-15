import React, { useEffect, useState } from 'react';
import { useStateValue } from "../context/store";
import styled from 'styled-components'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"



const ApartmentDetail = (props) => {
  const [{ apartments }, dispatch] = useStateValue();
  const index = parseInt(props.history.location.pathname.slice(-1))
  const images = apartments[index].images

  const ImageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 10px;
  `;

  const Image = styled.img`
    max-height: 500px;
    max-width: 700px;
    margin: auto;
    padding: 5px;
    @media (max-width: 900px) { 
      max-height: 200px;
      max-width: 300px;
      margin: auto;
      padding: 5px;
     }
  `;
  

  const handleOnDragStart = e => e.preventDefault()
  return (
    <div style={{margin: '50px'}}>
      <AliceCarousel mouseDragEnabled >
          { images && images.map((image, i) => {
            return (
              <ImageWrapper key={i}>
                <Image src={image} onDragStart={handleOnDragStart} className="yours-custom-class" />
              </ImageWrapper>
            )
          })} 
      </AliceCarousel>
    </div>
  )
}

export default ApartmentDetail