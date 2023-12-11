import { useState,useEffect } from "react"
function App() {
  const [count, setCount] = useState(0);

useEffect(() =>{
  //code 
console.log("count Updated");

},[count])

  const incremenr = () =>{
    setCount(count + 1);
  };

  return (
    <>
    <p> Count:{count} </p>
      <button onClick={increment} >increment</button>  
    </>
  )
}

export default App
