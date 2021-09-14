import React , {useState} from "react";
import {TileList} from '../../components/tileList/TileList.js';
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm.js";


export const AppointmentsPage = (props) => {

  const[currentTitle,setCurrentTitle] = useState('');
  const[currentContact,setCurrentContact] = useState('');
  const[currentDate,setCurrentDate] = useState('');
  const[currentTime,setCurrentTime] = useState('');
   
  

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addAppointment(currentTitle,currentContact,currentDate,currentTime)

    setCurrentTitle('');
    setCurrentContact('');
    setCurrentDate('');
    setCurrentTime('');
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
            currentTitle = {currentTitle}
            currentContact = {currentContact}       
            currentDate = {currentDate}
            currentTime = {currentTime}
            setCurrentTitle = {setCurrentTitle}
            setCurrentContact = {setCurrentContact}
            setCurrentDate = {setCurrentDate}
            setCurrentTime = {setCurrentTime}

            handleSubmit = {handleSubmit}
            contacts = {props.contacts}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList data = {props.appointments}/>
      </section>
    </div>
  );
};
