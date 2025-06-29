import React, { useEffect, useState } from "react";
import AboutDetail from "../AboutDetail/AboutDetail";

function About() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("abount  component useEffect");
  });

  return (
    <>
      {console.log("Abount  render")}
      <div style={{ padding: "2rem" }}>
        <h2>About Us</h2>
        <p>This is a sample restaurant app.</p>
        <button
          onClick={() => {
            setCount((count)=>count+1)
          }}
        >
          Click Me
        </button>
        <AboutDetail name={"Divyani"} />
        <AboutDetail name={"Manoj"} />
      </div>
    </>
  );
}

export default About;
