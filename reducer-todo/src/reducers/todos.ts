// Utils
import { createReducer, updateItemInArray, updateObject } from '../utils/reducerFunctions';

// Interfaces
import Todo from '../interfaces/Todo';
import State from '../interfaces/State';

export const initialState = {
  todos: [
    {
      item: 'Learn about reducers',
      completed: false,
      id: 3892987589
    }
  ]
};

const addTodo = (
  todosState: readonly Todo[],
  action: { readonly item: string; readonly id: number }
): readonly Todo[] =>
  todosState.concat({
    item: action.item,
    completed: false,
    id: action.id
  });

const toggleTodo = (
  todosState: readonly Todo[],
  action: { readonly id: number }
): readonly object[] =>
  updateItemInArray(todosState, action.id, (todo: { readonly completed: boolean }) =>
    updateObject(todo, { completed: !todo.completed })
  );

const clearCompleted = (todoState: readonly Todo[]): readonly Todo[] =>
  todoState.filter(todo => !todo.completed);

const todosReducer = createReducer({
  initialState: [],
  handlers: {
    ADD_TODO: addTodo,
    TOGGLE_TODO: toggleTodo,
    CLEAR_COMPLETED: clearCompleted
  }
});

export const appReducer = (
  state: State = initialState,
  action: { readonly type: string }
): State => ({
  todos: todosReducer(state.todos, action)
});
