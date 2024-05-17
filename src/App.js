import React from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import About from "./components/About.js";
import AllSongs from "./components/AllSongs.js";
import Song from "./components/Song.js";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllSongs />} />
        <Route path="/about" element={<About />} />
        <Route path="/song/:id" element={<Song />} />
      </Routes>
    </Router>
  );
};

export default App;
