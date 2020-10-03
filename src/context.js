import React, { useReducer } from "react";
import contextReducer from "./contextReducer";

const initialState = {
  contacts: [
    { id: 1, name: "jao1", email: "jao1@gmail.com", phone: "11 9999 9999" },
    { id: 2, name: "jao2", email: "jao2@gmail.com", phone: "33 9999 9999" },
    { id: 3, name: "jao3", email: "jao3@gmail.com", phone: "22 9999 9999" },
  ],
};

export const GlobalContext = React.createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(contextReducer, initialState);

  function removeContact(id) {
    dispatch({
      type: "REMOVE_CONTACT",
      payload: id,
    });
  }

  function addContact(contact) {
    dispatch({
      type: "ADD_CONTACT",
      payload: contact,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        contacts: state.contacts,
        removeContact,
        addContact,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
