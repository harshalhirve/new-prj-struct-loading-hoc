import * as a from "../actions/actionTypes";
import initialState from "./initialState";

export default function posts(state = initialState.posts, action) {
  switch (action.type) {
    case a.CLEAR_ALL_POSTS_MSGS:
      return {
        ...state,
        sucMsg: "",
        errMsg: ""
      };
    case a.CLEAR_POSTS_ERR_MSGS:
      return {
        ...state,
        errMsg: ""
      };
    case a.CLEAR_POSTS_STATES:
      switch (action.state) {
        case "list":
          return {
            ...state,
            postList: []
          };
        case "details":
          return {
            ...state,
            postDetails: {}
          };
        default:
          return state;
      }
    case a.POST_ERROR_MSG:
      return {
        ...state,
        errMsg: action.errMsg
      };
    case a.POST_SUCCESS_MSG:
      return {
        ...state,
        sucMsg: action.sucMsg
      };
    case a.POST_LIST_SUCCESS:
      return {
        ...state,
        postList: action.postList
      };
    case a.POST_DETAILS_SUCCESS:
      return {
        ...state,
        postDetails: action.postDetails
      };
    default:
      return state;
  }
}
