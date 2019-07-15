import React from 'react';
import { useStateValue } from "../context/store";
import ApartmentCard from './ApartmentCard'
import styled from 'styled-components'

function Main() {
  const [{ apartments }, dispatch] = useStateValue();

  const ApartmentsWrapper = styled.div`
    display:flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    margin: 30px;
  `;

  return (
    <ApartmentsWrapper>
      <ApartmentCard></ApartmentCard>
      {/* <ApartmentCard></ApartmentCard> */}
    </ApartmentsWrapper>
  );
}

export default Main;