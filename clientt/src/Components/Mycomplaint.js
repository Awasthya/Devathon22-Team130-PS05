import React from 'react'
import "./mycomplaint.css";

import { NavLink } from 'react-router-dom';
import AllComplaint from './AllComplaint'
const Mycomplaint = () => {
  
 
  return (
    <div>
          <NavLink to="/Newcomplaint"><button className="but" >New</button></NavLink><br/><br/>
          <AllComplaint/>
    </div>
  )
}

export default Mycomplaint
