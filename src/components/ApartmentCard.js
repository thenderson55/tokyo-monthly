import React from 'react'
import { useStateValue } from "../context/store";
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const ApartmentCard = () => {
  const [{ apartments }, dispatch] = useStateValue();

  const Apartment = styled.div`
    width: 500px;
    &:hover {
      border-color: #3e3f3a;
    }
    @media (max-width: 990px) { 
      width: 400px;
     }
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
            <h5 className="card-title">{apartment.description}</h5>
            <h6 className="card-subtitle text-muted">{apartment.price}</h6>
          </div>
          <ApartmentImage src={apartment.mainImage} alt="Card image"/>
          <div className="card-body">
            <p className="card-text">{apartment.amenities}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{apartment.location}</li>
          </ul>
          <div className="card-body">
          <span style={{whiteSpace: 'pre'}}>Available from: {apartment.availability}     <Link className="card-link" to="/contact">Inquire here</Link>
          </span>
          </div>
        </Apartment>
      )
    })}
    </>
  )

}

export default ApartmentCard