import { useState,useEffect } from "react"
function App() {
  const [meanings, setMeanings] = useState([]);

  useEffect(() =>{
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/hello')
    .then(resp => resp.json() )
    .then(data => {
      console.log(data[0].meanings);
      setMeanings(data[0].meanings)
    })
  },[]);
  
  return (
    <>
    <h1>hello</h1>
      {meanings?.map((m) => <h2>{m.definitions[0].definition}</h2>)}
    </>
  )
}

export default App













// import AppName from "./components/AppName";
// import AddTodo from "./components/AddTodo";
// import TodoItems from "./components/TodoItems";
// import "./App.css";
// import { useState } from "react";

// function App() {
//   const [todoItems, setTodoItems] = useState([]);

//   const handleNewItem = (itemName, itemDueDate) => {
//     setTodoItems((currValue) => [
//       ...currValue,
//       { name: itemName, dueDate: itemDueDate },
//     ]);
//   };

//   const handleDeleteItem = (todoItemName) => {
//     const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
//     setTodoItems(newTodoItems);
//   };

//   return (
//     <center className="todo-container">
//       <AppName />
//       <AddTodo onNewItem={handleNewItem} />
//       {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
//       <TodoItems
//         todoItems={todoItems}
//         onDeleteClick={handleDeleteItem}
//       ></TodoItems>
//     </center>
//   );
// }

// export default App;


