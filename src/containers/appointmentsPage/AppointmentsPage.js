import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const changeTitle = ({ target }) => {
    setTitle(target.value);
  };
  const changeContact = (value) => {
    setContact(value);
  };
  const changeTime = ({ target }) => {
    setTime(target.value);
  };
  const changeDate = ({ target }) => {
    setDate(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addAppoint(title, contact, date, time);

    setTitle("");
    setContact("");
    setTime("");
    setDate("");
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          title={title}
          contact={contact}
          date={date}
          time={time}
          changeTitle={changeTitle}
          changeContact={changeContact}
          changeDate={changeDate}
          changeTime={changeTime}
          contactList={props.contactList}
          handleSubmit={handleSubmit}
          appointList={props.appointList}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList list={props.appointList} />
      </section>
    </div>
  );
};
