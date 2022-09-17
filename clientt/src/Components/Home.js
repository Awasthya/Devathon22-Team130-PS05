import React, { useContext } from 'react'
import './Home.css';
import { UserContext } from "../App";
import { NavLink } from 'react-router-dom';
const Home = () => {
  return (
    <div className='Home'>
      <div className='leftContaint'>
        <h3><span className='highlighted-text'>Hii Student ,</span><br /> You can submit your hostel related complaint into this portal. </h3><br />
        <br/>
        <div className="profile-options">
        <NavLink extract="true" to="/signup">
                    <button className='button other primary-btn'>Register {" "}</button>
          </NavLink>
          <br />
          
          
          <NavLink extract="true" to="/signin">
            
                  <button className="button other highlighted-btn">Login</button>
          </NavLink>
                </div>
      </div>
    </div>
  )
}

export default Home

//rafce()