import React from "react";
import "./Header.css";
import Thumbnail from "../../assets/lambda.png";
export default class ImageThumbnail extends React.Component {
  render() {
    return (
      <div>
        <img className="Thumb" src={Thumbnail} alt="not found" />
      </div>
    );
  }
}
