import React from 'react'

const AppTask = () => {
  return (
    <div>
         <div className="todo-container ">

        <div className="row dkrow">
          <div className="col-6">
            Learning javaScropt
          </div>
          <div className="col-4">
              08/05/2002

          </div>
          <div className="col-2">
            <button type="button" className="btn btn-danger button">
            delete
            </button>
          </div>
        </div>

        <div className="row dkrow">
          <div className="col-6">
            do code
          </div>
          <div className="col-4">
            08/05/2002
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-danger button">
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppTask