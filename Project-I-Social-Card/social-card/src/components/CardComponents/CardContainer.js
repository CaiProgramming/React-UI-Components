import React from "react";
import "./Card.css";
import Content from "./CardContent.js";
import Banner from "./CardBanner.js";

export default class CardContainer extends React.Component {
  render() {
    return (
      <div className="Card">
        <section className="Content">
          <Banner />
        </section>
        <section className="Content Text">
          <Content />
        </section>
      </div>
    );
  }
}
