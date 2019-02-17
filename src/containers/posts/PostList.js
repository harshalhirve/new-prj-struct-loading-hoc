import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as postActions from "../../actions/postActions";
import withLoading from "../../hoc/withLoading";
import Messages from "../../components/common/Messages";
import PostListContent from "../../components/posts/PostListContent";

class PostList extends Component {
  constructor() {
    super();
    this.getPostList = this.getPostList.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }

  componentDidMount() {
    this.getPostList();
  }

  componentWillUnmount() {
    this.props.clearAllPostMsgs();
    this.props.clearPostStates("list");
  }

  shouldComponentUpdate(nextProps, nextState) {
    // if (this.state !== nextState) {
    //   return true;
    // }
    if (
      this.props.location.pathname.trim() !== nextProps.location.pathname.trim()
    ) {
      return true;
    }
    if (this.props.loading !== nextProps.loading) {
      return true;
    }
    return false;
  }

  async getPostList() {
    await this.props.toggleLoading();
    await this.props.getPostList();
    await this.props.toggleLoading();
  }

  async deletePost(id) {
    await this.props.toggleLoading();
    await this.props.deletePost(id);
    await this.props.toggleLoading();
  }

  render() {
    const { loading, postList, sucMsg, errMsg } = this.props;
    //console.log(loading);
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
                      <Link to="/postForm">Add New Post</Link>
                    </td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                  </tr>
                  <Messages loading={loading} sucMsg={sucMsg} errMsg={errMsg} />
                  <tr>
                    <td>
                      <PostListContent
                        loading={loading}
                        postList={postList}
                        deletePost={this.deletePost}
                      />
                    </td>
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

function mapStateToProps(state) {
  return {
    ...state.posts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(Object.assign({}, postActions), dispatch)
  };
}

export default withLoading(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostList)
);
