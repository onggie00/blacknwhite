import React from "react";
import { Switch, Route } from "react-router-dom";

import DataAdmin from "./DataAdmin";
//import Meetupsdetail from "./Meetupsdetail";
//import Addmeetups from "./Addmeetups";
//import Editmeetups from "./Editmeetups";

const AdminLogin = () => (
  <AdminLogin>
    <Switch>
      <Route exact path="/admin/login" component={DataAdmin} />
    </Switch>
  </AdminLogin>
);

export default AdminLogin;
