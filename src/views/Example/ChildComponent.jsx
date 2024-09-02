import React from "react";
import "./demo.scss";
class ChildComponent extends React.Component {
  state = {
    showJobs: false,
  };

  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };
  handleOnclickDelete = (job) => {
    console.log(">>> handleOnclikeDelete", job);
    this.props.deleteAJob(job);
  };
  render() {
    let { arrJobs } = this.props;
    let { showJobs } = this.state;
    // let check = showJobs === true ? "showJobs = true" : "ShowJobs = false";
    return (
      <>
        {showJobs === false ? (
          <div>
            <button className="btn-show" onClick={() => this.handleShowHide()}>
              Show
            </button>
          </div>
        ) : (
          <>
            <div className="Job-lists">
              {arrJobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.title} - {item.salary} <></>{" "}
                    <span onClick={() => this.handleOnclickDelete(item)}>
                      x
                    </span>
                  </div>
                );
              })}
              {console.log(">>> check map array: ")}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}
// const ChildComponent = (props) => {
//   let { arrJobs } = props;

//   return (
//     <>
//       <div className="job-lists">
//         {arrJobs.map((item, index) => {
//           if (item.salary >= 500) {
//             return (
//               <div key={item.id}>
//                 {item.title} - {item.salary}
//               </div>
//             );
//           }
//         })}
//       </div>
//     </>
//   );
// };
export default ChildComponent;
