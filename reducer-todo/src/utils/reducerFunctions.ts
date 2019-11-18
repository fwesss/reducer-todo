import Todo from '../interfaces/Todo';
import { HandlersFunctions, HandlersIndex } from '../interfaces/Handlers';

export const updateObject = <T extends {}>(oldObject: T, newValues: T): T => {
  return { ...oldObject, ...newValues };
};

export const updateItemInArray = (
  array: readonly Todo[],
  itemId: number,
  updateItemCallback: {
    (todo: { readonly completed: boolean }): { readonly completed: boolean };
  }
): readonly { readonly completed: boolean }[] => {
  return array.map(item => {
    return item.id !== itemId ? item : updateItemCallback(item);
  });
};

type CreateReducerParams = {
  readonly initialState: readonly Todo[];
  readonly handlers: HandlersFunctions & HandlersIndex;
};

export function createReducer({ initialState, handlers }: CreateReducerParams) {
  return function reducer(state = initialState, action: { readonly type: string | number }) {
    const { type } = action;
    return Object.hasOwnProperty.call(handlers, type) ? handlers[type](state, action) : state;
  };
}
