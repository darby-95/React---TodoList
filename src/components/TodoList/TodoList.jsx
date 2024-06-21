import React, { useState } from 'react'
import AddTodo from '../AddTodo/AddTodo';

function TodoList() {
  // todos : 7,8번째 줄에 적힌 기본 값. (기존의 할일)
  // setTodos : todos, todo를 묶는 값.
    const [todos,setTodos]=useState([
        {id:123, text:"공부하기", status:"active"}, /* todos의 0번째 */
        {id:456, text:"운동하기", status:"active"}, /* todos의 1번째...... */
    ])

    const handleAdd=(todo)=>{
      // 배열로 묶여져있어, setTodos 안의 todos, todo도 배열❗❗로 묶어줘야 한다.
      setTodos([...todos,todo]) /* ...todos : 6,7번째줄의 todos를 모두 불러오고 todo(새로운 할일, 사용자가 input에 적은 값)을 넣는다. */
    }


  return (
    <section>
      <ul>
        {/* todos의 map함수를 사용하겠다. */}
        {todos.map((item)=>{
          return (<li key={item.id}>{item.text}</li>);
        })}
      </ul>
      {/* <AddTodo/>를 적으면 AddTodo.jsx의 내용을 불러온다. */}
      <AddTodo onAdd={handleAdd}/>
    </section>
  )
}

export default TodoList