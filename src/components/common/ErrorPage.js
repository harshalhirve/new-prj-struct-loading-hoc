import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => (
  <div>
    <h3>No such page exists</h3>
    <Link to={"/"}>Go back to home page</Link>
  </div>
);

export default ErrorPage;
