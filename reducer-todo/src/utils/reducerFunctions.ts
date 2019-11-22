import { Todo } from '../types';

export const updateObject = <T extends {}>(oldObject: T, newValues: T): T => ({
  ...oldObject,
  ...newValues
});

export const updateItemInArray = (
  array: readonly Todo[],
  itemId: number,
  updateItemCallback: {
    (todo: { readonly completed: boolean }): { readonly completed: boolean };
  }
): readonly { readonly completed: boolean }[] =>
  array.map(item => (item.id !== itemId ? item : updateItemCallback(item)));

type HandlersFunctions = {
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

type HandlersIndex = {
  readonly [key: string]: any;
};

type CreateReducerParams = {
  readonly initialState: readonly Todo[];
  readonly handlers: HandlersFunctions & HandlersIndex;
};

export const createReducer = ({ initialState, handlers }: CreateReducerParams) => (
  state = initialState,
  action: { readonly type: string | number }
) =>
  Object.hasOwnProperty.call(handlers, action.type) ? handlers[action.type](state, action) : state;
