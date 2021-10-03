import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BasePage from "./pages/layout/basepage";
import './App.scss'
import { ClientFormPage, ClientPage } from "./pages/Client";

function App() {
  return (
    <BasePage>
      <BrowserRouter>
        <Switch> 
          <Route exact path="/" component={ClientPage}/>
          <Route path="/add" component={ClientFormPage}/>
          <Route exact path="/edit/:id" component={ClientFormPage}/>
        </Switch>
      </BrowserRouter>
    </BasePage>
  );
}

export default App;
