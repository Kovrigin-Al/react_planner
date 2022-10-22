import React from "react";

export const ContactForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <label htmlFor="name">Name: </label>
      <input
        name="name"
        id="name"
        placeholder="Enter Name"
        value={props.name}
        onChange={props.handleChangeName}
        required
      />

      <label htmlFor="phone">Phone: </label>
      <input
        name="phone"
        id="phone"
        type="tel"
        placeholder="Enter Phone Number in form (###) ###-####"
        pattern="^([\(]{1}[0-9]{3}[\)]{1}[ ]{1}[0-9]{3}[\-]{1}[0-9]{4})$"
        value={props.phone}
        onChange={props.handleChangePhone}
        required
      />

      <label htmlFor="email">Email: </label>
      <input
        name="email"
        id="email"
        type="email"
        placeholder="Enter Email"
        value={props.email}
        onChange={props.handleChangeEmail}
        required
      />

      <input type="submit" />
    </form>
  );
};
