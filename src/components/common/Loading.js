import React from "react";

const Loading = () => {
  return (
    <table border="0" cellPadding="0" cellSpacing="0" align="center">
      <tbody>
        <tr>
          <td align="center">
            <span role="img" aria-label="Hourglass">
              ⌛
            </span>
            Loading...
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Loading;
