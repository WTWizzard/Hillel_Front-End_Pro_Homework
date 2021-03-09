import { FC } from "react";
import Check from "./Check";
import { ToDoItemProps } from "./interfaces";
import Remove from "./Remove";
import TextHolder from "./TextHolder";

const ToDoItem: FC<ToDoItemProps> = ({ item }) => {
  return (
    <>
      <div className={"to-do-list__item"}>
        <Check />
        <TextHolder item={item} />
        <Remove />
      </div>
      <div></div>
    </>
  );
};

export default ToDoItem;
