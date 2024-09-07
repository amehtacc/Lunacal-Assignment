import AddImage from './components/Addimage.jsx'
import Portfolio from './components/Portfolio.jsx'

function App() {
  
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
