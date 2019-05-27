import React from "react";
import "./post.css";
import Header from "../HeaderComponents/HeaderContainer";
import Card from "../CardComponents/CardContainer.js";
import Footer from "../FooterComponents/Footer.js";

export default class App extends React.Component {
  render() {
    return (
      <div className="MainCard">
        <Header />
        <Card />
        <Footer />
      </div>
    );
  }
}
