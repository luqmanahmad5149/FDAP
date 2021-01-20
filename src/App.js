import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import Monitor from "./components/pages/Monitor";
import Footer from "./components/Footer";
import Introduction from "./components/pages/Introduction";
import Monitor2 from "./components/pages/Monitor2";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/introduction" component={Introduction} />
          <Route path="/monitor" component={Monitor} />
          <Route path="/monitor2" component={Monitor2} />
          <Route path="/products" component={Products} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
