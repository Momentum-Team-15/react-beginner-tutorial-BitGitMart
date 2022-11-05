import React, { useState } from 'react'
import './App.css';
import ColorChangeButton from './ColorChangeButton'

function App() {
  const [color, setColor] = useState('')

  return (
    <div className={`react-root ${color}`}>
      <div className='centered'>
        <h1>Picky Wicky</h1>
        <ColorChangeButton color='red' setColor={setColor} />
        <ColorChangeButton color='blue' setColor={setColor} />
        <ColorChangeButton color='yellow' setColor={setColor} />
        <button className='red' onClick={() => setColor('red')}>REDSIES</button>
        <button className='blue' onClick={() => setColor('blue')}>BLUESIES</button>
        <button className='yellow' onClick={() => setColor('yellow')}>YELLOWSIES</button>
      </div>
    </div>
  );
}

export default App;
