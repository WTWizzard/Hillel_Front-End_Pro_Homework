import { listOfTasks } from "../constants";
import ToDoItem from "./ToDoItem";

const ToDoList = () => {
  return (
    <div className="to-do-list__wrapper">
      <div className="to-do-list__items__wrapper">
        {listOfTasks.map((item) =>
          !item.hidden ? <ToDoItem key={item.id} item={item} /> : null
        )}
      </div>
    </div>
  );
};

export default ToDoList;
