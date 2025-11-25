import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddNewHotel from "./components/AddNewHotel";
import ReadAllHotel from "./components/ReadAllHotel";

function App() {
  return (
    <div>
      <AddNewHotel />
      <ReadAllHotel />
    </div>
  );
}

export default App;
