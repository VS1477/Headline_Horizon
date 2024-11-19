// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Newsapp from "./Components/Newsapp";
import Contact from "./Components/Contact";
import Subscribe from "./Components/Subscribe";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Newsapp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/subscribe" element={<Subscribe />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
