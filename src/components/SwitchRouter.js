import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignUpButton from "./SignUpButton";
import Home from "./Home";

class ModalSwitch extends React.Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={SignUpButton} />
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