import axios from "axios";

class PostsAPI {
  static async getPostList() {
    try {
      const postList = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return postList.data;
    } catch (error) {
      //console.log(JSON.parse(JSON.stringify(error)));
      throw { errMsg: "An error occurred while getching post list." };
    }
  }

  static async saveNewPost({ title, body }) {
    try {
      await axios.post("https://jsonplaceholder.typicode.com/posts", {
        title,
        body,
        userId: 1
      });
      return { sucMsg: "New post saved successfully." };
    } catch (error) {
      throw { errMsg: "An error occurred while saving a new post." };
    }
  }

  static async getPostDetails(postId) {
    try {
      const postDetails = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      return postDetails.data;
    } catch (error) {
      throw { errMsg: "An error occurred while fetching the post details." };
    }
  }

  static async updatePost({ id, title, body }) {
    try {
      await axios.patch("https://jsonplaceholder.typicode.com/posts/" + id, {
        title,
        body,
        userId: 1
      });
      return { sucMsg: "Post details updated successfully." };
    } catch (error) {
      throw { errMsg: "An error occurred while updating a selected post." };
    }
  }

  static async deletePost(postId) {
    try {
      await axios.delete(
        "https://jsonplaceholder.typicode.com/posts/" + postId
      );
      return { sucMsg: "Post deleted successfully." };
    } catch (error) {
      throw { errMsg: "An error occurred while deleting the selected post." };
    }
  }
}

export default PostsAPI;
