import React from "react";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
import AddContact from "./components/contacts/AddContact";

import { GlobalProvider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Header branding={"Contact Manager"} />
        <div className="container">
          <AddContact />
          <Contacts />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
