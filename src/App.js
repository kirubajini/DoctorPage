import React, { useState } from 'react';
import './App.css';
import Calendar from './Calendar';
import { HiOutlineMenu } from 'react-icons/hi'; // Import the menu icon from react-icons
import myLogo from './myLogo.jpg';
import Doctor from './Doctor.jpg';


const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="app-container">
      <header>
      <a class="navbar-brand" href="#">
    </a>
        <button className="menu-button btn btn-primary border border-black>" onClick={toggleSidebar} style={{paddingLeft:"40px"}}>
          <HiOutlineMenu /> {/* Use the menu icon */}
        </button>
        
        <h1 style={{color:"#0b006b"}}><center>Appointment Details</center></h1>
      </header>
      <div className="content" style={{marginTop:"40px"}} >
        <div className={`sidebar ${showSidebar ? 'show' : ''}`} style={{backgroundColor:"#10555c",height:"610px",marginBottom:"50px"}}>
          <ul>
           <li> <button type='button'> Overview <ion-icon name="calendar-clear"></ion-icon></button> </li> <br></br><br></br>
           <li> <button type='button'> Calendar</button></li> <br></br> <br></br>
           <li> <button type='button'> Patient List</button></li> <br></br><br></br>
           <li> <button type='button'> Messages</button></li> <br></br><br></br>
           <li> <button type='button'> Payment Information</button></li> <br></br><br></br>
           <li> <button type='button'> Settings</button></li> <br></br><br></br>
          </ul>
          <hr></hr>
          <img src={myLogo} alt="Bootstrap" width="120" height="90" className="rounded-circle"/> <br></br>      
        </div>
        <div className="calendar-container">
          <Calendar/>
        </div>
      </div>
    </div>
  );
};

export default App;