import React from "react";
import { Link } from "react-router-dom";
const RouteTest = () => {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"/diary"}>diary</Link>
      <br />
      <Link to={"/new"}>new</Link>
      <br />
      <Link to={"/edit"}>edit</Link>
      <br />
    </div>
  );
};

export default RouteTest;
