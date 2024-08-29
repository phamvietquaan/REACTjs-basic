import React, { Fragment } from "react";
class ChildComponent extends React.Component {
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
        <div>Hello World</div>
      </>
    );
  }
}
export default ChildComponent;
