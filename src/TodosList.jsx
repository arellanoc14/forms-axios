import React from 'react';
import TodosP from "./todos"
const TodosList = props => {
  const {
    todos,
    buttonDelete,
    buttonUpdate
  } = props;
  return (
    <div className = "TodosList">
    	<ul>
    		{
          todos.map(list => (
              <TodosP 
                task = {list.task}
                comment = {list.comment}
                handleDelete = {() => buttonDelete(list)}
                handleUpdate = {() => buttonUpdate(list)}
              />
          ))
    		}
    	</ul>
    </div>
  )
}

export default TodosList;