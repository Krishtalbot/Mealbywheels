import { React } from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import MenuPage from "./pages/MenuContent";
import Charity from "./pages/Charity";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Career from "./pages/Career";

const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/mealbywheels" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/charity" element={<Charity />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
};

export default App;
