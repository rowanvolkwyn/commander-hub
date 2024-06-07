import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Decklist from "./pages/Decklist";
import { useState } from 'react';

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Decklist />
      </div>
    </>
  )
}

export default App
