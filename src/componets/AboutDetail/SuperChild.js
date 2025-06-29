import React, { useEffect } from "react";

const SuperChild = ({ name }) => {
  useEffect(() => {
    console.log(name + "SuperChild component UseEffect");
  });
  return (
    <>
      {console.log(name + "SuperChild  render")}
      <div>
        <h2>SuperChild</h2>
        <p>This is a sample restaurant app.</p>
      </div>
    </>
  );
};

export default SuperChild;
