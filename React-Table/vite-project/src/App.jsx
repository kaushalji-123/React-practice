import { useEffect } from 'react';
const App = () => {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/10')
    .then(Response  => Response.json())
    .then(data => console.log(data))

  }, [])
  return (
    <div>App
      
    </div>
  )
}

export default App