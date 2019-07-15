import React from 'react';
import { useStateValue } from "../context/store";
import styled from 'styled-components'
import ContactForm from './ContactForm'

function Contact() {

  const ContactText = styled.h5`
    text-align:center;
    margin: 30px;
  `;

  return (
    <>
    <ContactText>
      For all inquires contact: tombonaventure@protonmail.com
    </ContactText>
    </>
  );
}

export default Contact;