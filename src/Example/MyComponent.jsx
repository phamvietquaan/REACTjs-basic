import React, { Fragment } from "react";
class MyComponent extends React.Component {
  state = {
    name: "PVQ",
    channel: "Hoi Dan IT",
  };
  /* 
    JSX => return block
  */
  handleOnChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  render() {
    return (
      <>
        <div className="First">
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChangeName(event)}
          />
          My name is {this.state["name"]}
        </div>
        <div className="Second"> My youtobe channel: {this.state.channel} </div>
      </>
    );
  }
}
export default MyComponent;
