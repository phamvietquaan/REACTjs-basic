import React, { Fragment } from "react";
// class ChildComponent extends React.Component {
//   render() {
//     console.log(">>> check props: ", this.props);
//     let { name, age, address, arrJobs } = this.props;
//     let a = "";
//     return (
//       <div>
//         <div className="Job-lists">
//           {
//             (a = arrJobs.map((item, index) => {
//               return (
//                 <div key={item.id}>
//                   {item.title} - {item.salary}
//                 </div>
//               );
//             }))
//           }
//           {console.log(">>> check map array: ", a)}
//         </div>
//       </div>
//     );
//   }
// }
const ChildComponent = (props) => {
  let { arrJobs } = props;
  let a = "";
  return (
    <div>
      <div className="Job-lists">
        {arrJobs.map((item, index) => {
          return (
            <div key={item.id}>
              {item.title} - {item.salary}
            </div>
          );
        })}
        {console.log(">>> check map array: ", a)}
      </div>
    </div>
  );
};
export default ChildComponent;
