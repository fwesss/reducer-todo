import { createReducer, updateItemInArray, updateObject } from '../utils/reducerFunctions';

export const initialState = {
  todos: [
    {
      item: 'Learn about reducers',
      completed: false,
      id: 3892987589
    }
  ]
};

const addTodo = (todosState, action) =>
  todosState.concat({
    item: action.item,
    completed: false,
    id: action.id
  });

const toggleTodo = (todosState, action) =>
  updateItemInArray(todosState, action.id, todo => {
    return updateObject(todo, { completed: !todo.completed });
  });

const clearCompleted = todoState =>
  todoState.filter(todo => {
    return !todo.completed;
  });

const todosReducer = createReducer([], {
  ADD_TODO: addTodo,
  TOGGLE_TODO: toggleTodo,
  CLEAR_COMPLETED: clearCompleted
});

export const appReducer = (state = initialState, action) => ({
  todos: todosReducer(state.todos, action)
});
