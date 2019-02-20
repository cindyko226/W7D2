

const allTodos = (state) => { 
  return Object.values(state.todos);

}

export default allTodos;

window.allTodos = allTodos;