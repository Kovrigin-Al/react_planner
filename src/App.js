import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink,
} from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [contactList, setContactList] = useState([]);

  const [appointList, setAppointList] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  const addContact = (contactName, contactPhone, ContactEmail) => {
    const newContact = {
      name: contactName,
      phone: contactPhone,
      email: ContactEmail,
    };

    setContactList((prev) => [...prev, newContact]);
  };

  const addAppoint = (title, contact, date, time) => {
    const newAppoint = {
      title,
      contact,
      date,
      time,
    };
    setAppointList((prev) => [...prev, newAppoint]);
  };

  return (
    <>
      <h1>Appointment Planner</h1>
      <Router>
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
            <Route exact path="/">
              <Redirect to={ROUTES.CONTACTS} />
            </Route>
            <Route path={ROUTES.CONTACTS}>
              <ContactsPage contactList={contactList} addContact={addContact} />
            </Route>
            <Route path={ROUTES.APPOINTMENTS}>
              <AppointmentsPage
                appointList={appointList}
                contactList={contactList}
                addAppoint={addAppoint}
              />
            </Route>
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;