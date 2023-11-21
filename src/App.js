import React from 'react'
import "./App.css";
import Calender from './components/Calender/Calender';
import Sidebar from './components/Home/Sidebar';
import Navbar from './components/Navbar/Navbar';
import Rightbar from './components/Rightbar/Rightbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


const App = () => {
 
  return (
    <BrowserRouter>
     <Navbar/>
       <Routes>
        <Route path='/instructors' element={<Sidebar/>} />
      <Route path='/' element={<Calender/>} /> 
        <Route path='/courses' element={<Rightbar/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

