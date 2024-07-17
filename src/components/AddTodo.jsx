import { useRef } from "react";
import styles from "./AddTodo.module.css";
import { IoMdAddCircleOutline } from "react-icons/io";

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    console.log(`${todoName} due on: ${dueDate}`);
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, dueDate);
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            className={styles.input}
            type="text"
            ref={todoNameElement}
            placeholder="Enter ToDo here"
          />
        </div>
        <div className="col-4">
          <input className={styles.input} type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button">
            <IoMdAddCircleOutline />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
