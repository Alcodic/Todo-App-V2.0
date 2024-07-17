import TodoItem from "./TodoItem";
import styles from "./ItemList.module.css";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

const ItemList = () => {
  // const contextObj = useContext(TodoItemsContext);
  // const itemList = contextObj.items;

  //We have use destructuring to concise above code in single line
  const { items } = useContext(TodoItemsContext);

  return (
    <div className={styles.itemsContainer}>
      {items.map((item) => (
        <TodoItem
          key={item.nameOfItem}
          todoDate={item.dueDate}
          todoName={item.nameOfItem}
        ></TodoItem>
      ))}
    </div>
  );
};

export default ItemList;
