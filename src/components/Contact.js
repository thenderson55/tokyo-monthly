import React from 'react';
import { useStateValue } from "../context/store";
import styled from 'styled-components'

function Contact() {

  const ContactText = styled.h3`
    text-align:center;
    margin: 30px;
  `;

  return (
    <ContactText>
      For all inquires contact: tombonaventure@protonmail.com
    </ContactText>
  );
}

export default Contact;