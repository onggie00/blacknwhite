import React from "react";
import { Switch, Route } from "react-router-dom";

import Meetups from "./Meetups";
import About from "./About";
import Meetupsdetail from "./Meetupsdetail";
import Addmeetups from "./Addmeetups";
import Editmeetups from "./Editmeetups";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Meetups} />
      <Route exact path="/meetups/about" component={About} />
      <Route exact path="/meetups/add" component={Addmeetups} />
      <Route exact path="/meetups/edit/:id" component={Editmeetups} />
      <Route exact path="/meetups/:id" component={Meetupsdetail} />
    </Switch>
  </main>
);

export default Main;
