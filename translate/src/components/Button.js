import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  //variable has to be "contextType" only
  static contextType = LanguageContext;

  renderSubmit(value) {
    return value === "english" ? "Submit" : "प्रस्तुत";
  }
  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {({ language }) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    );
  }
  render() {
    //const text = this.context === "english" ? "Submit" : "प्रस्तुत";
    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton()}
      </ColorContext.Consumer>
    );
  }
}
export default Button;
