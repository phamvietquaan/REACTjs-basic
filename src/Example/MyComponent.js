import React, { Fragment } from "react";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {
  state = {
    firstname: " ",
    lastname: " ",
  };
  handleChangeFirstName = (event) => {
    this.setState({
      firstname: event.target.value,
    });
  };
  handleChangeLastName = (event) => {
    this.setState({
      lastname: event.target.value,
    });
  };
  handleSubmit = (event) => {
    // ngan chan refresh lai trang
    event.preventDefault();
    console.log(">> check data input: ", this.state);
  };
  // re-render
  render() {
    console.log(">>> call render: ", this.state);
    return (
      <>
        <form>
          <label htmlFor="fname">First name:</label>
          <br />
          <input
            type="text"
            value={this.state.firstname}
            // button on keyboard
            onChange={(event) => this.handleChangeFirstName(event)}
          />
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input
            type="text"
            value={this.state.lastname}
            onChange={(event) => this.handleChangeLastName(event)}
          />
          <br />
          <br />
          <input
            type="submit"
            // click button
            onClick={(event) => this.handleSubmit(event)}
          />
        </form>
        <ChildComponent />
      </>
    );
  }
}
export default MyComponent;
