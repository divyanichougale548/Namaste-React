import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./src/componets/header/Header";
import Footer from "./src/componets/Footer/Footer";
import Body from "./src/componets/Body/Body";
import About from "./src/componets/About/About";
import Contacts from "./src/componets/Contacts/Contacts";

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contacts />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
