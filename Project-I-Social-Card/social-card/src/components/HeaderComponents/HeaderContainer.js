import React from "react";
import "./Header.css";
import Content from "./HeaderContent";
import Title from "./HeaderTitle";
import Thumbnail from "./ImageThumbnail";
export default class HeaderContainer extends React.Component {
  render() {
    return (
      <div className="Header">
        <Thumbnail />
        <section className="ContentHeader">
          <Title />
          <Content />
        </section>
      </div>
    );
  }
}
