import { useState } from "react"
import { InputComponent } from "./components/InputComponent"

export const App = () => {

  const [tasks, setTasks] = useState([]);

  const addTask = ( name ) => {
    const task = {
      id: 1,
      name
    }

    setTasks([ ...tasks, task ]);
  }

  return (
    <div className="container">

      <div className="header">
        <h1>Mi todo List</h1>
      </div>

      <div className="main d-flex justify-content-center flex-wrap gap-2">
        <InputComponent
          addTask={addTask}
        />
      </div>

      <ul className="list-group w-100 mt-3">
        {
          tasks.map( task => (
            <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
              {task.name}
              <button className="btn btn-danger btn-sm">Eliminar</button>
            </li>
          ))
        }
      </ul>

    </div>
  )
}
