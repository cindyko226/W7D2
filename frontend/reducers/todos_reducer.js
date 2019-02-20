import {RECEIVE_TODOS} from '../actions/todo_actions'
import {RECEIVE_TODO} from '../actions/todo_actions'
import {merge} from 'lodash'

const initialState = {
 1 : {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};


const todosReducer = (state = initialState, action) => {
  switch(action.type) {
    case(RECEIVE_TODOS):
      let newState = {};
      action.todos.forEach(el => {
        newState[el.id] = el 
      });
      return newState;
    case(RECEIVE_TODO):
      let newState1 = merge({},state);
      newState1[action.todo.id] = action.todo
      return newState1;
    default: 
      return state;
  }
};

export default todosReducer;