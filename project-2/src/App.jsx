import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./Components/FoodItems"
import ErrorMsg from './Components/ErrorMsg';
function App() {

  let foodItems = ["Dal","Chawal","Sabji","Roti","Fruits"];

  return (
    <>
    <h1>Healthy Food</h1>
      <ErrorMsg sabji = {foodItems}/>
      <FoodItems sabji={foodItems}></FoodItems>
    </>
  );
}
export default App
