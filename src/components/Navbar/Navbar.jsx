import React from 'react'

import { Link } from 'react-router-dom';




const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:"blue",color:"white",height:"8vh"}}>
      <div style={{margin:"30px",marginLeft:"2%"}}>
        <span style={{fontSize:"larger",fontWeight:"bold",cursor:"pointer",}}><Link style={{textDecoration:"none",color:"white"}} to={"/"}>Scheduler App</Link></span>
      </div>
      
      <div style={{marginLeft:"20px"}}>
       <span style={{margin:"0px 20px 0px 20px"}} > <Link to="/instructors" style={{textDecoration:"none",color:"white"}}>Instructors</Link></span>
       <span style={{marginRight:"40px"}}> <Link to="/courses" style={{textDecoration:"none",color:"white"}}>Add Courses</Link></span>
       
      </div>
      
      
    </div>
  )
}

export default Navbar