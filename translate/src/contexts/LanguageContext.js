import React from "react";

//creating context with a default value : ( string type) english
//export default React.createContext("English");

const Context = React.createContext("English");

export class LanguageStore extends React.Component {
  state = { language: "english" };
  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
export default Context;
