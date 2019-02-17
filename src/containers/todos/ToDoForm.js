import React, { Component } from "react";
import { Link } from "react-router-dom";

class PostForm extends Component {
  render() {
    return (
      <table
        border="0"
        cellPadding="0"
        cellSpacing="0"
        width="100%"
        align="center"
      >
        <tbody>
          <tr>
            <td>
              <table
                border="0"
                cellPadding="0"
                cellSpacing="0"
                width="100%"
                align="center"
              >
                <tbody>
                  <tr>
                    <td align="right">
                      <Link to="/">Back</Link>
                    </td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>Post Add Edit Forms here...</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default PostForm;
