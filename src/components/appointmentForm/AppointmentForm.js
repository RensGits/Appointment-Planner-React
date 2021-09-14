import React from "react";
import {ContactPicker} from '../contactPicker/ContactPicker.js'

export const AppointmentForm = (props) => {
 
  const getTodayString = () => {
    const [day, month, year] = new Date()
      .toLocaleDateString("en-GB")
      .split("/");
    return `${day.padStart(2, "0")}-${month.padStart(2, "0")}-${year}`;
  };

  console.log(getTodayString())

  return (
    <form >
      <label for = 'title'>Title</label>
      <input value = {props.currentTitle}  onChange = {(e) => props.setCurrentTitle(e.target.value)} type = 'text' id = 'title'required></input>

      <label for = 'contact' >Contact</label>
      <ContactPicker setCurrentContact = {props.setCurrentContact} contacts = {props.contacts}/>

      <label for = 'date'>Date</label>
      <input value = {props.currentDate} onChange = {(e) => props.setCurrentDate(e.target.value)}  type = 'date' id = 'date' required></input> 

      <label for = 'time'>Time</label>
      <input value = {props.currentTime} onChange = {(e) => props.setCurrentTime(e.target.value)}  type = 'time' id = 'time' required></input> 


      

      <input style = {{backgroundColor: 'black'}} value = 'add' type = 'submit' onClick = {props.handleSubmit}></input>

    </form>
  );
};

