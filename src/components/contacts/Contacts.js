import React, { useContext } from "react";
import Contact from "./Contact";
import { GlobalContext } from "../../context";

const Contacts = (props) => {
  const { contacts, removeContact } = useContext(GlobalContext);
  return (
    <div>
      {contacts.map((person) => (
        <Contact
          onDeleteClick={(id) => removeContact(id)}
          key={person.id}
          id={person.id}
          name={person.name}
          email={person.email}
          phone={person.phone}
        />
      ))}
    </div>
  );
};

export default Contacts;
