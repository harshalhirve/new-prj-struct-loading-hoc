import React from "react";
import { Link } from "react-router-dom";
import Loading from "../common/Loading";

const renderPostRows = (postList, deletePost) => {
  return postList.map((post, index) => {
    return (
      <tr key={post.id}>
        <td>{index + 1}</td>
        <td>{post.title}</td>
        <td>
          <Link to={`/postForm/${post.id}`}>Edit</Link>
          &nbsp;|&nbsp;
          <button
            onClick={() => {
              deletePost(post.id);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });
};

const PostListContent = ({ loading, postList, deletePost }) => {
  let renderData = loading ? (
    <Loading />
  ) : (
    <table border="0" cellPadding="5" cellSpacing="5" align="center">
      <tbody>{renderPostRows(postList, deletePost)}</tbody>
    </table>
  );
  return <>{renderData}</>;
};

export default PostListContent;
