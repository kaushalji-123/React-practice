import React from 'react'

const data = [{
  name: "John Doe",
  gender: "Male",
  age: 12
},
{
  name: "Gunnu",
  gender: "Female",
  age: 10
},
{
  name: "Pari",
  gender: "Female",
  age: 15
}]

const App = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {data.map((i) =>(
            <tr key={i.name}>
            <td>{i.name}</td>
            <td>{i.gender}</td>
            <td>{i.age}</td>
          </tr>
          ))}
          
          {/* <tr>
            <td>1</td>
            <td>23e</td>
            <td>male</td>
          </tr><tr>
            <td>1</td>
            <td>23e</td>
            <td>male</td>
          </tr>  */}
        </tbody>
      </table>
    </div>
  )
}

export default App