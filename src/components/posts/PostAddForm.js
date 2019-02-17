import React from "react";

const PostAddForm = ({ state, handleChange, saveNewPost, loading }) => {
  return (
    <form onSubmit={saveNewPost}>
      <table border="0" cellPadding="2" cellSpacing="2" align="center">
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                name="title"
                className={state.titleErr ? "textBoxErr" : "textBox"}
                value={state.title}
                placeholder="Title"
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                name="body"
                className={state.bodyErr ? "textBoxErr" : "textBox"}
                value={state.body}
                placeholder="Body"
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td align="center">
              <input
                type="submit"
                name="submit"
                value={loading === true ? "Saving..." : "Submit"}
                disabled={loading === true ? true : false}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default PostAddForm;
