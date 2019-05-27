import React from "react";
import "./Footer.css";
import Chat from "../../assets/icons/1x/chatSM.png";
import Message from "../../assets/icons/1x/messageSM.png";
import Share from "../../assets/icons/1x/shareSM.png";
import ThumbsUp from "../../assets/icons/1x/thumbupSM.png";
export default class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <img className="Thumbnail" src={ThumbsUp} alt="Not Found" />

        <img className="Thumbnail" src={Chat} alt="Not Found" />
        <img className="Thumbnail" src={Message} alt="Not Found" />
        <img className="Thumbnail" src={Share} alt="Not Found" />
      </div>
    );
  }
}
