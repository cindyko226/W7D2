import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import { receiveTodo, receiveTodos} from './actions/todo_actions'
import App from '../frontend/components/app'

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<App/>, document.getElementById('content'))
  const store = configureStore();
  window.store = store 
  window.receiveTodo = receiveTodo
  window.receiveTodos = receiveTodos

})


