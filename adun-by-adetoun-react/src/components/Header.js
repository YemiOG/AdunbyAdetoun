import React from "react";
var perf = require("./home.html");

class Home extends React.Component {
  render() {
    return <iframe src={perf}></iframe> /* like this */;
  }
}
export default Home;
