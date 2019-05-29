import React from "react";
import "./Display.css";

export default class ActionButton extends React.Component {
  calc = () => {
    let text = this.props.text;
    if (text[text.length - 1] === "=") {
      text[text.length - 1] = "";
      text = this.props.text.join("");
      text = eval(text);
    } else {
      text = this.props.text.join("");
    }
    return <input type="text" value={text} />;
  };
  render() {
    return <div>{this.calc()}</div>;
  }
}
