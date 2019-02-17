import React from "react";
import { Link } from "react-router-dom";

const TopLinks = () => (
  <table border="0" cellPadding="0" cellSpacing="5" align="center">
    <tbody>
      <tr>
        <td>
          <Link to="/">Posts</Link>
        </td>
        <td>&nbsp;|&nbsp;</td>
        <td>
          <Link to="/todos">To Dos</Link>
        </td>
      </tr>
    </tbody>
  </table>
);

export default TopLinks;
