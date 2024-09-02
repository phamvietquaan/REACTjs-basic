import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {
  state = {
    arrJobs: [
      {
        id: "abcJob1",
        title: "developer",
        salary: "500",
      },
      {
        id: "abcJob2",
        title: "Project Manager",
        salary: "600",
      },
      {
        id: "abcJob5",
        title: " Manager",
        salary: "300",
      },
    ],
  };
  addNewJob = (job) => {
    console.log("check job from parent: ", job);
    // let currenJobs = this.state.arrJobs;
    // currenJobs.push(job);
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
      // arrJobs: currenJobs,
    });
  };
  deleteAJob = (job) => {
    let currentJobs = this.state.arrJobs;
    currentJobs = currentJobs.filter((item) => item.id !== job.id);
    this.setState({
      arrJobs: currentJobs,
    });
  };
  // re-render
  render() {
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />
        {/* <form>
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
        </form> */}
        <ChildComponent
          arrJobs={this.state.arrJobs}
          deleteAJob={this.deleteAJob}
        />
      </>
    );
  }
}
export default MyComponent;
