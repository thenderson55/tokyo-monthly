import React from 'react';
import { StateProvider } from "./context/store";
import { initialState, reducer } from './context/reducer'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ApartmentDetail from './components/ApartmentDetail'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Contact from './components/Contact'

function App() {

  return (
    <Router>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/detail" component={ApartmentDetail} />
        </Switch>
      </StateProvider>
    </Router>
  );
}

export default App;
