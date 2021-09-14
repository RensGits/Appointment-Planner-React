import React, {useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const[contacts,setContacts] = useState([{name: 'Bobbie Stokes', email: 'BStokes@gmail.com', phone: '061627231'},{name: 'Milli Heaton', email: 'MilliHeaton@gmail.com', phone: '0619260140'}])
  const[appointments,setAppointments] = useState([])


  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  const addContact = (name,phone,email) => {
    setContacts([...contacts,{name,phone,email}])
  }

  const addAppointment = (title,contact,date,time) => {
    setAppointments([...appointments,{title,contact,date,time}])
  }

  return (
    <>
      <nav>
   
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          {/* <Route exact path="/Appointment-Planner">
            <Redirect to={ROUTES.CONTACTS} />
          </Route> */}
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage addContact = {addContact} contacts = {contacts} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
             <AppointmentsPage addAppointment = {addAppointment} appointments = {appointments} contacts = {contacts} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
