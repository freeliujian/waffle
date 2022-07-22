import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  const [text, setText] = React.useState("Hello waffle!");
  return (
    <span
      onClick={() => {
        setText("Hi!");
      }}
    >111111122222222233333333
      {text}
    </span>
  );
};

const root = createRoot(document.getElementById("waffle") as Element);
root.render(React.createElement(App));
