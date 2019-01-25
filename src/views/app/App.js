import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import routes from "../../router";

class App extends Component {
  clickMe(value) {
    alert(value);
  }

  render() {
    return (
      <HashRouter>
        <Switch>
          {routes.map((el, index) => {
            return (
              <Route
                key={index}
                path={el.link}
                render={props => (
                  <el.component routes={el.children} {...props} />
                )}
              />
            );
          })}
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
