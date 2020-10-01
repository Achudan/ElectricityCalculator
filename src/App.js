import React from 'react';
import './App.css';
import NavBar from './NavBar';
import Cards from './Cards';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <NavBar />
        <Cards title="Unit Calculator" content="Do you wanna calculate units from power?" respLink="unitcalc"/>
        <hr></hr>
        <Cards title="Bills Calculator" content="Do you wanna calculate TNEB bill from Units consumed?" respLink="billcalc"/>
      </header>
    </div>
  );
}

export default App;
