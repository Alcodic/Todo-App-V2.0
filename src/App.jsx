import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import ItemList from "./components/ItemList";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemsContextProvider from "./store/todo-items-store";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <ItemList />
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
