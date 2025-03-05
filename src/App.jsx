import { useState } from "react"
import { InputComponent } from "./components/InputComponent"
import { TaskComponent } from "./components/TaskComponent";
import { v4 as uuidv4 } from 'uuid';

export const App = () => {

  const [tasks, setTasks] = useState([]);

  const addTask = ( name ) => {

    if( name === "" || name === null ) {
      alert("Escribe una tarea válida");
      return;
    }

    const task = {
      id: uuidv4(),
      name
    }

    // [] arreglo
    // ... split
    // [ ...task ] copia del arreglo anterior
    // [ ...tasks, task ] agrega la nueva tarea al arreglo
    setTasks([ ...tasks, task ]);
  }

  const removeTask = ( id ) => {
    const TareasFiltradas = tasks.filter( (task) => task.id !== id );
    setTasks( TareasFiltradas );
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
        <TaskComponent 
          tasks={tasks}
          removeTask={removeTask}
        />
      </ul>

    </div>
  )
}
