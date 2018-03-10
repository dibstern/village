import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Login";
import Doctor from "./Doctor";
import Home from "./Home";


// To add a new page, add a route to the switch & add the <Link> to the 
// VillageNavBar.
// Also add "import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";"
// to the page on which <Link> is located!

class ModalSwitch extends React.Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/doctor" component={Doctor} />
        </Switch>
      </div>
    );
  }
}

const SwitchRouter = () => (
  <Router>
    <Route component={ModalSwitch} />
  </Router>
);

export default SwitchRouter;