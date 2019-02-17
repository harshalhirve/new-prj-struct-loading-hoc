import React, { Component } from "react";
import Header from "./components/common/Header";
import TopLinks from "./components/common/TopLinks";
import Footer from "./components/common/Footer";
import routes from "./routes/";

class App extends Component {
  render() {
    return (
      <table
        border="0"
        cellPadding="0"
        align="center"
        cellSpacing="0"
        width="95%"
      >
        <tbody>
          <tr>
            <td>
              <Header />
            </td>
          </tr>
          <tr>
            <td>
              <TopLinks />
            </td>
          </tr>
          <tr>
            <td>{routes}</td>
          </tr>
          <tr>
            <td>
              <Footer />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default App;
