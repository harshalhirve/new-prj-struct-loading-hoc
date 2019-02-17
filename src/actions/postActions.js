import * as a from "./actionTypes";
import PostsAPI from "../apis/postsAPI";

export function clearAllPostMsgs() {
  return { type: a.CLEAR_ALL_POSTS_MSGS };
}

export function clearPostErrMsgs() {
  return { type: a.CLEAR_POSTS_ERR_MSGS };
}

export function clearPostStates(state) {
  return { type: a.CLEAR_POSTS_STATES, state };
}

function showPostSucMsg(sucMsg) {
  return { type: a.POST_SUCCESS_MSG, sucMsg };
}

function showPostErrMsg(errMsg) {
  return { type: a.POST_ERROR_MSG, errMsg };
}

function getPostListSuccess(postList) {
  return { type: a.POST_LIST_SUCCESS, postList };
}

function getPostDetailsSuccess(postDetails) {
  return { type: a.POST_DETAILS_SUCCESS, postDetails };
}

export function getPostList() {
  return async dispatch => {
    try {
      dispatch(clearAllPostMsgs());
      const postList = await PostsAPI.getPostList();
      dispatch(getPostListSuccess(postList));
    } catch ({ errMsg }) {
      dispatch(showPostErrMsg(errMsg));
    }
  };
}

export function getPostDetails(postId) {
  return async dispatch => {
    try {
      dispatch(clearAllPostMsgs());
      const postDetails = await PostsAPI.getPostDetails(postId);
      dispatch(getPostDetailsSuccess(postDetails));
    } catch ({ errMsg }) {
      dispatch(showPostErrMsg(errMsg));
    }
  };
}

export function saveNewPost(data) {
  return async dispatch => {
    try {
      dispatch(clearAllPostMsgs());
      const { sucMsg } = await PostsAPI.saveNewPost(data);
      dispatch(showPostSucMsg(sucMsg));
    } catch ({ errMsg }) {
      dispatch(showPostErrMsg(errMsg));
    }
  };
}

export function updatePost(data) {
  return async dispatch => {
    try {
      dispatch(clearAllPostMsgs());
      const { sucMsg } = await PostsAPI.updatePost(data);
      dispatch(showPostSucMsg(sucMsg));
    } catch ({ errMsg }) {
      dispatch(showPostErrMsg(errMsg));
    }
  };
}

export function deletePost(postId) {
  return async dispatch => {
    try {
      dispatch(clearAllPostMsgs());
      const { sucMsg } = await PostsAPI.deletePost(postId);
      dispatch(showPostSucMsg(sucMsg));
    } catch ({ errMsg }) {
      dispatch(showPostErrMsg(errMsg));
    }
  };
}
