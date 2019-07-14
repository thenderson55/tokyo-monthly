import React from 'react';
import { StateProvider } from "./context/store";
import { initialState, reducer } from './context/reducer'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Navbar/>
      <Home/>
    </StateProvider>
  );
}

export default App;
