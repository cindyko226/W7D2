import React from 'react'
import TodoListItem from '../todo_list/todo_list_item'
import TodoForm from '../todo_list/todo_form'

const ToDoListsComponents = (props) => {
  return ( <ul>
    <h3>Todo List goes here!</h3>
  { props.todos.map(todo => {
    return TodoListItem(todo)
  })}
   <TodoForm receiveTodo = {props.receiveTodo}/>
  </ul>
  )
} 

export default ToDoListsComponents;