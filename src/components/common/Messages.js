import React from "react";

const Messages = ({ loading, sucMsg, errMsg }) => {
  let messageData;
  if (loading) {
    messageData = null;
  } else if (sucMsg !== "") {
    messageData = (
      <tr>
        <td align="center" className="sucMsg">
          {sucMsg}
        </td>
      </tr>
    );
  } else if (errMsg !== "") {
    messageData = (
      <tr>
        <td align="center" className="errMsg">
          {errMsg}
        </td>
      </tr>
    );
  }
  return <>{messageData}</>;
};

export default Messages;
