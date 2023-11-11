import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./Components/FoodItems"
function App() {

  // let foodItems = ["Dal","Chawal","Sabji","Roti","Fruits"];

  return (
    <>
    <h1>Healthy Food</h1>
    {foodItems.length === 0 && <h3> i'm still hungry enough give me food  </h3>}
        <FoodItems></FoodItems>
    </>
  );
}
export default App
