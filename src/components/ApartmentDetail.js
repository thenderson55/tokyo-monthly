import React from 'react';
import { useStateValue } from "../context/store";
import styled from 'styled-components'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"



const ApartmentDetail = () => {
  const [{ apartments }, dispatch] = useStateValue();
  const images = apartments[0].images

  const ImageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
  `;

  const Image = styled.img`
    max-height: 500px;
    max-width: 700px;
    margin: auto;
    padding: 5px;
    @media (max-width: 900px) { 
      max-height: 300px;
      max-width: 400px;
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