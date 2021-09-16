import React from "react";
import { Todo } from "./components";
import { TodoList } from "./constants/Todo";
import "./App.scss";

function App() {

  return (
    <div className="appWrapper">
      {TodoList.map((todo) => {

        return (
          <React.Fragment key={todo.id}>
            <Todo todo={todo} />
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default App;
