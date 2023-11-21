
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useContext, useState } from 'react'
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Calender.css"
import { Users } from "../../dummyData";
import { subjects } from "../../dummyData";

const locales = {
    "en-IN": require("date-fns/locale/en-IN"),
  };
  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });
  
  const events = [
  
  ];
  
const Calender = () => {
  const [newEvent, setNewEvent] = useState({ title:[], start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);
  

  
  function handleAddEvent() {  
    
    setAllEvents([...allEvents, newEvent]);
    setNewEvent({ title:[], start: "", end: "" });
}
    return (
      
      <div>
        <h2>Add New Event</h2>
            <div>
                
                <select onChange={(e) => setNewEvent({ ...newEvent, title: [...newEvent.title,e.target.value] })}   >
                  {Users.map((i)=>(
                    
                    <option  >{i.username}</option>
                  ))}
                </select>
                
                <select onChange={(e) => setNewEvent({ ...newEvent, title: [...newEvent.title,e.target.value] })} >
                {subjects.map((i)=>(
                  
                  <option value={i.subjectName}>{i.subjectName}</option>
                ))}
                </select>
                <DatePicker placeholderText="Start Date" style={{ marginRight: "10px",zIndex:"10" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} showTimeSelect/>
                <DatePicker placeholderText="End Date" selected={newEvent.end} style={{ zIndex:"10" }} onChange={(end) => setNewEvent({ ...newEvent, end })} showTimeSelect/>
                <button style={{ marginTop: "10px" }} onClick={handleAddEvent}>
                    Add Event
                </button>
            </div>
            <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px",zIndex:"1" }} />
      </div>
      
    )
}

export default Calender
