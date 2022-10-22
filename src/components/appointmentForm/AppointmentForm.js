import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = (props) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleChangeContact = ({ target }) => {
    props.changeContact(target.value);
  };

  return (
    <form onSubmit={props.handleSubmit}>
      <label htmlFor="name">Appointment Title: </label>
      <input
        name="name"
        id="name"
        placeholder="Enter Title"
        value={props.title}
        onChange={props.changeTitle}
        required
      />
      <ContactPicker
        contactList={props.contactList}
        handleChangeContact={handleChangeContact}
        required
      />
      <label htmlFor="date">Appointment Date: </label>
      <input
        name="date"
        id="date"
        type="date"
        value={props.date}
        onChange={props.changeDate}
        min={getTodayString()}
        required
      />
      <label htmlFor="time">Appointment Time: </label>
      <input
        name="time"
        id="time"
        type="time"
        value={props.time}
        onChange={props.changeTime}
        required
      />

      <input type="submit" />
    </form>
  );
};
