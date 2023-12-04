import React from 'react'

const AddTodo = () => {
  return (
    <div className="container text-center ">
    <div className="row dkrow">
      <div className="col-6">
        <input type="text" placeholder="Enter your Task" />
      </div>
      <div className="col-4">
        <input type="date" />
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-success button">
          Add Task
        </button>
      </div>
    </div>
    </div>
  )
}

export default AddTodo