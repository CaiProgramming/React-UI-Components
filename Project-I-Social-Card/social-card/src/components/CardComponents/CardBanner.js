import React from "react";
import "./Card.css";
import Banner from "../../assets/react.png";
export default class CardBanner extends React.Component {
  render() {
    return (
      <div>
        <img className="banner" src={Banner} alt="Not Found" />
      </div>
    );
  }
}
