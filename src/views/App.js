import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "../Example/MyComponent";
/**
 * 2 components: class component / function component (function, arrow )
 */
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>HOC ReactBasic</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyComponent></MyComponent>
      </header>
    </div>
  );
};
export default App;
// fix Can't resolve module (not found) in React.js
