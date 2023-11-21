import React, { useContext, useState } from 'react'
import DatePicker from "react-datepicker";
import { Users } from '../../dummyData';


const Sidebar = () => {
const [input,setInput]=useState("")
const [phone,setPhone]=useState()
const [todoList, setTodoList] = useState([...Users]);

const handleSubmit=()=>{

const id=todoList.length+1;
setTodoList((prev)=>[
  ...prev,
  {
    id:id,
    username:input,
    phone:phone
  }
])
setInput("");
setPhone("");
}


  return (
    <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
      <h2>Instructer List</h2>
      <input type='text' placeholder='Add name' style={{textAlign:"center",height:"30px",width:"50%",fontSize:"larger"}} onChange={(e)=>setInput(e.target.value)} value={input}/>
      <input type='text' placeholder='Add Phone Number' style={{textAlign:"center",height:"30px",width:"50%",margin:"10px 0px 10px 0px",fontSize:"larger"}} onChange={(e)=>setPhone(e.target.value)} />
      <button onClick={handleSubmit} style={{padding:"8px",width:"10%",fontSize:"larger"}}>Add</button>
      {todoList.map((i)=>(

        <div style={{display:"flex",margin:"5px",justifyContent:"space-between",width:"30%",border:"2px solid black",padding:
        "10px"}}>         
            
              <span>Name:  {i.username}</span>
              <span>Phone:  {i.phone}</span>
            
            
            
        </div>
      ))}
      
    </div>
  )
}

export default Sidebar
