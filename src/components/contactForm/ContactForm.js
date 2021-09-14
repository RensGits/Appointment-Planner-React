import React from "react";

export const ContactForm = (props) => {
  return (

    <form onSubmit = {props.handleSubmit}>
      <label for = 'name'>Name</label>
      <input value = {props.currentName}  onChange = {(e) => props.setCurrentName(e.target.value)} type = 'text' id = 'name'></input>

      <label for = 'email'>Email</label>
      <input value = {props.currentEmail} onChange = {(e) => props.setCurrentEmail(e.target.value)}  type = 'email' id = 'email'></input>

      <label for = 'phone'>Phone</label>
      <input value = {props.currentPhone} onChange = {(e) => props.setCurrentPhone(e.target.value)}  type = 'tel' id = 'phone'></input> 
      {/* todo: add regex */}

      <input style = {{backgroundColor: 'black'}} value = 'add' type = 'submit'/>
    </form>

  );
};
