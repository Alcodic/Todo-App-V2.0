import TodoItem from "./TodoItem";
import styles from "./ItemList.module.css";

const ItemList = ({ props, onDeleteClick }) => {
  return (
    <div className={styles.itemsContainer}>
      {props.map((item) => (
        <TodoItem
          key={item.nameOfItem}
          todoDate={item.dueDate}
          todoName={item.nameOfItem}
          onDeleteClickProps={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
};

export default ItemList;
