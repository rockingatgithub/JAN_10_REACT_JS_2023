import { useState } from 'react'
import List from './List'
import Login from './components/Auth'
import Clock from './components/Clock'
import { Routes, Route, Link } from 'react-router-dom'
import Auth from './components/Login'


function App() {
  
  const [showHeading, setShowHeading] = useState(false)

  const toggleShowHeading = () => {
    setShowHeading(!showHeading)
  }

  const Courses = [{id:1 , name: 'C++'}, {id:2 , name: 'Java'}, {id:3 , name: 'ReactJS'}, {id:4 , name: 'Python'}]
  const UI = [{id:1 , name: 'ReactJS'}, {id:2 , name: 'Angular'}, {id:3 , name: 'VueJS'}, {id:4 , name: 'NextJS'}]

  const deleteItem = () => {
    console.log("Delete item")
  }

  return (

    <div className="App">
    
      <nav> <Link to='/login'> Login </Link> <Link to='/signup'> Signup </Link> <Link to='/clock' > Clock </Link> </nav>
      <Routes>
        <Route  path='/login' element={<Login heading="Login" />} />
        <Route  path='/signup' element={<Login heading="Signup" />} />
        <Route  path='/clock' element={<Clock/>} />

      </Routes>

      <Auth/>



      {/* <List courses={Courses} heading="List of Courses" deleteItem={deleteItem} />
      <List courses={UI} heading="List of UI libraries and frameworks" deleteItem={deleteItem} />

      <Clock/>
      <Login/> */}

    </div>

  );
}

export default App;
