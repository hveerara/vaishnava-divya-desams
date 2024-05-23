import { default as React } from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import About from "./components/About.js";
import AllCategories from "./components/AllCategories.js";
import Category from "./components/Category.js";
import Song from "./components/Song.js";

const App = () => {
  return (
    <>
      {/* <ScrollToTop /> */}
      <Router>
        <Routes>
          <Route path="/" element={<AllCategories />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/about" element={<About />} />
          <Route path="/song/:id" element={<Song />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
