import React, { Component} from "react";
import {hot} from "react-hot-loader";
import Home from "./pages/Home/home";

class App extends Component{
  render(){
    return(
      <Home/>
    );
  }
}

export default hot(module)(App);