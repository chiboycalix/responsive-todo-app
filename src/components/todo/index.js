import React from "react";
import "./styles.scss";
import { Check, Button } from "../../components";

const Todo = (props) => {
  const [todoObj, updateTodoObj] = React.useState(props.todo);

  const onClick = () => {
    updateTodoObj({ ...todoObj, completed: !todoObj.completed });
  };

  return (
    <div className="todoWrapper">
      <div className="imgWrapper">
        <img src={todoObj.img} alt={todoObj.img} />
      </div>
      {todoObj.completed ? null : (
        <div className="checkWrapper">
          <Check />
        </div>
      )}

      <div className="todoCard">
        <div>
          <p>{todoObj.id}</p>
        </div>
        <div>
          <p>{todoObj.description}</p>
        </div>
        <div>
          <Button onClick={onClick}>
            {todoObj.completed ? "Done" : "Reset"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
