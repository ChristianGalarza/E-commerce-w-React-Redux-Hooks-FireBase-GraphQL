import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'

import Homepage from './pages/homepage/Homepage.component'

function App() {
const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
