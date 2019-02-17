import React from "react";

const withLoading = WrappedComponent => {
  class WithLoading extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: false
      };
      this.toggleLoading = this.toggleLoading.bind(this);
    }

    async toggleLoading() {
      return new Promise(resolve => {
        this.setState(
          {
            loading: !this.state.loading
          },
          () => {
            resolve(true);
          }
        );
      });
    }

    render() {
      return (
        <WrappedComponent
          loading={this.state.loading}
          toggleLoading={this.toggleLoading}
          {...this.props}
        />
      );
    }
  }
  return WithLoading;
};

export default withLoading;
