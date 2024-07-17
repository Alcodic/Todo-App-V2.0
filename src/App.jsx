import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import ItemList from "./components/ItemList";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { nameOfItem: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter(
      (item) => item.nameOfItem !== todoItemName
    );
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <ItemList props={todoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
}

export default App;
