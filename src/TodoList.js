import React from 'react';
import TodoItem from './TodoItem';
import todos from './todos';
import users from './users';


function TodoList() {
  
  const allData = todos.map(item => {
    return {
      ...item,
      userData: users.find(user => item.userId === user.id)
    };
  });
   
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>CHECK</th>
            <th>TITLE</th>
            <th>USER</th>
          </tr>
        </thead>
        <tbody>
          {allData.map(item => (
            <TodoItem key={item.id} todo={item} />)
          )}
        </tbody>
       </table>
    </div>
  );
}

export default TodoList;
