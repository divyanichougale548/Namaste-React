import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/componets/header/Header";
import Footer from "./src/componets/Footer/Footer";
import Body from "./src/componets/Body/Body";

// Example About and Contact components

const App = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
