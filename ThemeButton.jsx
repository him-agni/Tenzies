import React from "react";
import { ThemeContext } from "./App";

export default function ThemeButton() {
  const { toggleTheme } = React.useContext(ThemeContext);

  return <button onClick={toggleTheme}>Switch Theme</button>;
}
