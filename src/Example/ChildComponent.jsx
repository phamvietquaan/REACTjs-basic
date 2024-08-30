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
    console.log(">>> check props: ", this.props);
    let { name, age, address, arrJobs } = this.props;
    let a = "";
    return (
      <div>
        <div className="Job-lists">
          {
            (a = arrJobs.map((item, index) => {
              return (
                <div key={item.id}>
                  {item.title} - {item.salary}
                </div>
              );
            }))
          }
          {console.log(">>> check map array: ", a)}
        </div>
      </div>
    );
  }
}
export default ChildComponent;
