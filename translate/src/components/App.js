import React from "react";
import UserCreate from "./UserCreate";
import { LanguageStore } from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import LanguageSelector from "./LanguageSelector";

class App extends React.Component {
  // state = { language: "english" };
  // onLanguageChange = (language) => {
  //   this.setState({ language });
  // };
  render() {
    return (
      <div className="ui container">
        {/* <div>
          Select a Language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag in"
            onClick={() => this.onLanguageChange("hindi")}
          />
        </div> */}
        <LanguageStore>
          <LanguageSelector />
          <ColorContext.Provider value="red">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}
export default App;
