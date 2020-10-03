import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context";

const AddContact = (props) => {
  const { contacts, addContact } = useContext(GlobalContext);
  const id = contacts.length + 1;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const contact = { id, name, email, phone };
    addContact(contact);
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div className="card mb-3">
      <div className="card-header">Add Contact</div>
      <div className="card-body">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(userInput) => setName(userInput.target.value)}
              className="form-control form-control-lg"
              placeholder="Enter name..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(userInput) => setEmail(userInput.target.value)}
              className="form-control form-control-lg"
              placeholder="Enter email..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={(userInput) => setPhone(userInput.target.value)}
              className="form-control form-control-lg"
              placeholder="Enter phone..."
            />
          </div>
          <input
            type="submit"
            value="Add contact"
            className="btn btn-block btn-light"
          />
        </form>
      </div>
    </div>
  );
};

export default AddContact;
