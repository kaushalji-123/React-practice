import React from "react";

const AppTask = () => {

  let todoName = 'Learning React';
  let todoDate = '08/05/2002'
  return (
    <div>
      <div className="todo-container ">
        <div className="row dkrow">
          <div className="col-6">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger button">
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppTask;
