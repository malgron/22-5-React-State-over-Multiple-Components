import React, { useState } from "react";
import Content from "./Content";
import Header from "./Header";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const toggleLoggedIn = () => setLoggedIn(!loggedIn);
  const [fontSize, setFontSize] = useState(12);
  const fontSizeIncrease = () => setFontSize((fontSize) => fontSize + 2);
  
  return (
    <div>
      <Header loggedIn={loggedIn} handleLoggedInClick={toggleLoggedIn} handleFontSizeIncrease={fontSizeIncrease} />
      <Content loggedIn={loggedIn} fontSize={fontSize}/>
    </div>
  );
}

export default App;
