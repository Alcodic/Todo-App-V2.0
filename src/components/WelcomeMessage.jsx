import { useContext } from "react";
import styles from "./WelcomeMessage.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

const WelcomeMessage = () => {
  // const contextObj = useContext(TodoItemsContext);
  // const itemList = contextObj.items;

  //We have use destructuring to concise above code in single line
  const { items } = useContext(TodoItemsContext);

  return (
    items.length === 0 && (
      <p className={styles.welcome}>
        Enjoy your day as you don't have pending todo task
      </p>
    )
  );
};

export default WelcomeMessage;
