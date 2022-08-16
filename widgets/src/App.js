import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Header from "./components/Header";
import Route from "./components/Route";
import Search from "./components/Search";
import Translate from "./components/Translate";
const items = [
  {
    title: "What fruit did luffy really eat ?",
    content:
      "It has been revealed that luffy ate the gum gum fruit but in the latest advance in one piece its true nature is going to be revealed.",
  },
  {
    title: "Why does apex make me rage ?",
    content: "You're trash",
  },
  {
    title: "Is GRR going to finish asoiaf ?",
    content: "He is busy writing demon names for elden",
  },
  {
    title: "Vets literally suck. True or false?",
    content: "Yeah they are basically trash",
  },
];
const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

const App = (props) => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="select color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
export default App;
