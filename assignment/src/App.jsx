import { useState } from 'react'
import AddImage from './components/Addimage.jsx'
import Portfolio from './components/Portfolio.jsx'
import './App.css'

function App() {
  const [activeButton, setActiveButton] = useState(1);

  const buttonClicked = (buttonId) => {
    setActiveButton(buttonId);
    if (activeButton === true) {

    }
  }

  return (
    <div id='container'>
      <div id="left"></div>
      <div id="right">
        <Portfolio />
        <hr />
        <AddImage />
        <hr />
      </div>
    </div>
  )
}

export default App
