import React from 'react'
import { useStateValue } from "../context/store";
import styled from 'styled-components'

const ApartmentCard = () => {
  const [{ apartments }, dispatch] = useStateValue();

  const Apartment = styled.div`
    max-width: 45%;
    min-width: 300px;
  `;
  const ApartmentImage = styled.img`
    height: 270px;
    width: 400px;
    margin: auto;
    padding: 5px;
    @media (max-width: 900px) { 
      height: 200px;
      max-width: 300px;
      margin: auto;
      padding: 5px;
     }

  `;

  return (
    <>
    { apartments && apartments.map(apartment => {
      return (
        <Apartment className="card mb-3">
          <h3 className="card-header">{apartment.name}</h3>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <h6 className="card-subtitle text-muted">Support card subtitle</h6>
          </div>
          <ApartmentImage src={apartment.mainImage} alt="Card image"/>
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
          </div>
          <div className="card-footer text-muted">
            2 days ago
          </div>
        </Apartment>
      )
    })}
    </>
  )

}

export default ApartmentCard