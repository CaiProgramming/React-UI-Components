import React from "react";
import "./Button.css";

export default class ActionButton extends React.Component {
  render() {
    let text = this.props.text.join("");
    console.log(text);
    return (
      <div>
        <input type="text" value={text} />
      </div>
    );
  }
}
