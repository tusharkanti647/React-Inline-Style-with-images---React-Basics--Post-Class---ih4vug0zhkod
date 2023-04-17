import React from 'react'
import '../styles/App.css';
import pic from '../NewtonSchool.jpg'
const App = () => {

  return (
    <div id="navbar">
      <div>NavBar</div>
      <img src={pic} style={{ width: "130px", height: "100px", margin: "10px" }} />
    </div>
  )
}


export default App;
