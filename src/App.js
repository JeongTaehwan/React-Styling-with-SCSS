import React from 'react';
import Btn1 from './components/Btn1';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <Btn1 size="large" onClick={() => console.log('클릭됐다!')}>
          BUTTON
        </Btn1>
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
      <div className="buttons">
        <Btn1 size="large" color="blue" outline>
          BUTTON
        </Btn1>
        <Btn1 color="gray" outline>
          BUTTON
        </Btn1>
        <Btn1 size="small" color="pink" outline>
          BUTTON
        </Btn1>
      </div>
      <div className="buttons">
        <Btn1 size="large" fullWidth>
          BUTTON
        </Btn1>
        <Btn1 size="large" color="gray" fullWidth>
          BUTTON
        </Btn1>
        <Btn1 size="large" color="pink" fullWidth>
          BUTTON
        </Btn1>
      </div>
    </div>
  );
}

export default App;