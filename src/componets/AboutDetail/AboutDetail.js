import React, { useEffect } from "react";
import SuperChild from "./SuperChild";

const AboutDetail = ({ name }) => {
  useEffect(() => {
    console.log(name + "abount details component UseEffect");
  });

  return (
    <>
      {console.log(name + "Abount details render")}
      <div>
        <h2>About details Us</h2>
        <p>This is a sample restaurant app.</p>
        <SuperChild name={"Chintu"} />
      </div>
    </>
  );
};

export default AboutDetail;
