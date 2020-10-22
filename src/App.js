import React from "react";
import "./style.css";
import ExpandableGrid from "../components/expandablegrid";

export default function App() {
  const Properties = ["class", "name", "color"];
  const Headers = ["Class", "Name", "Color"];

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <ExpandableGrid properties={Properties} headers={Headers} />
    </div>
  );
}
