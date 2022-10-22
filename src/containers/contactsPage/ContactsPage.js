import React, { useState } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [nameExist, setNameExist] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nameExist) {
      alert("This name already exist! Change the name");
    } else {
      props.addContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  const handleChangeName = ({ target }) => {
    const nameList = props.contactList.map((contact) => contact.name);
    if (nameList.includes(target.value)) {
      setNameExist(true);
    } else {
      setNameExist(false);
    }
    setName(target.value);
  };

  const handleChangePhone = ({ target }) => {
    setPhone(target.value);
  };

  const handleChangeEmail = ({ target }) => {
    setEmail(target.value);
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          phone={phone}
          email={email}
          handleChangeName={handleChangeName}
          handleChangePhone={handleChangePhone}
          handleChangeEmail={handleChangeEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList list={props.contactList} />
      </section>
    </div>
  );
};
