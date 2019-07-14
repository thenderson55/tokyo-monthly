import React from 'react';
import { useStateValue } from "../context/store";


function Main() {
  const [{ apartments }, dispatch] = useStateValue();
  console.log(apartments)

  return (
    <p>{apartments[0].name}</p>
  );
}

export default Main;