import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as postActions from "../../actions/postActions";
import withLoading from "../../hoc/withLoading";
import Messages from "../../components/common/Messages";
import PostAddForm from "../../components/posts/PostAddForm";
import PostEditForm from "../../components/posts/PostEditForm";

class PostForm extends Component {
  constructor() {
    super();
    this.state = {
      id: null,
      title: "",
      titleErr: false,
      body: "",
      bodyErr: false
    };
    this.validateForm = this.validateForm.bind(this);
    this.saveNewPost = this.saveNewPost.bind(this);
    this.getPostDetails = this.getPostDetails.bind(this);
    this.updatePost = this.updatePost.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      this.setState(
        {
          id: this.props.match.params.id
        },
        () => {
          this.getPostDetails(this.state.id);
        }
      );
    }
  }

  componentWillUnmount() {
    this.props.clearAllPostMsgs();
    if (this.state.id) {
      this.props.clearPostStates("details");
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state !== nextState) {
      return true;
    }
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

  validateForm() {
    const stateData = Object.assign({}, this.state);
    let { titleErr, bodyErr } = stateData;
    let errArr = [];
    if (this.state.title.trim() === "") {
      errArr.push(1);
      titleErr = true;
    } else {
      titleErr = false;
    }
    if (this.state.body.trim() === "") {
      errArr.push(2);
      bodyErr = true;
    } else {
      bodyErr = false;
    }
    return new Promise(resolve => {
      this.setState(
        prevState => ({
          ...prevState,
          titleErr,
          bodyErr
        }),
        () => {
          resolve(errArr.length === 0);
        }
      );
    });
  }

  async saveNewPost(e) {
    e.preventDefault();
    if (await this.validateForm()) {
      await this.props.toggleLoading();
      await this.props.saveNewPost({
        title: this.state.title,
        body: this.state.body
      });
      await this.props.toggleLoading();
    }
  }

  async getPostDetails(id) {
    await this.props.toggleLoading();
    await this.props.getPostDetails(id);
    this.setState({
      id: this.props.postDetails.id,
      title: this.props.postDetails.title,
      body: this.props.postDetails.body
    });
    await this.props.toggleLoading();
  }

  async updatePost(e) {
    e.preventDefault();
    if (await this.validateForm()) {
      await this.props.toggleLoading();
      await this.props.updatePost({
        id: this.state.id,
        title: this.state.title,
        body: this.state.body
      });
      await this.props.toggleLoading();
    }
  }

  handleChange(e) {
    let { name, value } = e.target;
    this.setState({
      [name]: value,
      ...(name === "title" && {
        titleErr: false
      }),
      ...(name === "body" && {
        bodyErr: false
      })
    });
  }

  render() {
    const { id } = this.state;
    const { loading, sucMsg, errMsg } = this.props;
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
                  <Messages loading={loading} sucMsg={sucMsg} errMsg={errMsg} />
                  <tr>
                    <td align="center">
                      {id ? (
                        <PostEditForm
                          state={this.state}
                          handleChange={this.handleChange}
                          updatePost={this.updatePost}
                          loading={loading}
                        />
                      ) : (
                        <PostAddForm
                          state={this.state}
                          handleChange={this.handleChange}
                          saveNewPost={this.saveNewPost}
                          loading={loading}
                        />
                      )}
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
  )(PostForm)
);
