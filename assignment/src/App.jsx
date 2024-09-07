import { useState } from 'react'
import './App.css'

function App() {
  const [activeButton, setActiveButton] = useState(null);

  const buttonClicked = (buttonId) => {
    setActiveButton(buttonId);
  }

  return (
    <>
      <div id="left"></div>
      <div id="right">
        <div id="top-right">
          <div className='ques-rect'>
            <img src="./src/assets/questionmark.png" alt="questionmark image" />
            <img src="./src/assets/rectangle.png" alt="group of square" />
          </div>
          <div className='tab-text'>
            <div class="tab-container">
              <button className="tab-button" onClick={() => buttonClicked(1)} style={{ backgroundColor: activeButton === 1 ? 'grey' : 'transparent' }}>About Me</button>
              <button className="tab-button" onClick={() => buttonClicked(2)} style={{ backgroundColor: activeButton === 2 ? 'grey' : 'transparent' }}>Experiences</button>
              <button className="tab-button" onClick={() => buttonClicked(3)} style={{ backgroundColor: activeButton === 3 ? 'grey' : 'transparent' }}>Reommended</button>
            </div>
          </div>
        </div>

        <div id="bottom-right"></div>
      </div>
    </>
  )
}

export default App
