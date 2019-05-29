import React from "react";
import Display from "../DisplayComponents/CalculatorDisplay.js";
import "./Button.css";

export default class NumberButton extends React.Component {
  state = {
    text: []
  };
  textHandeler = e => {
    console.log(Number.parseInt(this.state.text[this.state.text.length - 1]));
    console.log(Number.parseInt(e.target.id));
    if (
      (Number.parseInt(this.state.text[this.state.text.length - 1]) &&
        Number.parseInt(e.target.id)) ||
      ((!Number.parseInt(e.target.id) &&
        Number.parseInt(this.state.text[this.state.text.length - 1])) ||
        Number.parseInt(e.target.id))
    ) {
      let text = this.state.text.concat(e.target.id);
      this.setState({
        text: text
      });
    }
  };
  clearHandler = () => {
    this.setState({
      text: []
    });
  };
  MakeButtons = () => {
    let num = ["clear", "/", 7, 8, 9, "*", 4, 5, 6, "-", 1, 2, 3, "+", 0, "="];
    return num.map(num => {
      if (Number.parseInt(num)) {
        return (
          <div onClick={this.textHandeler} className="Button" id={num}>
            {num}
          </div>
        );
      } else if (num === 0) {
        return (
          <div onClick={this.textHandeler} className="Button Row" id={num}>
            {num}
          </div>
        );
      } else if (num === "clear") {
        return (
          <div onClick={this.clearHandler} className="Button Row">
            Clear
          </div>
        );
      } else {
        return (
          <div onClick={this.textHandeler} className="Button op" id={num}>
            {num}
          </div>
        );
      }
    });
  };
  render() {
    console.log(this.state.text);
    return (
      <div className="Calc">
        <Display text={this.state.text} />
        <div className="Buttons">{this.MakeButtons()}</div>
      </div>
    );
  }
}
