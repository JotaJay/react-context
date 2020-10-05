import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
import AddContact from "./components/contacts/AddContact";

import { GlobalProvider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className="App">
          <Header branding={"Contact Manager"} />
          <div className="container">
            <Switch>
              <Route path="/" exact component={Contacts} />
              <Route path="/adduser" exact component={AddContact} />
            </Switch>
          </div>
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
