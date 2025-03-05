import React from 'react'

export const TaskComponent = ({ tasks, removeTask }) => {
  return (
    <>
        {
          tasks.map( task => (
            <li 
                key={task.id} 
                className="list-group-item d-flex justify-content-between align-items-center"
            >
              {task.name}
                <button 
                    className="btn btn-danger btn-sm"
                    // onClick={removeTask(task.id)} // va a ejecutar la función en el momento que se renderiza
                    onClick={() => removeTask(task.id)} // va a ejecutar la función en el momento que se haga click
                >
                    Eliminar
                </button>
            </li>
          ))
        }
    </>
  )
}
