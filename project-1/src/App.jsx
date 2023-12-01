import "./App.css";
import AppInput from "./Components/AppInput";
import AppName from "./Components/AppName";
import AppTask from "./Components/AppTask";
import AppTask1 from "./Components/AppTask1";



function App() {
  return (
    <center >
      <AppName></AppName>
      <AppInput></AppInput>
      <div className="taskContainer">
      <AppTask ></AppTask>
      <AppTask1 ></AppTask1>

      </div>
    </center>
  );
}

export default App;
