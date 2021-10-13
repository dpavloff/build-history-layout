import React from "react";
import Loader from "react-loader-spinner";

export default class App extends React.Component {
    constructor(props) {
        super();
        this.type = props.type;
        this.color = props.color;
        this.height = props.height;
        this.width = props.width;
        this.timeout = props.timeout;
    }

  render() {
    return (
      <Loader
        type={this.type}
        color={this.color}
        height={this.height}
        width={this.width}
        timeout={this.timeout} //3 secs
      />
    );
  }
}