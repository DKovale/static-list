import React from 'react';
import User from './User'

function TodoItem(props) {
  return (
    <tr>
      <td className="column1">
        <input type="checkbox" checked={props.todo.completed} />
      </td>
      <td className="column2">{props.todo.title}</td>
      <td>
        <User key={props.todo.userData.id} data={props.todo.userData} />
      </td>
    </tr>       
  );
}

export default TodoItem;
