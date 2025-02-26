import { useState } from "react"

export const InputComponent = ({ addTask }) => {

    const [inputValue, setInputvalue] = useState("");

    const handleChange = ( event ) => {
        setInputvalue( event.target.value );
    }

    const confirmTask = () => {
        addTask( inputValue );
        setInputvalue("");
    }

  return (
    <>
        <input 
            type="text" 
            placeholder="Escribe una tarea"
            className="form-control"
            value={inputValue}
            onChange={handleChange}
        />
        <button 
            className="btn btn-outline-primary"
            onClick={confirmTask}
        >
            Agregar
        </button>
    </>
  )
}
