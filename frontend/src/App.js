import React from "react";

import "./style/global.scss";

import MainHeader from "./components/Header/MainHeader";
import Styles from "./components/Style/Styles";
import Weather from "./components/Weather/Weather";
import Products from "./components/Products/Products";
import Product from "./components/Products/Product";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <MainHeader />
        <Switch>
          <Route path="/" exact component={Styles} />
          <Route path="/weather" exact component={Weather} />
          <Route path="/products" exact component={Products} />
          <Route path="/products/:prodID" exact component={Product} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
