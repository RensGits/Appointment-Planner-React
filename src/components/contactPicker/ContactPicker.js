import React from "react";

export const ContactPicker = (props) => {

  const contacts = props.contacts.map(Object.values);

  return (
    
    <select onChange = {(e) => props.setCurrentContact(e.target.value)} >
      <option disabled selected>choose contact</option>
      {contacts.map((x) => <option>{x[0]}</option>)}
    </select>
    
  );
};


