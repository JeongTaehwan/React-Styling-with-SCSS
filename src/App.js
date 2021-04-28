import React from 'react';
import Btn1 from './components/Btn1';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Btn1 size="large">BUTTON</Btn1>
        <Btn1>BUTTON</Btn1>
        <Btn1 size="small">BUTTON</Btn1>
      </div>
      <div className="buttons">
        <Btn1 size="large" color="gray">
          BUTTON
      </Btn1>
        <Btn1 color="gray">BUTTON</Btn1>
        <Btn1 size="small" color="gray">
          BUTTON
      </Btn1>
      </div>
      <div className="buttons">
        <Btn1 size="large" color="pink">
          BUTTON
      </Btn1>
        <Btn1 color="pink">BUTTON</Btn1>
        <Btn1 size="small" color="pink">
          BUTTON
      </Btn1>
      </div>
    </div>
  );
}

export default App;