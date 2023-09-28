import React from "react";
import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";

function App() {
  const [user] = useState("Ivan");

  return (
    <>
      <Header name={user}></Header>

      <Meme></Meme>
    </>
  );
}

export default App;
