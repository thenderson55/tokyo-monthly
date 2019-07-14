import React from 'react';
import { StateProvider } from "./context/store";
import { initialState, reducer } from './context/reducer'
import Main from './components/Home'

function App() {

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Main></Main>
    </StateProvider>
  );
}

export default App;
