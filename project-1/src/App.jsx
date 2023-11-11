import "./App.css";
import AppInput from "./Components/AppInput";
import AppName from "./Components/AppName";
import AppTask from "./Components/AppTask";

function App() {
  return (
    <center >
      <AppName></AppName>
      <div className="taskContainer">
      <AppInput></AppInput>
      <AppTask ></AppTask>
      </div>
    </center>
  );
}

export default App;
