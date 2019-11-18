import Todo from './Todo';

export type HandlersFunctions = {
  readonly ADD_TODO: (
    todosState: readonly Todo[],
    action: { readonly item: string; readonly id: number }
  ) => readonly Todo[];

  readonly TOGGLE_TODO: (
    todosState: readonly Todo[],
    action: { readonly id: number }
  ) => readonly object[];

  readonly CLEAR_COMPLETED: (todoState: readonly Todo[]) => readonly Todo[];
};

export type HandlersIndex = {
  readonly [key: string]: any;
};
