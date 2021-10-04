import React from "react";
import { ToDoComponent, Checkbox, Text, TrashIcon } from "./styles/ToDoItem";

export default function ToDoItem({
  checked,
  text,
  priority,
  id,
  handleCheckUncheck,
  handleRemove,
}) {
  return (
    <>
      <ToDoComponent checked={checked} priority={priority} name={id}>
        <Checkbox
          checked={checked}
          name={id}
          onClick={(e) => handleCheckUncheck(e.target.getAttribute("name"))}
        />
        <Text checked={checked}>{text}</Text>
        <TrashIcon
          name={id}
          onClick={(e) => handleRemove(e.target.getAttribute("name"))}
        >
          <i className="fas fa-trash" />
        </TrashIcon>
      </ToDoComponent>
    </>
  );
}
