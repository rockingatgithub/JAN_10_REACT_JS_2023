import { useState } from 'react'
import List from './List'

function App() {
  
  const [showHeading, setShowHeading] = useState(false)

  const toggleShowHeading = () => {
    setShowHeading(!showHeading)
  }
  return (

    <div className="App">
      {showHeading && <h1 className="heading"> Introudction to ReactJS! </h1>}
      <button onClick={toggleShowHeading} > Submit </button>
      <List/>
    </div>

  );
}

export default App;
