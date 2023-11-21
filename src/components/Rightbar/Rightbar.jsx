import React, { useState } from 'react'
import { subjects } from '../../dummyData'
const Rightbar = () => {
    const [input,setInput]=useState("")
    const [desc,setDesc]=useState("")
    const [Number,setNum]=useState()
    const [course,setCourse]=useState([...subjects]);


    const handleCourse=()=>{

        const id=subjects.length+1;
        setCourse((prev)=>
            [
            ...prev,
            {
            id:id,
            subjectName:input,
            desc:desc,
            Number:Number
            }
        ])
    }
  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",margin:"auto",alignItems:"center"}}>
        <h2>Course List</h2>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",width:'50%'}}>
        <input type='text' placeholder='Add name' onChange={(e)=>setInput(e.target.value)}  style={{textAlign:"center",height:"40px",margin:"5px 0px 5px 0px",fontSize:"larger"}} />
        <input type='text' placeholder='Add description' onChange={(e)=>setDesc(e.target.value)}  style={{textAlign:"center",height:"40px",margin:"5px 0px 5px 0px",fontSize:"larger"}} />
        <input type='Number' placeholder='Add Level' onChange={(e)=>setNum(e.target.value)}  style={{textAlign:"center",height:"40px",margin:"5px 0px 5px 0px",fontSize:"larger"}} />
        
        </div>
        <button onClick={handleCourse} style={{padding:"8px",width:"10%",fontSize:"larger"}}>add</button>
      {
        course.map((i)=>(
            <div style={{margin:"15px 0px 15px 15px",width:"50%",justifyContent:"center",border:"2px solid black"}} >
              <div style={{display:"flex",justifyContent:"center",border:"2px solid black"}}>
              <span style={{margin:"0px 10px 0px 10px",fontSize:"larger"}}>{i.id}</span>
              <span style={{margin:"0px 10px 0px 10px",fontSize:"larger"}}>{i.subjectName}</span>
              <span style={{margin:"0px 10px 0px 10px",fontSize:"larger"}}>Level:-{i.Number}</span>
              </div>
               
                <span>{i.desc}</span>
                
               
            </div>
            
            
        ))
      }
    </div>
  )
}

export default Rightbar
